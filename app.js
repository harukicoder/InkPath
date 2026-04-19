(() => {
  // ============ THEME (light / dark / auto) ============
  const THEME_KEY = "inkpath_theme";
  function applyTheme(t) {
    if (t === "light" || t === "dark") {
      document.documentElement.setAttribute("data-theme", t);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    const btn = document.getElementById("theme-btn");
    if (btn) {
      const effective = t === "auto" || !t
        ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
        : t;
      btn.textContent = effective === "dark" ? "☀️" : "🌙";
      btn.title = "Theme: " + (t || "auto") + " · click to switch";
    }
  }
  let currentTheme = localStorage.getItem(THEME_KEY) || "auto";
  applyTheme(currentTheme);
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (currentTheme === "auto") applyTheme("auto");
  });
  document.getElementById("theme-btn").addEventListener("click", () => {
    // cycle: auto → light → dark → auto
    currentTheme = currentTheme === "auto" ? "light" : currentTheme === "light" ? "dark" : "auto";
    localStorage.setItem(THEME_KEY, currentTheme);
    applyTheme(currentTheme);
  });

  const view = document.getElementById("view");
  const popup = document.getElementById("popup");
  const popupHz = popup.querySelector(".popup-hz");
  const popupPy = popup.querySelector(".popup-py");
  const popupEn = popup.querySelector(".popup-en");
  const popupHsk = popup.querySelector(".popup-hsk");
  const popupExamples = popup.querySelector(".popup-examples");
  const popupPlay = document.getElementById("popup-play");
  const popupSave = document.getElementById("popup-save");

  const state = {
    route: "library",
    storyId: null,
    showPinyin: true,
    showTranslation: false,
    activeSentence: -1,
    currentWord: null,
    currentSentence: null,       // for save-with-context
    customStory: loadCustomStory(), // user-pasted text
    vocab: loadVocab(),
    progress: loadProgress(),
    daily: loadDaily(),
    rate: parseFloat(localStorage.getItem("duchinese_rate") || "0.9"),
    voiceName: localStorage.getItem("duchinese_voice") || ""
  };

  function loadDaily() {
    try { return JSON.parse(localStorage.getItem("inkpath_daily") || "{}"); }
    catch { return {}; }
  }
  function saveDaily() {
    localStorage.setItem("inkpath_daily", JSON.stringify(state.daily));
    cloudPushDaily();
  }
  function todayKey() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function bumpDaily(kind) {
    const k = todayKey();
    const day = state.daily[k] || { read: 0, saved: 0 };
    if (kind === "read") day.read += 1;
    else if (kind === "saved") day.saved += 1;
    state.daily[k] = day;
    saveDaily();
    updateStreakUI();
  }
  function computeStreak() {
    const days = Object.keys(state.daily).sort();
    if (!days.length) return 0;
    const d = new Date();
    let streak = 0;
    while (true) {
      const k = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
      const day = state.daily[k];
      const active = day && ((day.read || 0) > 0 || (day.saved || 0) > 0);
      if (active) {
        streak += 1;
        d.setDate(d.getDate() - 1);
      } else {
        // Allow today to be empty and still count current streak (don't break on today itself)
        if (streak === 0 && k === todayKey()) { d.setDate(d.getDate() - 1); continue; }
        break;
      }
    }
    return streak;
  }
  function updateStreakUI() {
    const el = document.getElementById("streak");
    if (!el) return;
    const n = computeStreak();
    const today = state.daily[todayKey()] || { read: 0, saved: 0 };
    const active = (today.read || 0) > 0 || (today.saved || 0) > 0;
    if (n <= 0) { el.classList.add("hidden"); return; }
    el.classList.remove("hidden");
    el.classList.toggle("inactive-today", !active);
    el.textContent = "🔥 " + n;
    el.title = "Streak: " + n + " day" + (n === 1 ? "" : "s") +
      (active ? " · today: " + (today.read||0) + " read, " + (today.saved||0) + " saved"
              : " · keep it alive — read a sentence or save a word today");
  }

  function loadCustomStory() {
    try { return JSON.parse(localStorage.getItem("inkpath_paste") || "null"); }
    catch { return null; }
  }
  function saveCustomStory() {
    if (state.customStory) localStorage.setItem("inkpath_paste", JSON.stringify(state.customStory));
    else localStorage.removeItem("inkpath_paste");
  }

  // ============ GRAMMAR PATTERN DETECTION ============
  // Regex-detected recurring patterns, rendered as chips above each sentence
  // they appear in. Ordered so more specific patterns win ties visually.
  const GRAMMAR_PATTERNS = [
    { re: /虽然[^。！？]*?但是/, label: "虽然…但是", note: "although … but — concessive pair" },
    { re: /不但[^。！？]*?而且/, label: "不但…而且", note: "not only … but also" },
    { re: /因为[^。！？]*?所以/, label: "因为…所以", note: "because … therefore" },
    { re: /如果[^。！？]*?就/, label: "如果…就", note: "if … then" },
    { re: /一边[^。！？]*?一边/, label: "一边…一边", note: "doing two things at once" },
    { re: /越[^。！？]+?越/, label: "越…越", note: "the more … the more" },
    { re: /又[^。！？]+?又/, label: "又…又", note: "both … and" },
    { re: /比[^。！？]+?[得的]多/, label: "比…得多", note: "much more than — comparison" },
    { re: /比[^。！？]+?一点/, label: "比…一点", note: "a little more than" },
    { re: /[^。！？]*?比[^，。！？]+?[高大小多少好快慢长短冷热]/, label: "A 比 B …", note: "A is more … than B" },
    { re: /是[^。！？]+?的[。！？!?]?$/, label: "是…的", note: "emphasis on time, place, or manner" },
    { re: /把[^，。！？]{1,10}?[放送给交带拿吃喝写看听做买卖开关]/, label: "把 construction", note: "subject does V to this object" },
    { re: /被[^，。！？]{0,6}?[打骂吃喝看见抓]/, label: "被 construction", note: "passive — subject is V-ed" },
    { re: /[^。！？]+?[了过着]$/, label: "aspect marker", note: "了 / 过 / 着 — completed / experienced / ongoing" },
    { re: /[吗呢吧啊]\?|[吗呢吧啊][。！？]?$/, label: "question particle", note: "吗 / 呢 / 吧 softens or asks" },
    { re: /一[^。！？]{1,2}?就/, label: "一…就", note: "as soon as … then" },
    { re: /连[^。！？]+?都/, label: "连…都", note: "even … (emphatic)" },
    { re: /除了[^。！？]+?[以之]外/, label: "除了…以外", note: "besides / except" },
    { re: /[多么真好]+[^。！？]+?[啊呀]/, label: "exclamation", note: "emphatic exclamation" }
  ];
  function detectPatterns(sentenceHz) {
    const hits = [];
    const seen = new Set();
    for (const p of GRAMMAR_PATTERNS) {
      if (p.re.test(sentenceHz) && !seen.has(p.label)) {
        seen.add(p.label);
        hits.push(p);
        if (hits.length >= 3) break;
      }
    }
    return hits;
  }

  // ============ TOKENIZER (paste-to-learn) ============
  // Greedy longest-match against HSK_DICT + DICT. Punctuation attaches to the
  // previous word to match the existing story word format.
  function tokenizeText(text) {
    // Split on sentence terminators, keeping the terminator attached.
    const rawSentences = [];
    let buf = "";
    for (const ch of text) {
      buf += ch;
      if (/[。！？!?.\n]/.test(ch)) {
        if (buf.trim()) rawSentences.push(buf);
        buf = "";
      }
    }
    if (buf.trim()) rawSentences.push(buf);

    return rawSentences.map(s => ({ en: "", words: segmentSentence(s.trim()) })).filter(x => x.words.length);
  }
  function segmentSentence(s) {
    const out = [];
    const MAX = 5;
    let i = 0;
    while (i < s.length) {
      const ch = s[i];
      // Whitespace: skip
      if (/\s/.test(ch)) { i++; continue; }
      // Punctuation: attach to previous word
      if (/[。，、；：！？“”‘’（）《》——,.!?;:"'()\[\]{}—]/.test(ch)) {
        if (out.length) out[out.length - 1].hz += ch;
        else out.push({ hz: ch, py: "", en: "" });
        i++;
        continue;
      }
      // CJK: greedy longest match
      if (/[\u4e00-\u9fff]/.test(ch)) {
        let matched = null;
        for (let len = Math.min(MAX, s.length - i); len >= 1; len--) {
          const cand = s.substr(i, len);
          if (!/^[\u4e00-\u9fff]+$/.test(cand)) continue;
          const d = dictLookup(cand);
          if (d) { matched = { hz: cand, py: d.py || "", en: d.en || "" }; break; }
        }
        if (!matched) matched = { hz: ch, py: "", en: "" };
        out.push(matched);
        i += matched.hz.length;
        continue;
      }
      // ASCII/other: keep as its own token
      let j = i + 1;
      while (j < s.length && !/[\s。，、；：！？,.!?;:"'()\[\]{}\u4e00-\u9fff]/.test(s[j])) j++;
      out.push({ hz: s.substr(i, j - i), py: "", en: "" });
      i = j;
    }
    return out;
  }

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem("inkpath_progress") || "{}"); }
    catch { return {}; }
  }
  function saveProgress() {
    localStorage.setItem("inkpath_progress", JSON.stringify(state.progress));
    cloudPushProgress();
  }
  function markRead(storyId, sentenceIndex, total) {
    // Don't record paste-story progress — it's ephemeral.
    if (storyId === "__paste__") { bumpDaily("read"); return; }
    const prev = state.progress[storyId] || {};
    const next = {
      lastSentence: Math.max(prev.lastSentence || 0, sentenceIndex),
      total: total,
      updatedAt: Date.now()
    };
    state.progress[storyId] = next;
    saveProgress();
    bumpDaily("read");
  }

  // Unified dictionary lookup: flashcards HSK data wins for examples/HSK,
  // the legacy DICT fills in pinyin/english for anything HSK data is missing.
  // For compound words not in HSK_DICT, derive the HSK level from the hardest
  // character component (e.g. 星期六 → max(星=1, 期=2, 六=1) = HSK 2).
  function deriveHskFromChars(hz) {
    if (!window.HSK_DICT || !hz || hz.length < 2) return null;
    let maxLevel = 0;
    let covered = 0;
    for (const ch of hz) {
      // skip non-CJK (shouldn't occur after stripPunct, but defensive)
      if (!/[\u4e00-\u9fff]/.test(ch)) continue;
      const entry = window.HSK_DICT[ch];
      if (entry && typeof entry.hsk === "number") {
        covered++;
        if (entry.hsk > maxLevel) maxLevel = entry.hsk;
      } else {
        // At least one component unknown → cannot confidently assign an HSK level
        return null;
      }
    }
    return covered > 0 ? maxLevel : null;
  }

  function dictLookup(hz) {
    const hsk = (window.HSK_DICT && window.HSK_DICT[hz]) || null;
    const base = (window.DICT && window.DICT[hz]) || null;
    if (!hsk && !base) return null;
    const derivedHsk = hsk ? null : deriveHskFromChars(hz);
    return {
      py: (hsk && hsk.py) || (base && base.py) || "",
      en: (hsk && hsk.en) || (base && base.en) || "",
      hsk: hsk ? hsk.hsk : derivedHsk,
      type: hsk ? hsk.type : null,
      ex: (hsk && hsk.ex) || []
    };
  }

  // Returns the coverage { known, total } of unique dictionary words for a story.
  function storyCoverage(story) {
    const uniq = new Set();
    for (const s of story.sentences) {
      for (const w of s.words) {
        const hz = stripPunct(w.hz);
        if (hz) uniq.add(hz);
      }
    }
    const savedSet = new Set(state.vocab.map(v => v.hz));
    let known = 0;
    for (const hz of uniq) if (savedSet.has(hz)) known++;
    return { known, total: uniq.size };
  }

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

  let cloudProgressTimer = null;
  function cloudPushProgress() {
    if (!hasFirebase || !currentUser) return;
    clearTimeout(cloudProgressTimer);
    cloudProgressTimer = setTimeout(() => {
      firebase.firestore().collection("users").doc(currentUser.uid).set({
        inkpathProgress: state.progress,
        inkpathProgressUpdatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true }).catch(() => {});
    }, 800);
  }

  let cloudDailyTimer = null;
  function cloudPushDaily() {
    if (!hasFirebase || !currentUser) return;
    clearTimeout(cloudDailyTimer);
    cloudDailyTimer = setTimeout(() => {
      firebase.firestore().collection("users").doc(currentUser.uid).set({
        inkpathDaily: state.daily,
        inkpathDailyUpdatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true }).catch(() => {});
    }, 800);
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

        // Merge reading progress: prefer the higher lastSentence per story.
        const cloudProg = data.inkpathProgress && typeof data.inkpathProgress === "object" ? data.inkpathProgress : {};
        const mergedProg = Object.assign({}, cloudProg);
        for (const id of Object.keys(state.progress)) {
          const local = state.progress[id];
          const remote = cloudProg[id];
          if (!remote || (local.lastSentence || 0) > (remote.lastSentence || 0)) {
            mergedProg[id] = local;
          }
        }
        state.progress = mergedProg;
        localStorage.setItem("inkpath_progress", JSON.stringify(state.progress));

        // Merge daily stats: sum counts per date.
        const cloudDaily = data.inkpathDaily && typeof data.inkpathDaily === "object" ? data.inkpathDaily : {};
        const mergedDaily = Object.assign({}, cloudDaily);
        for (const k of Object.keys(state.daily)) {
          const a = mergedDaily[k] || { read: 0, saved: 0 };
          const b = state.daily[k] || { read: 0, saved: 0 };
          mergedDaily[k] = {
            read: Math.max(a.read || 0, b.read || 0),
            saved: Math.max(a.saved || 0, b.saved || 0)
          };
        }
        state.daily = mergedDaily;
        localStorage.setItem("inkpath_daily", JSON.stringify(state.daily));
        updateStreakUI();

        setAuthStatus("Synced");
        if (changed) cloudPushVocab();
        cloudPushProgress();
        cloudPushDaily();
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
        return;
      }
      const p = new firebase.auth.GoogleAuthProvider();
      setAuthStatus("Opening sign-in…");
      firebase.auth().signInWithPopup(p)
        .catch(err => {
          console.error("[InkPath] signInWithPopup failed:", err);
          const code = err && err.code;
          if (code === "auth/popup-blocked" || code === "auth/popup-closed-by-user" || code === "auth/cancelled-popup-request") {
            setAuthStatus("Redirecting…");
            firebase.auth().signInWithRedirect(p).catch(e2 => {
              console.error("[InkPath] signInWithRedirect failed:", e2);
              setAuthStatus("Error: " + (e2.code || e2.message));
              alert("Sign-in failed: " + (e2.code || e2.message));
            });
          } else {
            setAuthStatus("Error: " + (code || err.message));
            alert("Sign-in failed: " + (code || err.message) +
              (code === "auth/unauthorized-domain"
                ? "\n\nAdd this domain in Firebase Console → Authentication → Settings → Authorized domains."
                : ""));
          }
        });
    });

    // Complete sign-in if we just came back from a redirect
    firebase.auth().getRedirectResult().catch(err => {
      console.error("[InkPath] getRedirectResult failed:", err);
      if (err && err.code) setAuthStatus("Error: " + err.code);
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
    console.warn("[InkPath] Firebase SDK not loaded — cloud sync disabled.");
  }

  function stripPunct(s) {
    return s.replace(/[。，！？、,.!?;:"'\s]/g, "");
  }

  // Wrap each occurrence of `needle` inside `hay` with <mark> so the saved
  // word pops out of its context sentence in the Vocabulary list.
  function highlightInContext(hay, needle) {
    if (!hay) return "";
    const esc = (s) => s.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[c]);
    if (!needle) return esc(hay);
    const h = esc(hay);
    const n = esc(needle).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return h.replace(new RegExp(n, "g"), `<mark>${esc(needle)}</mark>`);
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
    updateStreakUI();
    if (state.route === "library") renderLibrary();
    else if (state.route === "reader") renderReader();
    else if (state.route === "vocab") renderVocab();
    else if (state.route === "paste") renderPaste();
    else if (state.route === "hsk") renderHsk();
  }

  function renderLibrary() {
    const byLevel = {
      newbie: STORIES.filter(s => s.level === "newbie"),
      beginner: STORIES.filter(s => s.level === "beginner"),
      intermediate: STORIES.filter(s => s.level === "intermediate")
    };

    // Pick the most-recently-touched in-progress story (not yet finished)
    const resume = pickResumeStory();

    view.innerHTML = `
      <div class="hero">
        <h1>Learn Mandarin through stories</h1>
        <p>Tap any word to see pinyin and meaning. Save words to review later.</p>
      </div>
      ${resume ? renderResumeCard(resume) : ""}
      ${levelSection("Newbie", "newbie", "Simple sentences, basic vocabulary.", byLevel.newbie)}
      ${levelSection("Beginner", "beginner", "Longer passages with common daily vocabulary.", byLevel.beginner)}
      ${levelSection("Intermediate", "intermediate", "More complex grammar and richer vocabulary.", byLevel.intermediate)}
    `;
    view.querySelectorAll(".story-card").forEach(card => {
      card.addEventListener("click", () => openStory(card.dataset.id));
    });
    const resumeBtn = view.querySelector(".resume-card");
    if (resumeBtn) resumeBtn.addEventListener("click", () => openStory(resumeBtn.dataset.id));
  }

  function pickResumeStory() {
    let best = null;
    for (const id of Object.keys(state.progress)) {
      const p = state.progress[id];
      const story = STORIES.find(s => s.id === id);
      if (!story) continue;
      const total = p.total || story.sentences.length;
      if ((p.lastSentence || 0) + 1 >= total) continue; // already finished
      if (!best || (p.updatedAt || 0) > (best.updatedAt || 0)) {
        best = Object.assign({ id, story, total }, p);
      }
    }
    return best;
  }

  function renderResumeCard(r) {
    const pct = Math.round(((r.lastSentence + 1) / r.total) * 100);
    return `
      <section class="resume-section">
        <div class="resume-card" data-id="${r.id}">
          <div class="resume-label">Continue reading</div>
          <div class="resume-title">
            <span class="hz">${r.story.title.hz}</span>
            <span class="py">${r.story.title.py} · ${r.story.title.en}</span>
          </div>
          <div class="resume-progress"><div style="width:${pct}%"></div></div>
          <div class="resume-meta">Sentence ${r.lastSentence + 1} of ${r.total} · ${pct}%</div>
        </div>
      </section>
    `;
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
          ${stories.map(s => {
            const total = s.sentences.length;
            const prog = state.progress[s.id];
            const read = prog ? Math.min((prog.lastSentence || 0) + 1, total) : 0;
            const pct = total ? Math.round((read / total) * 100) : 0;
            const started = read > 0;
            const done = read >= total;
            const label = done
              ? "Read · " + total + " sentences"
              : started
                ? read + " / " + total + " sentences · " + pct + "%"
                : "Not started";
            return `
              <div class="story-card ${done ? "done" : ""} ${started && !done ? "in-progress" : ""}" data-id="${s.id}">
                ${done ? `<span class="done-badge">✓ Read</span>` : started ? `<span class="done-badge in-progress">In progress</span>` : ""}
                <div class="hz">${s.title.hz}</div>
                <div class="py">${s.title.py}</div>
                <div class="en">${s.title.en}</div>
                <div class="desc">${s.description}</div>
                <div class="coverage" title="Reading progress">
                  <div class="coverage-bar"><div style="width:${pct}%"></div></div>
                  <div class="coverage-label">${label}</div>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </section>
    `;
  }

  function renderReader() {
    const story = state.storyId === "__paste__"
      ? state.customStory
      : STORIES.find(s => s.id === state.storyId);
    if (!story) { state.route = "library"; return render(); }

    const savedSet = new Set(state.vocab.map(v => v.hz));
    const cov = storyCoverage(story);
    const covPct = cov.total ? Math.round((cov.known / cov.total) * 100) : 0;

    view.innerHTML = `
      <div class="reader-top">
        <button class="back-btn" id="back">← Library</button>
        <h2 class="reader-title">
          ${story.title.hz}
          <span class="py">${story.title.py} · ${story.title.en}</span>
        </h2>
        <span class="reader-coverage">${cov.known}/${cov.total} known · ${covPct}%</span>
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
        ${story.sentences.map((s, i) => {
          const sentHz = s.words.map(w => w.hz).join("");
          const patterns = detectPatterns(sentHz);
          return `
          <div class="sentence" data-i="${i}">
            ${patterns.length ? `<div class="grammar-chips">${patterns.map(p =>
              `<span class="grammar-chip" title="${p.note}">${p.label}</span>`
            ).join("")}</div>` : ""}
            <div class="hz-line">
              ${s.words.map((w, j) => {
                const key = stripPunct(w.hz);
                const classes = ["word"];
                if (key) {
                  if (savedSet.has(key)) classes.push("saved");
                  else if (dictLookup(key)) classes.push("new");
                  else classes.push("unknown");
                }
                return `<span class="${classes.join(" ")}" data-i="${i}" data-j="${j}">
                  <span class="w-py">${w.py || ""}</span>
                  <span class="w-hz">${w.hz}</span>
                </span>`;
              }).join("")}
              <button class="en-chip" data-i="${i}" title="Show translation">EN</button>
            </div>
            <div class="en-line">${s.en}</div>
          </div>
        `;
        }).join("")}
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
        state.currentSentence = story.sentences[i];
        showWordPopup(story.sentences[i].words[j], el);
      });
    });
    view.querySelectorAll(".en-chip").forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        const sent = el.closest(".sentence");
        if (sent) sent.classList.toggle("show-en");
      });
    });
    view.querySelectorAll(".sentence").forEach(el => {
      el.addEventListener("click", () => {
        const i = +el.dataset.i;
        playSentence(story.sentences[i], i);
        markRead(story.id, i, story.sentences.length);
      });
    });

    // Resume: jump to the last-read sentence if we have one.
    const prog = state.progress[story.id];
    if (prog && prog.lastSentence > 0) {
      const target = view.querySelector(`.sentence[data-i="${prog.lastSentence}"]`);
      if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: "instant", block: "center" }));
    }
  }

  // ============ PASTE-TO-LEARN ============
  function renderPaste() {
    const draft = (state.customStory && state.customStory.__raw) || "";
    view.innerHTML = `
      <div class="hero">
        <h1>Paste any Chinese text</h1>
        <p>Drop in an article, song, menu, or chat. We'll segment it into tappable words.</p>
      </div>
      <div class="paste-wrap">
        <textarea id="paste-input" class="paste-input" rows="10"
          placeholder="粘贴任何中文文本…"
          spellcheck="false">${draft.replace(/</g, "&lt;")}</textarea>
        <div class="paste-actions">
          <button id="paste-go" class="ctrl-btn">Segment &amp; read →</button>
          ${state.customStory ? `<button id="paste-reopen" class="ctrl-btn secondary">Reopen last</button>` : ""}
          <button id="paste-clear" class="ctrl-btn secondary">Clear</button>
          <span class="paste-hint">Tip: any unrecognized word falls back to single-character lookup.</span>
        </div>
      </div>
    `;
    const input = document.getElementById("paste-input");
    document.getElementById("paste-go").onclick = () => {
      const raw = (input.value || "").trim();
      if (!raw) return;
      const sentences = tokenizeText(raw);
      if (!sentences.length) return;
      state.customStory = {
        id: "__paste__",
        level: "paste",
        __raw: raw,
        title: { hz: "我的文本", py: "Wǒ de wénběn", en: "Your pasted text" },
        description: "Tokenized from pasted text.",
        sentences
      };
      saveCustomStory();
      state.route = "reader";
      state.storyId = "__paste__";
      render();
    };
    const re = document.getElementById("paste-reopen");
    if (re) re.onclick = () => {
      state.route = "reader"; state.storyId = "__paste__"; render();
    };
    document.getElementById("paste-clear").onclick = () => {
      input.value = "";
      state.customStory = null;
      saveCustomStory();
      render();
    };
  }

  // ============ HSK PROGRESS DASHBOARD ============
  function renderHsk() {
    if (!window.HSK_DICT) {
      view.innerHTML = `<div class="hero"><h1>HSK Progress</h1><p>Dictionary not loaded.</p></div>`;
      return;
    }
    // Totals per HSK level from the dictionary.
    const totals = { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0 };
    for (const hz of Object.keys(window.HSK_DICT)) {
      const lvl = window.HSK_DICT[hz].hsk;
      if (lvl >= 1 && lvl <= 6) totals[lvl]++;
    }
    // Learned per level from saved vocab (fall back to derived level).
    const learned = { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, other:0 };
    const savedSet = new Set();
    for (const w of state.vocab) {
      savedSet.add(w.hz);
      let lvl = w.hsk;
      if (lvl == null) {
        const d = dictLookup(w.hz);
        lvl = d ? d.hsk : null;
      }
      if (lvl >= 1 && lvl <= 6) learned[lvl]++;
      else learned.other++;
    }
    const grandTotal = Object.values(totals).reduce((a,b)=>a+b, 0);
    const grandLearned = learned[1]+learned[2]+learned[3]+learned[4]+learned[5]+learned[6];
    const grandPct = grandTotal ? Math.round(grandLearned / grandTotal * 100) : 0;

    const rows = [1,2,3,4,5,6].map(l => {
      const pct = totals[l] ? Math.round(learned[l] / totals[l] * 100) : 0;
      return `
        <div class="hsk-row">
          <span class="hsk-row-badge hsk-badge hsk-${l}">HSK ${l}</span>
          <div class="hsk-row-bar"><div class="hsk-${l}" style="width:${pct}%"></div></div>
          <span class="hsk-row-count">${learned[l]} / ${totals[l]}</span>
          <span class="hsk-row-pct">${pct}%</span>
        </div>
      `;
    }).join("");

    view.innerHTML = `
      <div class="hero">
        <h1>HSK Progress</h1>
        <p>${grandLearned} of ${grandTotal} HSK 1–6 words learned · ${grandPct}% overall</p>
      </div>
      <div class="hsk-grid">${rows}</div>
      ${learned.other ? `<p class="hsk-other-note">Plus ${learned.other} word${learned.other===1?"":"s"} outside HSK 1–6.</p>` : ""}
    `;
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

    // Backfill HSK level for words saved before derivation existed.
    // We re-check on every render; dictLookup now also derives from characters.
    let backfilled = false;
    for (const w of state.vocab) {
      if (w.hsk == null) {
        const d = dictLookup(w.hz);
        if (d && d.hsk) { w.hsk = d.hsk; backfilled = true; }
      }
    }
    if (backfilled) saveVocab();

    // Group by HSK level for filter pills.
    const filter = state.vocabFilter || "all";
    const filtered = filter === "all"
      ? state.vocab
      : filter === "other"
        ? state.vocab.filter(w => !w.hsk)
        : state.vocab.filter(w => w.hsk === +filter);

    const counts = { all: state.vocab.length, other: 0 };
    for (let l = 1; l <= 6; l++) counts[l] = 0;
    for (const w of state.vocab) {
      if (w.hsk) counts[w.hsk] = (counts[w.hsk] || 0) + 1;
      else counts.other++;
    }

    const pill = (key, label) =>
      `<button class="pill ${filter === String(key) ? "active" : ""}" data-filter="${key}">${label} <span class="count">${counts[key] || 0}</span></button>`;

    view.innerHTML = `
      <div class="hero"><h1>My Vocabulary</h1><p>${state.vocab.length} saved words</p></div>
      <div class="vocab-filters">
        ${pill("all", "All")}
        ${[1,2,3,4,5,6].map(l => pill(l, "HSK " + l)).join("")}
        ${pill("other", "Other")}
      </div>
      <div class="vocab-list">
        ${filtered.map((w) => {
          const idx = state.vocab.indexOf(w);
          const ctx = w.context && w.context.hz
            ? `<div class="vocab-context">
                 <div class="vocab-context-hz">${highlightInContext(w.context.hz, w.hz)}</div>
                 ${w.context.en ? `<div class="vocab-context-en">${w.context.en}</div>` : ""}
               </div>`
            : "";
          return `
            <div class="vocab-item">
              <button class="remove" data-idx="${idx}" title="Remove">×</button>
              ${w.hsk ? `<span class="hsk-badge hsk-${w.hsk}">HSK ${w.hsk}</span>` : ""}
              <div class="hz">${w.hz}</div>
              <div class="py">${w.py || ""}</div>
              <div class="en">${w.en || ""}</div>
              ${ctx}
            </div>
          `;
        }).join("")}
      </div>`;

    view.querySelectorAll(".vocab-filters .pill").forEach(b => {
      b.onclick = () => {
        state.vocabFilter = b.dataset.filter;
        render();
      };
    });
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
    state.currentWord = { hz, py: word.py || "", en: word.en || "", hsk: null };

    const dict = dictLookup(hz);
    if (dict) {
      if (!state.currentWord.py) state.currentWord.py = dict.py;
      if (!state.currentWord.en) state.currentWord.en = dict.en;
      state.currentWord.hsk = dict.hsk;
    }

    popupHz.textContent = state.currentWord.hz;
    popupPy.textContent = state.currentWord.py;
    popupEn.textContent = state.currentWord.en;

    // HSK badge
    if (state.currentWord.hsk) {
      popupHsk.textContent = "HSK " + state.currentWord.hsk;
      popupHsk.className = "popup-hsk hsk-" + state.currentWord.hsk;
      popupHsk.style.display = "";
    } else {
      popupHsk.style.display = "none";
    }

    // Examples
    const examples = (dict && dict.ex) || [];
    if (examples.length) {
      popupExamples.innerHTML = examples.map(ex => `
        <div class="ex">
          <div class="ex-c">${ex.c}</div>
          <div class="ex-p">${ex.p}</div>
          <div class="ex-e">${ex.e}</div>
        </div>
      `).join("");
      popupExamples.style.display = "";
    } else {
      popupExamples.innerHTML = "";
      popupExamples.style.display = "none";
    }

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
    if (i >= 0) {
      state.vocab.splice(i, 1);
    } else {
      const entry = { hz: w.hz, py: w.py, en: w.en, hsk: w.hsk || null, savedAt: Date.now() };
      // Attach the sentence this word came from, for later review context.
      if (state.currentSentence) {
        const ctxHz = state.currentSentence.words.map(x => x.hz).join("");
        entry.context = { hz: ctxHz, en: state.currentSentence.en || "" };
        if (state.storyId) entry.src = { storyId: state.storyId };
      }
      state.vocab.push(entry);
      bumpDaily("saved");
    }
    saveVocab();
    const saved = state.vocab.some(v => v.hz === w.hz);
    popupSave.textContent = saved ? "★ Saved" : "☆ Save word";
    view.querySelectorAll(`.word`).forEach(el => {
      const span = el.querySelector(".w-hz");
      if (span && stripPunct(span.textContent) === w.hz) {
        el.classList.toggle("saved", saved);
        if (saved) el.classList.remove("new");
        else if (dictLookup(w.hz)) el.classList.add("new");
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
      markRead(story.id, i, story.sentences.length);
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
