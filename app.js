(() => {
  const view = document.getElementById("view");
  const popup = document.getElementById("popup");
  const popupHz = popup.querySelector(".popup-hz");
  const popupPy = popup.querySelector(".popup-py");
  const popupEn = popup.querySelector(".popup-en");
  const popupPlay = document.getElementById("popup-play");
  const popupSave = document.getElementById("popup-save");

  const state = {
    route: "library",
    storyId: null,
    showPinyin: true,
    showTranslation: false,
    activeSentence: -1,
    currentWord: null,
    vocab: loadVocab(),
    rate: parseFloat(localStorage.getItem("duchinese_rate") || "0.9"),
    voiceName: localStorage.getItem("duchinese_voice") || ""
  };

  function loadVocab() {
    try { return JSON.parse(localStorage.getItem("duchinese_vocab") || "[]"); }
    catch { return []; }
  }
  function saveVocab() {
    localStorage.setItem("duchinese_vocab", JSON.stringify(state.vocab));
    cloudPushVocab();
  }

  // ============ CLOUD SYNC (Firebase) ============
  let currentUser = null;
  let cloudPushTimer = null;
  const hasFirebase = typeof firebase !== "undefined" && firebase.apps && firebase.apps.length;

  function mergeVocabLists(a, b) {
    const map = new Map();
    for (const w of [...a, ...b]) {
      if (!w || !w.hz) continue;
      if (!map.has(w.hz)) map.set(w.hz, w);
    }
    return [...map.values()];
  }

  function cloudPushVocab() {
    if (!hasFirebase || !currentUser) return;
    clearTimeout(cloudPushTimer);
    setAuthStatus("Saving…");
    cloudPushTimer = setTimeout(() => {
      firebase.firestore().collection("users").doc(currentUser.uid).set({
        vocab: state.vocab,
        vocabUpdatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        email: currentUser.email
      }, { merge: true })
        .then(() => setAuthStatus("Synced"))
        .catch(() => setAuthStatus("Offline"));
    }, 600);
  }

  function cloudPullVocab() {
    if (!hasFirebase || !currentUser) return;
    setAuthStatus("Loading…");
    firebase.firestore().collection("users").doc(currentUser.uid).get()
      .then(snap => {
        const data = snap.exists ? snap.data() : {};
        const cloudVocab = Array.isArray(data.vocab) ? data.vocab : [];
        const merged = mergeVocabLists(cloudVocab, state.vocab);
        const changed = merged.length !== state.vocab.length || merged.length !== cloudVocab.length;
        state.vocab = merged;
        localStorage.setItem("duchinese_vocab", JSON.stringify(state.vocab));
        setAuthStatus("Synced");
        if (changed) cloudPushVocab();
        render();
      })
      .catch(() => setAuthStatus("Offline"));
  }

  function setAuthStatus(msg) {
    const el = document.getElementById("auth-status");
    if (el) el.textContent = msg ? " · " + msg : "";
  }

  function updateAuthButton() {
    const btn = document.getElementById("auth-btn");
    if (!btn) return;
    if (currentUser) {
      const name = currentUser.displayName || currentUser.email || "Signed in";
      btn.textContent = "Sign out (" + name + ")";
    } else {
      btn.textContent = "Sign in to sync";
    }
  }

  if (hasFirebase) {
    const authBtn = document.getElementById("auth-btn");
    authBtn.addEventListener("click", () => {
      if (currentUser) {
        firebase.auth().signOut();
      } else {
        const p = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(p).catch(err => {
          if (err && (err.code === "auth/popup-blocked" || err.code === "auth/popup-closed-by-user")) {
            firebase.auth().signInWithRedirect(p);
          }
        });
      }
    });
    firebase.auth().onAuthStateChanged(u => {
      currentUser = u || null;
      updateAuthButton();
      if (currentUser) cloudPullVocab();
      else setAuthStatus("");
    });
  } else {
    const btn = document.getElementById("auth-btn");
    if (btn) btn.style.display = "none";
  }

  function stripPunct(s) {
    return s.replace(/[。，！？、,.!?;:"'\s]/g, "");
  }

  // ============ SPEECH SYNTHESIS ============
  // Voice ranking for best pronunciation across iOS/Chrome/Edge.
  // Higher score = better. The top-ranked voice becomes the default.
  let availableVoices = [];
  let chosenVoice = null;

  function rankVoice(v) {
    const name = (v.name || "").toLowerCase();
    const lang = (v.lang || "").toLowerCase().replace("_", "-");
    let score = 0;

    if (lang === "zh-cn") score += 100;
    else if (lang.startsWith("zh-cn")) score += 95;
    else if (lang === "cmn-cn" || lang.startsWith("cmn-hans")) score += 80;
    else if (lang.startsWith("zh-hans")) score += 75;
    else if (lang.startsWith("zh-tw") || lang.startsWith("zh-hk")) score += 30;
    else if (lang.startsWith("zh") || lang.startsWith("cmn")) score += 25;
    else return -1;

    // Quality hints from voice name
    if (name.includes("google")) score += 70;        // Chrome's Google network voice (very good)
    if (name.includes("neural") || name.includes("natural")) score += 60;
    if (name.includes("online") || name.includes("cloud")) score += 50;
    if (name.includes("enhanced") || name.includes("premium")) score += 50;
    if (name.includes("xiaoxiao") || name.includes("xiaoyi") || name.includes("yunxi") || name.includes("yunjian") || name.includes("yunyang") || name.includes("yunxia")) score += 40;
    if (name.includes("siri")) score += 35;
    if (name.includes("tingting") || name.includes("ting-ting") || name.includes("tīng")) score += 25;
    if (name.includes("li-mu") || name.includes("limu")) score += 20;

    // Penalize compact / low-quality
    if (name.includes("compact")) score -= 20;
    if (v.localService === false) score += 5;        // remote voices are usually higher quality

    return score;
  }

  function loadVoices() {
    if (!("speechSynthesis" in window)) return;
    const all = speechSynthesis.getVoices();
    availableVoices = all
      .map(v => ({ v, score: rankVoice(v) }))
      .filter(x => x.score >= 0)
      .sort((a, b) => b.score - a.score)
      .map(x => x.v);

    // Honor saved preference if still available
    if (state.voiceName) {
      const m = availableVoices.find(v => v.name === state.voiceName);
      if (m) { chosenVoice = m; refreshVoiceUI(); return; }
    }
    chosenVoice = availableVoices[0] || null;
    refreshVoiceUI();
  }

  if ("speechSynthesis" in window) {
    loadVoices();
    // Voices load asynchronously in Chrome — re-pick when they arrive.
    speechSynthesis.addEventListener("voiceschanged", loadVoices);
    // iOS Safari sometimes needs a nudge before voices appear.
    setTimeout(loadVoices, 250);
    setTimeout(loadVoices, 1000);
  }

  function speak(text) {
    if (!("speechSynthesis" in window) || !text) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "zh-CN";
    u.rate = state.rate;
    u.pitch = 1;
    u.volume = 1;
    if (chosenVoice) u.voice = chosenVoice;
    speechSynthesis.speak(u);
    return u;
  }

  function refreshVoiceUI() {
    const sel = document.getElementById("voice-select");
    if (!sel) return;
    sel.innerHTML = availableVoices.length === 0
      ? `<option>No Chinese voice found</option>`
      : availableVoices.map(v =>
          `<option value="${v.name}" ${v === chosenVoice ? "selected" : ""}>${v.name} (${v.lang})</option>`
        ).join("");

    const warn = document.getElementById("voice-warning");
    if (warn) warn.style.display = availableVoices.length === 0 ? "block" : "none";
  }

  // ============ NAVIGATION ============
  document.querySelectorAll("[data-nav]").forEach(el => {
    el.addEventListener("click", () => {
      const r = el.getAttribute("data-nav");
      state.route = r;
      state.storyId = null;
      render();
    });
  });

  function openStory(id) {
    state.route = "reader";
    state.storyId = id;
    state.activeSentence = -1;
    render();
  }

  // ============ RENDER ============
  function render() {
    hidePopup();
    if (state.route === "library") renderLibrary();
    else if (state.route === "reader") renderReader();
    else if (state.route === "vocab") renderVocab();
  }

  function renderLibrary() {
    const byLevel = {
      newbie: STORIES.filter(s => s.level === "newbie"),
      beginner: STORIES.filter(s => s.level === "beginner"),
      intermediate: STORIES.filter(s => s.level === "intermediate")
    };
    view.innerHTML = `
      <div class="hero">
        <h1>Learn Mandarin through stories</h1>
        <p>Tap any word to see pinyin and meaning. Save words to review later.</p>
      </div>
      ${levelSection("Newbie", "newbie", "Simple sentences, basic vocabulary.", byLevel.newbie)}
      ${levelSection("Beginner", "beginner", "Longer passages with common daily vocabulary.", byLevel.beginner)}
      ${levelSection("Intermediate", "intermediate", "More complex grammar and richer vocabulary.", byLevel.intermediate)}
    `;
    view.querySelectorAll(".story-card").forEach(card => {
      card.addEventListener("click", () => openStory(card.dataset.id));
    });
  }

  function levelSection(label, cls, desc, stories) {
    return `
      <section class="level-section">
        <div class="level-header">
          <span class="level-badge ${cls}">${label}</span>
          <h2 class="level-title">${stories.length} stories</h2>
          <span class="level-desc">${desc}</span>
        </div>
        <div class="story-grid">
          ${stories.map(s => `
            <div class="story-card" data-id="${s.id}">
              <div class="hz">${s.title.hz}</div>
              <div class="py">${s.title.py}</div>
              <div class="en">${s.title.en}</div>
              <div class="desc">${s.description}</div>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderReader() {
    const story = STORIES.find(s => s.id === state.storyId);
    if (!story) { state.route = "library"; return render(); }

    const savedSet = new Set(state.vocab.map(v => v.hz));

    view.innerHTML = `
      <div class="reader-top">
        <button class="back-btn" id="back">← Library</button>
        <h2 class="reader-title">
          ${story.title.hz}
          <span class="py">${story.title.py} · ${story.title.en}</span>
        </h2>
      </div>
      <div id="voice-warning" class="voice-warning" style="display:none">
        No Chinese voice is installed. On iOS: Settings → Accessibility → Spoken Content → Voices → Chinese.
        On desktop, try Chrome or Edge for higher-quality network voices.
      </div>
      <div class="controls">
        <label class="toggle"><input type="checkbox" id="tg-py" ${state.showPinyin?"checked":""}/> Pinyin</label>
        <label class="toggle"><input type="checkbox" id="tg-en" ${state.showTranslation?"checked":""}/> Translation</label>
        <button class="ctrl-btn" id="play-all">▶ Play all</button>
        <button class="ctrl-btn secondary" id="stop">■ Stop</button>
        <span class="spacer"></span>
        <label class="voice-picker">Voice
          <select id="voice-select"></select>
        </label>
        <label class="rate-picker">Speed
          <input type="range" id="rate-slider" min="0.5" max="1.2" step="0.05" value="${state.rate}"/>
          <span id="rate-val">${state.rate.toFixed(2)}×</span>
        </label>
      </div>
      <div id="sentences" class="${state.showPinyin?"show-pinyin":""} ${state.showTranslation?"show-translation":""}">
        ${story.sentences.map((s, i) => `
          <div class="sentence" data-i="${i}">
            <div class="hz-line">
              ${s.words.map((w, j) => {
                const key = stripPunct(w.hz);
                const saved = savedSet.has(key) ? "saved" : "";
                return `<span class="word ${saved}" data-i="${i}" data-j="${j}">
                  <span class="w-py">${w.py || ""}</span>
                  <span class="w-hz">${w.hz}</span>
                </span>`;
              }).join("")}
            </div>
            <div class="en-line">${s.en}</div>
          </div>
        `).join("")}
      </div>
    `;

    refreshVoiceUI();

    document.getElementById("back").onclick = () => { state.route = "library"; render(); };
    document.getElementById("tg-py").onchange = e => {
      state.showPinyin = e.target.checked;
      document.getElementById("sentences").classList.toggle("show-pinyin", state.showPinyin);
    };
    document.getElementById("tg-en").onchange = e => {
      state.showTranslation = e.target.checked;
      document.getElementById("sentences").classList.toggle("show-translation", state.showTranslation);
    };
    document.getElementById("play-all").onclick = () => playAll(story);
    document.getElementById("stop").onclick = () => speechSynthesis.cancel();

    const voiceSel = document.getElementById("voice-select");
    voiceSel.onchange = e => {
      const v = availableVoices.find(x => x.name === e.target.value);
      if (v) {
        chosenVoice = v;
        state.voiceName = v.name;
        localStorage.setItem("duchinese_voice", v.name);
        // Quick preview
        speak("你好");
      }
    };
    const rateSlider = document.getElementById("rate-slider");
    const rateVal = document.getElementById("rate-val");
    rateSlider.oninput = e => {
      state.rate = parseFloat(e.target.value);
      rateVal.textContent = state.rate.toFixed(2) + "×";
      localStorage.setItem("duchinese_rate", String(state.rate));
    };

    view.querySelectorAll(".word").forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        const i = +el.dataset.i, j = +el.dataset.j;
        showWordPopup(story.sentences[i].words[j], el);
      });
    });
    view.querySelectorAll(".sentence").forEach(el => {
      el.addEventListener("click", () => {
        const i = +el.dataset.i;
        playSentence(story.sentences[i], i);
      });
    });
  }

  function renderVocab() {
    if (state.vocab.length === 0) {
      view.innerHTML = `
        <div class="hero"><h1>My Vocabulary</h1></div>
        <div class="empty-state">
          No saved words yet. Open a story and tap any word to save it here.
        </div>`;
      return;
    }
    view.innerHTML = `
      <div class="hero"><h1>My Vocabulary</h1><p>${state.vocab.length} saved words</p></div>
      <div class="vocab-list">
        ${state.vocab.map((w, idx) => `
          <div class="vocab-item">
            <button class="remove" data-idx="${idx}" title="Remove">×</button>
            <div class="hz">${w.hz}</div>
            <div class="py">${w.py}</div>
            <div class="en">${w.en}</div>
          </div>
        `).join("")}
      </div>`;
    view.querySelectorAll(".vocab-item .remove").forEach(b => {
      b.onclick = () => {
        state.vocab.splice(+b.dataset.idx, 1);
        saveVocab();
        render();
      };
    });
    view.querySelectorAll(".vocab-item .hz").forEach(el => {
      el.style.cursor = "pointer";
      el.onclick = () => speak(el.textContent);
    });
  }

  // ============ POPUP ============
  function showWordPopup(word, el) {
    const hz = stripPunct(word.hz);
    if (!hz) return;
    state.currentWord = { hz, py: word.py || "", en: word.en || "" };

    const dict = window.DICT[hz];
    if (dict && !state.currentWord.py) state.currentWord.py = dict.py;
    if (dict && !state.currentWord.en) state.currentWord.en = dict.en;

    popupHz.textContent = state.currentWord.hz;
    popupPy.textContent = state.currentWord.py;
    popupEn.textContent = state.currentWord.en;

    const saved = state.vocab.some(v => v.hz === hz);
    popupSave.textContent = saved ? "★ Saved" : "☆ Save word";

    popup.classList.remove("hidden");
    // Auto-pronounce on tap (uses state.rate / chosenVoice)
    speak(state.currentWord.hz);
  }
  function hidePopup() {
    popup.classList.add("hidden");
    state.currentWord = null;
  }
  popupPlay.onclick = () => { if (state.currentWord) speak(state.currentWord.hz); };
  popupSave.onclick = () => {
    if (!state.currentWord) return;
    const w = state.currentWord;
    const i = state.vocab.findIndex(v => v.hz === w.hz);
    if (i >= 0) state.vocab.splice(i, 1);
    else state.vocab.push({ hz: w.hz, py: w.py, en: w.en });
    saveVocab();
    const saved = state.vocab.some(v => v.hz === w.hz);
    popupSave.textContent = saved ? "★ Saved" : "☆ Save word";
    view.querySelectorAll(`.word`).forEach(el => {
      const span = el.querySelector(".w-hz");
      if (span && stripPunct(span.textContent) === w.hz) {
        el.classList.toggle("saved", saved);
      }
    });
  };
  document.addEventListener("click", (e) => {
    if (popup.classList.contains("hidden")) return;
    if (popup.contains(e.target)) return;
    if (e.target.closest(".word")) return;
    hidePopup();
  });

  function playSentence(sentence, i) {
    view.querySelectorAll(".sentence").forEach(el => el.classList.remove("active"));
    const el = view.querySelector(`.sentence[data-i="${i}"]`);
    if (el) el.classList.add("active");
    const text = sentence.words.map(w => w.hz).join("");
    speak(text);
  }
  function playAll(story) {
    speechSynthesis.cancel();
    let i = 0;
    const next = () => {
      if (i >= story.sentences.length) {
        view.querySelectorAll(".sentence").forEach(el => el.classList.remove("active"));
        return;
      }
      const s = story.sentences[i];
      view.querySelectorAll(".sentence").forEach(el => el.classList.remove("active"));
      const el = view.querySelector(`.sentence[data-i="${i}"]`);
      if (el) { el.classList.add("active"); el.scrollIntoView({ behavior:"smooth", block:"center" }); }
      const u = new SpeechSynthesisUtterance(s.words.map(w => w.hz).join(""));
      u.lang = "zh-CN";
      u.rate = state.rate;
      u.pitch = 1;
      if (chosenVoice) u.voice = chosenVoice;
      u.onend = () => { i++; setTimeout(next, 250); };
      speechSynthesis.speak(u);
    };
    next();
  }

  render();
})();
