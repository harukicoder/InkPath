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
    customStory: loadCustomStory(), // user-pasted text (draft / last open)
    pasteLibrary: loadPasteLibrary(), // [{id, title, category, sentences, savedAt}]
    vocab: loadVocab(),
    progress: loadProgress(),
    daily: loadDaily(),
    sessions: loadSessions(),     // [{startedAt, endedAt, chars, sentences, storyId, storyTitle}]
    levelFilter: localStorage.getItem("inkpath_level_filter") || "all",
    rate: parseFloat(localStorage.getItem("duchinese_rate") || "0.9"),
    voiceName: localStorage.getItem("duchinese_voice") || "",
    _prevRoute: null
  };

  // ============ READING SESSIONS ============
  // Each reader visit becomes a session. We track chars read via markRead()
  // and close the session on navigation away / tab unload.
  function loadSessions() {
    try { return JSON.parse(localStorage.getItem("inkpath_sessions") || "[]"); }
    catch { return []; }
  }
  function saveSessions() {
    // Cap unbounded growth — keep the last 500 sessions.
    if (state.sessions.length > 500) state.sessions = state.sessions.slice(-500);
    localStorage.setItem("inkpath_sessions", JSON.stringify(state.sessions));
    cloudPushSessions();
  }
  let activeSession = null;
  function beginSession(story) {
    endSession();
    if (!story) return;
    activeSession = {
      startedAt: Date.now(),
      endedAt: null,
      chars: 0,
      sentences: 0,
      storyId: story.id,
      storyTitle: (story.title && story.title.hz) || "Untitled"
    };
  }
  function recordReadChars(n) {
    if (!activeSession) return;
    activeSession.chars += Math.max(0, n | 0);
    activeSession.sentences += 1;
  }
  function endSession() {
    if (!activeSession) return;
    const s = activeSession;
    activeSession = null;
    s.endedAt = Date.now();
    const dur = s.endedAt - s.startedAt;
    // Discard no-op sessions (user opened the page and left).
    if (s.chars <= 0 || dur < 5000) return;
    state.sessions.push(s);
    saveSessions();
  }
  window.addEventListener("beforeunload", endSession);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") endSession();
  });

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

  const PASTE_CATEGORIES = [
    { key: "song",     label: "Songs",     emoji: "🎵" },
    { key: "article",  label: "Articles",  emoji: "📰" },
    { key: "poem",     label: "Poems",     emoji: "✒️" },
    { key: "dialogue", label: "Dialogues", emoji: "💬" },
    { key: "other",    label: "Other",     emoji: "📄" }
  ];
  function loadPasteLibrary() {
    try { return JSON.parse(localStorage.getItem("inkpath_paste_library") || "[]"); }
    catch { return []; }
  }
  function savePasteLibrary() {
    localStorage.setItem("inkpath_paste_library", JSON.stringify(state.pasteLibrary));
    cloudPushPasteLibrary();
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

  // ============ ON-DEMAND TRANSLATION ============
  // Uses the unauthenticated Google Translate gtx endpoint (same one countless
  // browser extensions use). CORS-permissive, no API key, no rate-limit that
  // matters for single-user traffic. We batch concurrent requests to 3.
  async function translateChinese(text) {
    if (!text || !text.trim()) return "";
    const url = "https://translate.googleapis.com/translate_a/single"
      + "?client=gtx&sl=zh-CN&tl=en&dt=t&q=" + encodeURIComponent(text);
    const res = await fetch(url);
    if (!res.ok) throw new Error("translate HTTP " + res.status);
    const data = await res.json();
    // Response shape: [[["segment en","segment zh",...], ...], ...]
    if (!Array.isArray(data) || !Array.isArray(data[0])) throw new Error("bad response");
    return data[0].map(seg => (seg && seg[0]) || "").join("").trim();
  }

  // ============ URL → ARTICLE FETCH ============
  // We route URLs through Jina's Reader (r.jina.ai/{url}) — it strips nav/ads
  // and returns clean plain-text with a `Title:` header, no CORS fuss, no key.
  const URL_RE = /^https?:\/\/\S+$/i;
  function extractUrl(text) {
    const t = (text || "").trim();
    return URL_RE.test(t) ? t : null;
  }
  async function fetchArticle(url) {
    const reader = "https://r.jina.ai/" + url;
    const res = await fetch(reader, { headers: { "Accept": "text/plain" } });
    if (!res.ok) throw new Error("fetch HTTP " + res.status);
    const raw = await res.text();
    return parseJinaOutput(raw);
  }
  // Jina wraps content in a header block. Strip it + markdown noise.
  function parseJinaOutput(raw) {
    let title = "";
    let body = raw || "";
    // Header block: "Title: ...\nURL Source: ...\nMarkdown Content:\n..."
    const titleM = body.match(/^Title:\s*(.+)$/m);
    if (titleM) title = titleM[1].trim();
    const cutIdx = body.indexOf("Markdown Content:");
    if (cutIdx >= 0) body = body.slice(cutIdx + "Markdown Content:".length);
    // Strip markdown images + link wrappers, keep link text.
    body = body
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/^#{1,6}\s+/gm, "")
      .replace(/^\s*[-*>]\s+/gm, "")
      .replace(/`{1,3}[^`]*`{1,3}/g, "")
      .replace(/<[^>]+>/g, "");
    // Keep only lines containing CJK characters (drops footers, share links).
    body = body
      .split(/\r?\n/)
      .map(l => l.trim())
      .filter(l => l && HAS_CJK.test(l))
      .join("\n")
      .trim();
    return { title, body };
  }

  // ============ OCR ============
  // Lazy-loads Tesseract.js from CDN and runs chi_sim + chi_tra. The language
  // data is downloaded from tessdata.projectnaptha.com on first use (~15 MB
  // total, cached by the browser thereafter).
  let _tessLoader = null;
  function ensureTesseract() {
    if (window.Tesseract) return Promise.resolve(window.Tesseract);
    if (_tessLoader) return _tessLoader;
    _tessLoader = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
      s.onload = () => resolve(window.Tesseract);
      s.onerror = () => { _tessLoader = null; reject(new Error("Failed to load Tesseract.js")); };
      document.head.appendChild(s);
    });
    return _tessLoader;
  }
  async function ocrImage(file, onProgress) {
    const Tesseract = await ensureTesseract();
    const { data } = await Tesseract.recognize(file, "chi_sim+chi_tra", {
      logger: (m) => {
        if (onProgress && m && typeof m.progress === "number") {
          onProgress(m.status || "", m.progress);
        }
      }
    });
    const raw = (data && data.text) || "";
    // Tesseract inserts spaces between Chinese chars — strip them but keep
    // line breaks and punctuation.
    return raw
      .split(/\r?\n/)
      .map(line => line
        .replace(/([\u4e00-\u9fff])\s+(?=[\u4e00-\u9fff])/g, "$1")
        .replace(/\s{2,}/g, " ")
        .trim())
      .filter(Boolean)
      .join("\n");
  }

  function storyNeedsTranslation(story) {
    if (!story || !story.sentences) return false;
    return story.sentences.some(s => !s.en || !s.en.trim());
  }

  // Fill in missing `en` fields for `story`. Live-updates the DOM if the reader
  // is the active view, and persists the result if the story lives in the
  // paste library or is the current customStory.
  let translatingNow = false;
  async function ensureTranslations(story) {
    if (translatingNow || !story || !story.sentences) return;
    const missing = [];
    story.sentences.forEach((s, i) => { if (!s.en || !s.en.trim()) missing.push({ s, i }); });
    if (!missing.length) return;

    translatingNow = true;
    setTranslateStatus("Translating 0 / " + missing.length + "…");

    const LIMIT = 3;
    const queue = missing.slice();
    let done = 0;
    async function worker() {
      while (queue.length) {
        const { s, i } = queue.shift();
        const text = s.words.map(w => w.hz).join("");
        try {
          const en = await translateChinese(text);
          s.en = en;
          const el = view.querySelector(`.sentence[data-i="${i}"] .en-line`);
          if (el) el.textContent = en;
        } catch (err) {
          console.warn("[InkPath] translate failed for sentence", i, err);
        }
        done++;
        setTranslateStatus("Translating " + done + " / " + missing.length + "…");
      }
    }
    try {
      await Promise.all(Array(LIMIT).fill(0).map(worker));
    } finally {
      translatingNow = false;
      setTranslateStatus("");
    }

    // Persist wherever this story lives.
    if (state.customStory && story.id === state.customStory.id && story !== state.customStory) {
      // Shouldn't happen — but guard anyway.
    }
    if (state.customStory && story === state.customStory) saveCustomStory();
    if ((state.pasteLibrary || []).some(x => x.id === story.id)) {
      const idx = state.pasteLibrary.findIndex(x => x.id === story.id);
      if (idx >= 0) state.pasteLibrary[idx] = story;
      savePasteLibrary();
    }
    // Re-render the translate button so it hides if everything's now filled.
    const btn = document.getElementById("translate-btn");
    if (btn && !storyNeedsTranslation(story)) btn.remove();
  }
  function setTranslateStatus(msg) {
    const el = document.getElementById("translate-status");
    if (!el) return;
    if (msg) { el.textContent = msg; el.classList.remove("hidden"); }
    else el.classList.add("hidden");
  }

  // ============ TOKENIZER (paste-to-learn) ============
  // Greedy longest-match against HSK_DICT + DICT. Punctuation attaches to the
  // previous word to match the existing story word format.
  //
  // Translation auto-detection:
  //   - Line pairs:  odd lines are Chinese, even lines are the translation.
  //   - Delimiters:  "hz | en" / "hz / en" / "hz — en" on a single line.
  //   - Otherwise:   Chinese-only, split on sentence terminators.
  const HAS_CJK = /[\u4e00-\u9fff]/;
  function tokenizeText(text) {
    const parsed = parseBilingual(text);
    if (parsed) {
      return parsed
        .map(p => ({ en: p.en || "", words: segmentSentence(p.hz) }))
        .filter(x => x.words.length);
    }
    // Chinese-only: split on terminators (keep them attached).
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
    return rawSentences
      .map(s => ({ en: "", words: segmentSentence(s.trim()) }))
      .filter(x => x.words.length);
  }
  // Returns [{hz, en}] if a clean bilingual pattern is detected, else null.
  function parseBilingual(text) {
    const lines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l.length);
    if (lines.length < 2) return null;

    // Pattern A: single-line delimiter on the majority of lines.
    const DELIM = /^(.+?)\s*[|｜／\/—–\-]\s*(.+)$/;
    let delimHits = 0;
    const delimPairs = [];
    for (const line of lines) {
      const m = line.match(DELIM);
      if (m && HAS_CJK.test(m[1]) && !HAS_CJK.test(m[2])) {
        delimHits++;
        delimPairs.push({ hz: m[1].trim(), en: m[2].trim() });
      } else {
        delimPairs.push({ hz: line, en: HAS_CJK.test(line) ? "" : "" });
      }
    }
    if (delimHits >= Math.ceil(lines.length * 0.6)) return delimPairs;

    // Pattern B: alternating CJK / non-CJK lines.
    if (lines.length % 2 === 0) {
      let ok = true;
      for (let i = 0; i < lines.length; i += 2) {
        if (!HAS_CJK.test(lines[i]) || HAS_CJK.test(lines[i + 1])) { ok = false; break; }
      }
      if (ok) {
        const pairs = [];
        for (let i = 0; i < lines.length; i += 2) pairs.push({ hz: lines[i], en: lines[i + 1] });
        return pairs;
      }
    }

    // Pattern C: most lines are CJK, a minority are pure-English.
    // Pair each CJK line with the following English line, if any.
    let cjkCount = 0, enCount = 0;
    for (const l of lines) {
      if (HAS_CJK.test(l)) cjkCount++; else enCount++;
    }
    if (cjkCount >= 2 && enCount >= 2) {
      const pairs = [];
      for (let i = 0; i < lines.length; i++) {
        if (HAS_CJK.test(lines[i])) {
          const next = lines[i + 1];
          if (next && !HAS_CJK.test(next)) { pairs.push({ hz: lines[i], en: next }); i++; }
          else pairs.push({ hz: lines[i], en: "" });
        }
        // Skip stray English lines (titles etc.)
      }
      if (pairs.length) return pairs;
    }
    return null;
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
  function markRead(storyId, sentenceIndex, total, chars) {
    recordReadChars(chars || 0);
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
  function countSentenceChars(sentence) {
    if (!sentence || !sentence.words) return 0;
    // CJK chars only — ASCII tokens / punctuation don't count toward reading.
    let n = 0;
    for (const w of sentence.words) {
      for (const ch of (w.hz || "")) if (/[\u4e00-\u9fff]/.test(ch)) n++;
    }
    return n;
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

  // All words the user has seen / saved. Combines:
  //   1. Explicitly saved vocab (state.vocab)
  //   2. Every word in any fully-read story (last sentence >= total)
  // Excludes the paste-reader (ephemeral id __paste__).
  function getKnownSet() {
    const set = new Set(state.vocab.map(v => v.hz));
    const allStories = STORIES.concat(state.pasteLibrary || []);
    for (const id of Object.keys(state.progress)) {
      if (id === "__paste__") continue;
      const p = state.progress[id];
      const story = allStories.find(s => s.id === id);
      if (!story) continue;
      const total = p.total || story.sentences.length;
      if ((p.lastSentence || 0) + 1 < total) continue;
      for (const s of story.sentences) {
        for (const w of s.words) {
          const hz = stripPunct(w.hz);
          // Only count real dictionary words or multi-char sequences — skip
          // one-off punctuation tokens / stray ASCII.
          if (hz && /[\u4e00-\u9fff]/.test(hz)) set.add(hz);
        }
      }
    }
    return set;
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
    const knownSet = getKnownSet();
    let known = 0;
    for (const hz of uniq) if (knownSet.has(hz)) known++;
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

  let cloudPasteTimer = null;
  function cloudPushPasteLibrary() {
    if (!hasFirebase || !currentUser) return;
    clearTimeout(cloudPasteTimer);
    cloudPasteTimer = setTimeout(() => {
      firebase.firestore().collection("users").doc(currentUser.uid).set({
        inkpathPasteLibrary: state.pasteLibrary,
        inkpathPasteLibraryUpdatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true }).catch(() => {});
    }, 800);
  }

  let cloudSessionsTimer = null;
  function cloudPushSessions() {
    if (!hasFirebase || !currentUser) return;
    clearTimeout(cloudSessionsTimer);
    cloudSessionsTimer = setTimeout(() => {
      firebase.firestore().collection("users").doc(currentUser.uid).set({
        inkpathSessions: state.sessions,
        inkpathSessionsUpdatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true }).catch(() => {});
    }, 1200);
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

        // Merge paste library: union by id, prefer newer savedAt.
        const cloudPasteLib = Array.isArray(data.inkpathPasteLibrary) ? data.inkpathPasteLibrary : [];
        const pasteMap = new Map();
        for (const e of cloudPasteLib) if (e && e.id) pasteMap.set(e.id, e);
        for (const e of state.pasteLibrary || []) {
          if (!e || !e.id) continue;
          const existing = pasteMap.get(e.id);
          if (!existing || (e.savedAt || 0) > (existing.savedAt || 0)) pasteMap.set(e.id, e);
        }
        state.pasteLibrary = [...pasteMap.values()];
        localStorage.setItem("inkpath_paste_library", JSON.stringify(state.pasteLibrary));

        // Merge reading sessions: union by startedAt, cap to last 500.
        const cloudSessions = Array.isArray(data.inkpathSessions) ? data.inkpathSessions : [];
        const sessMap = new Map();
        for (const s of cloudSessions) if (s && s.startedAt) sessMap.set(s.startedAt, s);
        for (const s of state.sessions || []) if (s && s.startedAt) sessMap.set(s.startedAt, s);
        state.sessions = [...sessMap.values()].sort((a, b) => a.startedAt - b.startedAt).slice(-500);
        localStorage.setItem("inkpath_sessions", JSON.stringify(state.sessions));

        setAuthStatus("Synced");
        if (changed) cloudPushVocab();
        cloudPushProgress();
        cloudPushDaily();
        cloudPushSessions();
        cloudPushPasteLibrary();
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
      const first = (name || "?").trim().charAt(0).toUpperCase();
      const photo = currentUser.photoURL;
      btn.className = "auth-chip";
      btn.innerHTML = `
        ${photo
          ? `<img class="auth-avatar" src="${photo}" alt=""/>`
          : `<span class="auth-avatar auth-avatar-letter">${escapeHtml(first)}</span>`}
        <span class="auth-name">${escapeHtml(name.split(" ")[0])}</span>
        <span class="auth-signout-icon" title="Sign out">↪</span>
      `;
      btn.title = "Signed in as " + name + " · click to sign out";
    } else {
      btn.className = "auth-signin";
      btn.innerHTML = `
        <svg class="g-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <span class="auth-label">Sign in with Google</span>
      `;
      btn.title = "Sign in to sync your words across devices";
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
    // Close an open session if we're leaving the reader.
    if (state._prevRoute === "reader" && state.route !== "reader") {
      stopShadowing();
      endSession();
    }
    state._prevRoute = state.route;
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
    const filter = state.levelFilter || "all";
    const counts = {
      all: byLevel.newbie.length + byLevel.beginner.length + byLevel.intermediate.length,
      newbie: byLevel.newbie.length,
      beginner: byLevel.beginner.length,
      intermediate: byLevel.intermediate.length
    };
    const pill = (key, label) =>
      `<button class="lvl-pill ${filter === key ? "active" : ""}" data-level="${key}">${label} <span class="lvl-count">${counts[key]}</span></button>`;

    view.innerHTML = `
      <div class="hero">
        <h1>Learn Mandarin through stories</h1>
        <p>Tap any word to see pinyin and meaning. Save words to review later.</p>
      </div>
      ${renderDailyNewsCard()}
      ${resume ? renderResumeCard(resume) : ""}
      ${renderPasteLibrarySection()}
      <div class="level-filter" role="tablist">
        ${pill("all", "All")}
        ${pill("newbie", "Newbie")}
        ${pill("beginner", "Beginner")}
        ${pill("intermediate", "Intermediate")}
      </div>
      ${(filter === "all" || filter === "newbie")      ? levelSection("Newbie", "newbie", "Simple sentences, basic vocabulary.", byLevel.newbie) : ""}
      ${(filter === "all" || filter === "beginner")    ? levelSection("Beginner", "beginner", "Longer passages with common daily vocabulary.", byLevel.beginner) : ""}
      ${(filter === "all" || filter === "intermediate")? levelSection("Intermediate", "intermediate", "More complex grammar and richer vocabulary.", byLevel.intermediate) : ""}
    `;
    view.querySelectorAll(".story-card").forEach(card => {
      card.addEventListener("click", () => openStory(card.dataset.id));
    });
    view.querySelectorAll(".lvl-pill").forEach(p => {
      p.onclick = () => {
        state.levelFilter = p.dataset.level;
        localStorage.setItem("inkpath_level_filter", state.levelFilter);
        render();
      };
    });
    const resumeBtn = view.querySelector(".resume-card");
    if (resumeBtn) resumeBtn.addEventListener("click", () => openStory(resumeBtn.dataset.id));
    const dnCard = view.querySelector(".daily-news-card");
    if (dnCard) dnCard.addEventListener("click", () => openStory(dnCard.dataset.id));
    view.querySelectorAll(".paste-card .paste-card-remove").forEach(b => {
      b.onclick = (e) => {
        e.stopPropagation();
        const id = b.dataset.id;
        if (!confirm("Delete this saved text?")) return;
        state.pasteLibrary = state.pasteLibrary.filter(s => s.id !== id);
        delete state.progress[id];
        savePasteLibrary();
        saveProgress();
        render();
      };
    });
  }

  function renderPasteLibrarySection() {
    const lib = state.pasteLibrary || [];
    if (!lib.length) return "";
    const byCat = {};
    for (const e of lib) {
      const k = e.category || "other";
      (byCat[k] = byCat[k] || []).push(e);
    }
    const blocks = PASTE_CATEGORIES
      .filter(c => byCat[c.key] && byCat[c.key].length)
      .map(c => {
        const items = byCat[c.key].slice().sort((a, b) => (b.savedAt || 0) - (a.savedAt || 0));
        return `
          <div class="paste-cat">
            <h3 class="paste-cat-head"><span class="paste-cat-emoji">${c.emoji}</span> ${c.label}
              <span class="paste-cat-count">${items.length}</span></h3>
            <div class="story-grid">
              ${items.map(s => {
                const total = s.sentences.length;
                const prog = state.progress[s.id] || {};
                const read = Math.min((prog.lastSentence || 0) + 1, total);
                const pct = total ? Math.round((read / total) * 100) : 0;
                const done = read >= total && read > 0;
                const started = read > 0 && !done;
                return `
                  <div class="story-card paste-card ${done?"done":""} ${started?"in-progress":""}" data-id="${s.id}">
                    ${renderStoryCover(s)}
                    <button class="paste-card-remove" data-id="${s.id}" title="Delete">×</button>
                    ${done ? `<span class="done-badge">✓ Read</span>` : started ? `<span class="done-badge in-progress">In progress</span>` : ""}
                    <div class="hz">${escapeHtml(s.title.hz)}</div>
                    ${s.title.en ? `<div class="en">${escapeHtml(s.title.en)}</div>` : ""}
                    <div class="desc">${s.description || ""} · ${total} line${total===1?"":"s"}</div>
                    <div class="coverage">
                      <div class="coverage-bar"><div style="width:${pct}%"></div></div>
                      <div class="coverage-label">${done ? "Read · " + total + " lines" : started ? read + " / " + total + " · " + pct + "%" : "Not started"}</div>
                    </div>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        `;
      }).join("");
    if (!blocks) return "";
    return `
      <section class="level-section paste-library">
        <div class="level-header">
          <span class="level-badge paste">Your texts</span>
          <h2 class="level-title">Saved pastes</h2>
          <span class="level-desc">Songs, articles, and anything else you've saved.</span>
        </div>
        ${blocks}
      </section>
    `;
  }
  function escapeHtml(s) {
    return String(s || "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[c]);
  }

  // ============ STORY COVERS ============
  // Generated inline as a CSS gradient + the first 1–2 hanzi of the title, so
  // we don't ship image assets and covers keep working offline. Gradients are
  // picked deterministically from a 12-slot palette via a stable hash.
  const COVER_GRADIENTS = [
    ["#ffecd2", "#fcb69f"], // peach
    ["#a1c4fd", "#c2e9fb"], // sky
    ["#d4fc79", "#96e6a1"], // spring
    ["#fbc2eb", "#a6c1ee"], // lilac
    ["#ffd1ff", "#fad0c4"], // blush
    ["#c1dfc4", "#deecdd"], // sage
    ["#f6d365", "#fda085"], // sunset
    ["#fdcbf1", "#e6dee9"], // rose quartz
    ["#84fab0", "#8fd3f4"], // mint
    ["#ffb199", "#ff0844"], // coral
    ["#c471f5", "#fa71cd"], // violet
    ["#4facfe", "#00f2fe"]  // ocean
  ];
  // Topic → emoji overrides (applied by matching story title, id, or keywords).
  const COVER_EMOJI = {
    家: "🏠", 茶: "🍵", 饭: "🍚", 餐: "🍽", 菜: "🥬", 吃: "🍜",
    书: "📚", 学: "📖", 老师: "👩‍🏫", 课: "📖", 图书馆: "📚", 作业: "✏️",
    车: "🚌", 飞机: "✈️", 火车: "🚆", 旅行: "🧳", 地图: "🗺",
    医生: "🩺", 病: "🩺", 药: "💊", 身体: "💪", 健身: "🏋️", 运动: "🏃",
    钱: "💴", 银行: "🏦", 工作: "💼", 面试: "💼", 公司: "🏢",
    朋友: "🧑‍🤝‍🧑", 家人: "👨‍👩‍👧", 生日: "🎂", 结婚: "💍",
    天气: "🌤", 雨: "🌧", 雪: "❄️", 春: "🌸", 夏: "☀️", 秋: "🍂", 冬: "⛄",
    电话: "📞", 网: "🌐", 购物: "🛒", 超市: "🛒", 电影: "🎬", 音乐: "🎵",
    新闻: "📰", 经济: "📈",
    梦: "✨", 信: "✉️", 城市: "🏙", 节: "🎉", 春节: "🧧", 中秋: "🌕"
  };
  function hashStr(s) {
    let h = 0;
    for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
    return Math.abs(h);
  }
  function pickCoverEmoji(story) {
    if (story.cover && story.cover.emoji) return story.cover.emoji;
    const hay = (story.title && story.title.hz || "") + (story.description || "");
    for (const k of Object.keys(COVER_EMOJI)) {
      if (hay.includes(k)) return COVER_EMOJI[k];
    }
    return "";
  }
  function renderStoryCover(story) {
    const [a, b] = COVER_GRADIENTS[hashStr(story.id) % COVER_GRADIENTS.length];
    const emoji = pickCoverEmoji(story);
    const hz = (story.title && story.title.hz) || "";
    // Take up to the first 2 hanzi for the big glyph
    const bigChars = [...hz].filter(c => /[\u4e00-\u9fff]/.test(c)).slice(0, 2).join("");
    return `
      <div class="story-cover" style="background:linear-gradient(135deg, ${a}, ${b})">
        <span class="cover-hz">${escapeHtml(bigChars || hz.slice(0, 2))}</span>
        ${emoji ? `<span class="cover-emoji" aria-hidden="true">${emoji}</span>` : ""}
      </div>
    `;
  }

  function pickResumeStory() {
    let best = null;
    const allStories = STORIES.concat(state.pasteLibrary || []);
    for (const id of Object.keys(state.progress)) {
      const p = state.progress[id];
      const story = allStories.find(s => s.id === id);
      if (!story) continue;
      const total = p.total || story.sentences.length;
      if ((p.lastSentence || 0) + 1 >= total) continue; // already finished
      if (!best || (p.updatedAt || 0) > (best.updatedAt || 0)) {
        best = Object.assign({ id, story, total }, p);
      }
    }
    return best;
  }

  // ============ DAILY NEWS (AI-generated, HSK ≤ 4) ============
  // A GitHub Action regenerates window.DAILY_NEWS each day — see
  // .github/workflows/daily-news.yml. The client just renders whatever is
  // in data/daily-news.js. Missing / stale file → no card shown.
  function getDailyNewsStory() {
    const n = typeof window !== "undefined" ? window.DAILY_NEWS : null;
    if (!n || !n.sentences || !n.sentences.length) return null;
    // Ensure it has the shape renderReader expects.
    return Object.assign({
      id: "news-" + (n.date || "today"),
      level: "news",
      title: {
        hz: n.title && n.title.hz || "今日中国新闻",
        py: n.title && n.title.py || "Jīnrì Zhōngguó xīnwén",
        en: n.title && n.title.en || "Today's China brief"
      },
      description: n.description || "AI-generated news + economy brief · HSK ≤ 4"
    }, n);
  }
  function renderDailyNewsCard() {
    const story = getDailyNewsStory();
    if (!story) return "";
    // Register it so renderReader can find it by id.
    if (!STORIES.some(s => s.id === story.id)) STORIES.push(story);
    const prog = state.progress[story.id] || {};
    const total = story.sentences.length;
    const read = Math.min((prog.lastSentence || 0) + 1, total);
    const pct = total ? Math.round((read / total) * 100) : 0;
    const done = read >= total && read > 0;
    const dateLabel = story.date || "";
    return `
      <section class="daily-news-section">
        <div class="daily-news-card" data-id="${story.id}">
          <div class="dn-cover">📰</div>
          <div class="dn-body">
            <div class="dn-kicker">Today's brief · HSK ≤ 4${dateLabel ? " · " + dateLabel : ""}</div>
            <div class="dn-title">${escapeHtml(story.title.hz)}</div>
            <div class="dn-sub">${escapeHtml(story.title.en)}</div>
            <div class="dn-meta">${total} sentence${total===1?"":"s"}${done ? " · ✓ Read" : read ? " · " + pct + "%" : ""}</div>
          </div>
        </div>
      </section>
    `;
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
                ${renderStoryCover(s)}
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
      : (STORIES.find(s => s.id === state.storyId)
         || (state.pasteLibrary || []).find(s => s.id === state.storyId));
    if (!story) { state.route = "library"; return render(); }

    // Start a fresh reading session for this story (closes any prior one).
    if (!activeSession || activeSession.storyId !== story.id) beginSession(story);

    const savedSet = new Set(state.vocab.map(v => v.hz));
    const knownSet = getKnownSet();
    const cov = storyCoverage(story);
    const covPct = cov.total ? Math.round((cov.known / cov.total) * 100) : 0;

    const isPaste = story.id === "__paste__";
    const isUserSaved = (state.pasteLibrary || []).some(s => s.id === story.id);
    const userAuthored = isPaste || isUserSaved;
    const needsTrans = userAuthored && storyNeedsTranslation(story);
    view.innerHTML = `
      <div class="reader-top">
        <button class="back-btn" id="back">← Library</button>
        <h2 class="reader-title">
          ${story.title.hz}
          <span class="py">${story.title.py} · ${story.title.en}</span>
          ${story.sourceUrl ? `<a class="source-link" href="${story.sourceUrl}" target="_blank" rel="noopener" title="Open source">🔗 source</a>` : ""}
        </h2>
        ${isPaste ? `<button class="ctrl-btn" id="save-paste">☆ Save to library</button>` : ""}
        ${needsTrans ? `<button class="ctrl-btn" id="translate-btn" title="Fetch English translations from Google">🌐 Translate</button>` : ""}
        <span class="reader-coverage">${cov.known}/${cov.total} known · ${covPct}%</span>
      </div>
      <div id="translate-status" class="translate-status hidden"></div>
      <div id="voice-warning" class="voice-warning" style="display:none">
        No Chinese voice is installed. On iOS: Settings → Accessibility → Spoken Content → Voices → Chinese.
        On desktop, try Chrome or Edge for higher-quality network voices.
      </div>
      <div class="controls">
        <label class="toggle"><input type="checkbox" id="tg-py" ${state.showPinyin?"checked":""}/> Pinyin</label>
        <label class="toggle"><input type="checkbox" id="tg-en" ${state.showTranslation?"checked":""}/> Translation</label>
        <button class="ctrl-btn" id="play-all">▶ Play all</button>
        ${SR_AVAILABLE ? `<button class="ctrl-btn secondary" id="shadow-all" title="Listen, then repeat each sentence after the voice">🎯 Shadow</button>` : ""}
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
                  else if (knownSet.has(key)) classes.push("known");
                  else if (dictLookup(key)) classes.push("new");
                  else classes.push("unknown");
                }
                return `<span class="${classes.join(" ")}" data-i="${i}" data-j="${j}">
                  <span class="w-py">${w.py || ""}</span>
                  <span class="w-hz">${w.hz}</span>
                </span>`;
              }).join("")}
              <button class="en-chip" data-i="${i}" title="Show translation">EN</button>
              ${SR_AVAILABLE ? `<button class="mic-chip" data-i="${i}" title="Check your pronunciation">🎤</button>` : ""}
            </div>
            <div class="en-line">${s.en}</div>
          </div>
        `;
        }).join("")}
      </div>
    `;

    refreshVoiceUI();

    document.getElementById("back").onclick = () => { state.route = "library"; render(); };
    const saveBtn = document.getElementById("save-paste");
    if (saveBtn) saveBtn.onclick = () => openSavePasteDialog(story);
    const transBtn = document.getElementById("translate-btn");
    if (transBtn) transBtn.onclick = () => ensureTranslations(story);
    // Auto-fetch translations the moment the user turns on the Translation
    // toggle, if the story has any missing.
    if (userAuthored && state.showTranslation && needsTrans) {
      ensureTranslations(story);
    }
    document.getElementById("tg-py").onchange = e => {
      state.showPinyin = e.target.checked;
      document.getElementById("sentences").classList.toggle("show-pinyin", state.showPinyin);
    };
    document.getElementById("tg-en").onchange = e => {
      state.showTranslation = e.target.checked;
      document.getElementById("sentences").classList.toggle("show-translation", state.showTranslation);
      if (state.showTranslation && userAuthored && storyNeedsTranslation(story)) {
        ensureTranslations(story);
      }
    };
    document.getElementById("play-all").onclick = () => playAll(story);
    const shadowBtn = document.getElementById("shadow-all");
    if (shadowBtn) shadowBtn.onclick = () => {
      if (shadowState.active) stopShadowing();
      else startShadowing(story);
    };
    document.getElementById("stop").onclick = () => {
      speechSynthesis.cancel();
      stopShadowing();
    };

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
    view.querySelectorAll(".mic-chip").forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        const i = +el.dataset.i;
        const sentEl = el.closest(".sentence");
        if (sentEl) startPronunciationCheck(sentEl, story.sentences[i]);
      });
    });
    view.querySelectorAll(".sentence").forEach(el => {
      el.addEventListener("click", () => {
        const i = +el.dataset.i;
        playSentence(story.sentences[i], i);
        markRead(story.id, i, story.sentences.length, countSentenceChars(story.sentences[i]));
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
        <p>Drop in an article, song, menu, or chat — or paste a URL and we'll fetch the article for you.</p>
      </div>
      <div class="paste-wrap">
        <textarea id="paste-input" class="paste-input" rows="10"
          placeholder="粘贴任何中文文本… 或者 https://example.com/article"
          spellcheck="false">${draft.replace(/</g, "&lt;")}</textarea>
        <div class="paste-actions">
          <button id="paste-go" class="ctrl-btn">Segment &amp; read →</button>
          ${state.customStory ? `<button id="paste-reopen" class="ctrl-btn secondary">Reopen last</button>` : ""}
          <button id="paste-ocr" class="ctrl-btn secondary" title="Extract Chinese from an image">📷 Scan image</button>
          <button id="paste-clear" class="ctrl-btn secondary">Clear</button>
          <span class="paste-hint">Tip: any unrecognized word falls back to single-character lookup.</span>
        </div>
        <input type="file" id="paste-ocr-file" accept="image/*" hidden>
        <div id="paste-drop" class="paste-drop" hidden>Drop an image here to scan it</div>
        <div id="paste-status" class="paste-status hidden"></div>
      </div>
    `;
    const input = document.getElementById("paste-input");
    const goBtn = document.getElementById("paste-go");
    const statusEl = document.getElementById("paste-status");

    function setStatus(msg, kind) {
      if (!statusEl) return;
      if (!msg) { statusEl.classList.add("hidden"); statusEl.textContent = ""; return; }
      statusEl.classList.remove("hidden");
      statusEl.className = "paste-status" + (kind ? " " + kind : "");
      statusEl.textContent = msg;
    }

    function reflectInputMode() {
      const url = extractUrl(input.value);
      goBtn.innerHTML = url ? "🌐 Fetch article &amp; read →" : "Segment &amp; read →";
    }
    input.addEventListener("input", reflectInputMode);
    reflectInputMode();

    async function openStoryFromText(raw, meta) {
      const sentences = tokenizeText(raw);
      if (!sentences.length) { setStatus("Couldn't find any Chinese text to segment.", "error"); return; }
      const titleHz = (meta && meta.title) ? meta.title.slice(0, 60) : "我的文本";
      state.customStory = {
        id: "__paste__",
        level: "paste",
        __raw: raw,
        sourceUrl: (meta && meta.sourceUrl) || null,
        title: {
          hz: titleHz,
          py: "",
          en: (meta && meta.title) ? "" : "Your pasted text"
        },
        description: (meta && meta.sourceUrl) ? ("Fetched from " + meta.sourceUrl) : "Tokenized from pasted text.",
        sentences
      };
      saveCustomStory();
      state.route = "reader";
      state.storyId = "__paste__";
      render();
    }

    goBtn.onclick = async () => {
      const raw = (input.value || "").trim();
      if (!raw) return;
      const url = extractUrl(raw);
      if (url) {
        goBtn.disabled = true;
        setStatus("Fetching article… this can take ~10s for long pages.", "loading");
        try {
          const { title, body } = await fetchArticle(url);
          if (!body || !body.trim()) {
            setStatus("Fetched, but no Chinese text was found on that page.", "error");
            goBtn.disabled = false;
            return;
          }
          // Show the user what we got before leaving the paste view.
          input.value = (title ? title + "\n\n" : "") + body;
          reflectInputMode();
          setStatus("Got it — opening reader…", "ok");
          await openStoryFromText(input.value.trim(), { title, sourceUrl: url });
        } catch (err) {
          console.warn("[InkPath] fetchArticle failed:", err);
          setStatus("Couldn't fetch that URL. Check the link, or copy-paste the text directly.", "error");
          goBtn.disabled = false;
        }
        return;
      }
      await openStoryFromText(raw);
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

    // ---- OCR: image → text ----
    const ocrBtn = document.getElementById("paste-ocr");
    const ocrFile = document.getElementById("paste-ocr-file");
    const dropEl = document.getElementById("paste-drop");
    async function runOcr(file) {
      if (!file || !file.type || !file.type.startsWith("image/")) {
        setStatus("That doesn't look like an image file.", "error");
        return;
      }
      goBtn.disabled = true;
      ocrBtn.disabled = true;
      setStatus("Preparing OCR engine (first run downloads ~15 MB)…", "loading");
      try {
        const text = await ocrImage(file, (status, progress) => {
          const pct = Math.round((progress || 0) * 100);
          const label = status === "recognizing text" ? "Reading image" : (status || "Working");
          setStatus(label + "… " + pct + "%", "loading");
        });
        if (!text || !HAS_CJK.test(text)) {
          setStatus("No Chinese text detected in that image.", "error");
          return;
        }
        input.value = text;
        reflectInputMode();
        setStatus("Got " + [...text].filter(c => /[\u4e00-\u9fff]/.test(c)).length + " Chinese characters. Review and hit “Segment & read”.", "ok");
      } catch (err) {
        console.warn("[InkPath] OCR failed:", err);
        setStatus("OCR failed — check your connection or try a clearer image.", "error");
      } finally {
        goBtn.disabled = false;
        ocrBtn.disabled = false;
      }
    }
    if (ocrBtn) ocrBtn.onclick = () => ocrFile && ocrFile.click();
    if (ocrFile) ocrFile.onchange = (e) => {
      const f = e.target.files && e.target.files[0];
      if (f) runOcr(f);
      e.target.value = "";
    };
    // Drag-and-drop onto the paste textarea.
    function showDrop(show) { if (dropEl) dropEl.hidden = !show; }
    ["dragenter", "dragover"].forEach(evt =>
      input.addEventListener(evt, (e) => {
        if (e.dataTransfer && [...e.dataTransfer.items].some(i => i.kind === "file")) {
          e.preventDefault();
          showDrop(true);
        }
      })
    );
    ["dragleave", "drop"].forEach(evt =>
      input.addEventListener(evt, () => showDrop(false))
    );
    input.addEventListener("drop", (e) => {
      const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      if (f && f.type && f.type.startsWith("image/")) { e.preventDefault(); runOcr(f); }
    });
    // Image pasted directly from clipboard.
    input.addEventListener("paste", (e) => {
      const items = e.clipboardData && e.clipboardData.items;
      if (!items) return;
      for (const it of items) {
        if (it.kind === "file" && it.type && it.type.startsWith("image/")) {
          const f = it.getAsFile();
          if (f) { e.preventDefault(); runOcr(f); return; }
        }
      }
    });
  }

  function openSavePasteDialog(story) {
    if (!story || !story.sentences || !story.sentences.length) return;
    // Guess a sensible default title from the first sentence.
    const firstHz = (story.sentences[0].words || []).map(w => w.hz).join("").slice(0, 20);
    const defaultTitle = firstHz || "Untitled";

    const wrap = document.createElement("div");
    wrap.className = "dialog-backdrop";
    wrap.innerHTML = `
      <div class="dialog">
        <h3>Save to library</h3>
        <label class="dialog-row">
          <span>Title</span>
          <input type="text" id="dlg-title" value="${defaultTitle.replace(/"/g, "&quot;")}" maxlength="60"/>
        </label>
        <label class="dialog-row">
          <span>Translation title (optional)</span>
          <input type="text" id="dlg-title-en" placeholder="English title" maxlength="80"/>
        </label>
        <div class="dialog-row">
          <span>Category</span>
          <div class="dialog-cats">
            ${PASTE_CATEGORIES.map((c, i) =>
              `<button type="button" class="cat-pill ${i === 0 ? "active" : ""}" data-cat="${c.key}">${c.emoji} ${c.label.replace(/s$/, "")}</button>`
            ).join("")}
          </div>
        </div>
        <div class="dialog-actions">
          <button class="ctrl-btn secondary" id="dlg-cancel">Cancel</button>
          <button class="ctrl-btn" id="dlg-save">Save</button>
        </div>
      </div>
    `;
    document.body.appendChild(wrap);

    let chosenCat = PASTE_CATEGORIES[0].key;
    wrap.querySelectorAll(".cat-pill").forEach(p => {
      p.onclick = () => {
        wrap.querySelectorAll(".cat-pill").forEach(x => x.classList.remove("active"));
        p.classList.add("active");
        chosenCat = p.dataset.cat;
      };
    });
    const close = () => wrap.remove();
    wrap.addEventListener("click", e => { if (e.target === wrap) close(); });
    wrap.querySelector("#dlg-cancel").onclick = close;
    wrap.querySelector("#dlg-save").onclick = () => {
      const title = wrap.querySelector("#dlg-title").value.trim() || defaultTitle;
      const titleEn = wrap.querySelector("#dlg-title-en").value.trim();
      const id = "u_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 6);
      const entry = {
        id,
        level: "saved",
        category: chosenCat,
        title: { hz: title, py: "", en: titleEn || "Saved text" },
        description: PASTE_CATEGORIES.find(c => c.key === chosenCat).label.replace(/s$/, ""),
        sentences: story.sentences,
        savedAt: Date.now()
      };
      state.pasteLibrary = state.pasteLibrary || [];
      state.pasteLibrary.unshift(entry);
      savePasteLibrary();
      close();
      state.route = "library";
      render();
    };
    setTimeout(() => wrap.querySelector("#dlg-title").focus(), 30);
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
    // Learned per level: every word in the known-set (saved + from finished stories).
    const learned = { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, other:0 };
    let savedExplicitCount = 0;
    let implicitCount = 0;
    const savedSet = new Set(state.vocab.map(v => v.hz));
    savedExplicitCount = savedSet.size;
    const knownSet = getKnownSet();
    for (const hz of knownSet) {
      if (!savedSet.has(hz)) implicitCount++;
      const d = dictLookup(hz);
      const lvl = d ? d.hsk : null;
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
        <p class="hsk-breakdown">
          <span>${savedExplicitCount} saved explicitly</span>
          <span>·</span>
          <span>${implicitCount} from finished stories</span>
        </p>
      </div>
      <div class="hsk-grid">${rows}</div>
      ${learned.other ? `<p class="hsk-other-note">Plus ${learned.other} word${learned.other===1?"":"s"} outside HSK 1–6.</p>` : ""}
      ${renderSessionStats()}
    `;
  }

  // ---- Reading-speed + history card on the HSK page ----
  function renderSessionStats() {
    const ss = state.sessions || [];
    if (!ss.length) {
      return `
        <section class="session-stats empty">
          <h2>Reading speed</h2>
          <p>Read a few sentences and your session history will show up here — characters per minute, total time, and a 14-day sparkline.</p>
        </section>`;
    }
    const totalChars = ss.reduce((a, s) => a + (s.chars || 0), 0);
    const totalMs = ss.reduce((a, s) => a + Math.max(0, (s.endedAt || 0) - (s.startedAt || 0)), 0);
    const totalMin = totalMs / 60000;
    const cpm = totalMin > 0 ? Math.round(totalChars / totalMin) : 0;

    // Last 14 days, char totals per day.
    const days = [];
    const today = new Date(); today.setHours(0, 0, 0, 0);
    for (let k = 13; k >= 0; k--) {
      const d = new Date(today); d.setDate(today.getDate() - k);
      const key = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
      days.push({ key, date: d, chars: 0, ms: 0 });
    }
    for (const s of ss) {
      const d = new Date(s.startedAt);
      const key = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
      const slot = days.find(x => x.key === key);
      if (slot) {
        slot.chars += s.chars || 0;
        slot.ms += Math.max(0, (s.endedAt || 0) - (s.startedAt || 0));
      }
    }
    const maxChars = Math.max(1, ...days.map(d => d.chars));
    const bars = days.map(d => {
      const h = d.chars ? Math.max(6, Math.round((d.chars / maxChars) * 44)) : 2;
      const cls = d.chars ? "bar has" : "bar";
      const label = d.date.toLocaleDateString(undefined, { month: "short", day: "numeric" }) + " · " + d.chars + " chars";
      return `<span class="${cls}" style="height:${h}px" title="${label}"></span>`;
    }).join("");

    // Recent sessions list (last 6, most recent first).
    const recent = ss.slice(-6).reverse();
    const rowsHtml = recent.map(s => {
      const when = new Date(s.startedAt);
      const dur = Math.max(1, Math.round(((s.endedAt || 0) - s.startedAt) / 60000));
      const spd = dur > 0 ? Math.round(s.chars / (((s.endedAt || 0) - s.startedAt) / 60000)) : 0;
      const whenLabel = when.toLocaleDateString(undefined, { month: "short", day: "numeric" }) +
        " · " + when.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
      const title = (s.storyTitle || "Untitled").replace(/</g, "&lt;");
      return `
        <li class="sess-row">
          <span class="sess-when">${whenLabel}</span>
          <span class="sess-title">${title}</span>
          <span class="sess-metric">${s.chars} chars · ${dur}m · ${spd} cpm</span>
        </li>`;
    }).join("");

    return `
      <section class="session-stats">
        <h2>Reading speed</h2>
        <div class="sess-metrics">
          <div class="sess-card"><span class="num">${cpm}</span><span class="lbl">chars/min</span></div>
          <div class="sess-card"><span class="num">${totalChars.toLocaleString()}</span><span class="lbl">total chars</span></div>
          <div class="sess-card"><span class="num">${Math.round(totalMin)}</span><span class="lbl">total minutes</span></div>
          <div class="sess-card"><span class="num">${ss.length}</span><span class="lbl">sessions</span></div>
        </div>
        <div class="sess-spark" aria-label="Last 14 days of reading">${bars}</div>
        <div class="sess-spark-labels">
          <span>${days[0].date.toLocaleDateString(undefined, { month: "short", day: "numeric" })}</span>
          <span>today</span>
        </div>
        <h3>Recent sessions</h3>
        <ul class="sess-list">${rowsHtml}</ul>
      </section>
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

  // ============ PRONUNCIATION GRADER ============
  // Uses Web Speech API (SpeechRecognition / webkitSpeechRecognition) with
  // zh-CN. Compares the transcription to the sentence hz via character-level
  // F1 (LCS-based) and shows a live feedback panel below the sentence.
  const SR_CTOR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const SR_AVAILABLE = !!SR_CTOR;
  let activeRec = null;

  function stripForPronun(s) {
    // Pronunciation score should ignore punctuation + whitespace. Keep only
    // CJK + ASCII letters/digits (for sentences mixing in brand names, etc.).
    return (s || "").replace(/[\s。，！？、；：.,!?;:"'“”‘’（）()《》<>【】\[\]—\-–…~`]/g, "");
  }

  function lcsDp(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({ length: m + 1 }, () => new Int16Array(n + 1));
    for (let i = 1; i <= m; i++) {
      const ai = a[i - 1];
      for (let j = 1; j <= n; j++) {
        dp[i][j] = ai === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
    return dp;
  }
  function scorePronunciation(expected, heard) {
    if (!expected || !heard) return 0;
    const dp = lcsDp(expected, heard);
    const lcs = dp[expected.length][heard.length];
    const precision = lcs / heard.length;
    const recall = lcs / expected.length;
    if (!precision || !recall) return 0;
    const f1 = 2 * precision * recall / (precision + recall);
    return Math.round(f1 * 100);
  }
  // Mark each char of `heard` as match/miss via LCS backtrace.
  function diffHeardAgainstExpected(expected, heard) {
    const dp = lcsDp(expected, heard);
    const marks = new Array(heard.length).fill(false);
    let i = expected.length, j = heard.length;
    while (i > 0 && j > 0) {
      if (expected[i - 1] === heard[j - 1]) { marks[j - 1] = true; i--; j--; }
      else if (dp[i - 1][j] >= dp[i][j - 1]) i--;
      else j--;
    }
    // Also compute which expected chars were missed (not in LCS) — helpful to
    // show under "target" so the user sees what they dropped.
    const expectedMarks = new Array(expected.length).fill(false);
    let i2 = expected.length, j2 = heard.length;
    while (i2 > 0 && j2 > 0) {
      if (expected[i2 - 1] === heard[j2 - 1]) { expectedMarks[i2 - 1] = true; i2--; j2--; }
      else if (dp[i2 - 1][j2] >= dp[i2][j2 - 1]) i2--;
      else j2--;
    }
    return { heardMarks: marks, expectedMarks };
  }

  function startPronunciationCheck(sentenceEl, sentence) {
    if (!SR_AVAILABLE) return;
    // Cancel any prior session.
    if (activeRec) { try { activeRec.abort(); } catch (_) {} activeRec = null; }
    try { speechSynthesis.cancel(); } catch (_) {}

    // Remove any previous panel on this sentence.
    const prev = sentenceEl.querySelector(".pronun-check");
    if (prev) prev.remove();

    const expected = sentence.words.map(w => w.hz).join("");
    const expectedClean = stripForPronun(expected);

    const panel = document.createElement("div");
    panel.className = "pronun-check listening";
    panel.innerHTML = `
      <div class="pronun-row">
        <span class="pronun-status"><span class="pronun-dot"></span>Listening… speak the sentence</span>
        <button class="pronun-stop" type="button">Stop</button>
      </div>
      <div class="pronun-interim"></div>
    `;
    sentenceEl.appendChild(panel);
    // Clicks inside the panel must not bubble to the sentence's play handler.
    panel.addEventListener("click", (e) => e.stopPropagation());

    const rec = new SR_CTOR();
    rec.lang = "zh-CN";
    rec.interimResults = true;
    rec.maxAlternatives = 1;
    rec.continuous = false;
    activeRec = rec;

    let finalTranscript = "";
    let interim = "";
    rec.onresult = (ev) => {
      finalTranscript = ""; interim = "";
      for (let i = 0; i < ev.results.length; i++) {
        const r = ev.results[i];
        if (r.isFinal) finalTranscript += r[0].transcript;
        else interim += r[0].transcript;
      }
      const interimEl = panel.querySelector(".pronun-interim");
      if (interimEl) interimEl.textContent = interim || finalTranscript || "";
    };
    rec.onerror = (ev) => {
      activeRec = null;
      const msg = pronunErrorMessage(ev.error);
      panel.classList.remove("listening");
      panel.innerHTML = `
        <div class="pronun-row">
          <span class="pronun-status error">${msg}</span>
          <button class="pronun-retry" type="button">🎤 Try again</button>
          <button class="pronun-close" type="button" aria-label="Close">×</button>
        </div>
      `;
      panel.querySelector(".pronun-retry").onclick = (e) => {
        e.stopPropagation();
        startPronunciationCheck(sentenceEl, sentence);
      };
      panel.querySelector(".pronun-close").onclick = (e) => {
        e.stopPropagation();
        panel.remove();
      };
    };
    rec.onend = () => {
      if (activeRec === rec) activeRec = null;
      const heard = (finalTranscript || interim || "").trim();
      if (!heard) {
        panel.classList.remove("listening");
        panel.innerHTML = `
          <div class="pronun-row">
            <span class="pronun-status">I didn't catch anything.</span>
            <button class="pronun-retry" type="button">🎤 Try again</button>
            <button class="pronun-close" type="button" aria-label="Close">×</button>
          </div>
        `;
        panel.querySelector(".pronun-retry").onclick = (e) => {
          e.stopPropagation();
          startPronunciationCheck(sentenceEl, sentence);
        };
        panel.querySelector(".pronun-close").onclick = (e) => {
          e.stopPropagation();
          panel.remove();
        };
        return;
      }
      renderPronunResult(panel, sentenceEl, sentence, expected, expectedClean, heard);
    };

    panel.querySelector(".pronun-stop").onclick = (e) => {
      e.stopPropagation();
      try { rec.stop(); } catch (_) {}
    };

    try {
      rec.start();
    } catch (err) {
      // start() throws if a rec is already running. Abort + retry once.
      try { rec.abort(); } catch (_) {}
      setTimeout(() => { try { rec.start(); } catch (_) {} }, 150);
    }
  }

  function pronunErrorMessage(code) {
    switch (code) {
      case "not-allowed":
      case "service-not-allowed":
        return "Microphone blocked. Allow mic access and reload.";
      case "no-speech": return "No speech detected. Try again closer to the mic.";
      case "audio-capture": return "No microphone found.";
      case "network": return "Network error — speech recognition needs the internet.";
      case "aborted": return "Stopped.";
      case "language-not-supported": return "Chinese recognition isn't supported here. Try Chrome desktop.";
      default: return "Error: " + (code || "unknown");
    }
  }

  function renderPronunResult(panel, sentenceEl, sentence, expected, expectedClean, heardRaw) {
    const heardClean = stripForPronun(heardRaw);
    const score = scorePronunciation(expectedClean, heardClean);
    const tier = score >= 85 ? "great" : score >= 65 ? "ok" : "low";
    const label = score >= 90 ? "Excellent!"
      : score >= 75 ? "Nice — very close."
      : score >= 55 ? "Getting there."
      : "Keep practicing.";
    const { heardMarks, expectedMarks } = diffHeardAgainstExpected(expectedClean, heardClean);

    const heardHtml = heardClean.split("").map((ch, i) =>
      `<span class="${heardMarks[i] ? "ok" : "miss"}">${escapeHtml(ch)}</span>`
    ).join("");
    const targetHtml = expectedClean.split("").map((ch, i) =>
      `<span class="${expectedMarks[i] ? "ok" : "missed-target"}">${escapeHtml(ch)}</span>`
    ).join("");

    panel.classList.remove("listening");
    panel.innerHTML = `
      <div class="pronun-header ${tier}">
        <div class="pronun-score">${score}%</div>
        <div class="pronun-label">${label}</div>
      </div>
      <div class="pronun-detail">
        <div class="pronun-line"><span class="pronun-key">Target</span><span class="pronun-text">${targetHtml}</span></div>
        <div class="pronun-line"><span class="pronun-key">Heard</span><span class="pronun-text">${heardHtml}</span></div>
      </div>
      <div class="pronun-actions">
        <button class="pronun-play" type="button" title="Hear the target">🔊 Target</button>
        <button class="pronun-retry" type="button">🎤 Try again</button>
        <button class="pronun-close" type="button" aria-label="Close">×</button>
      </div>
    `;
    panel.querySelector(".pronun-play").onclick = (e) => { e.stopPropagation(); speak(expected); };
    panel.querySelector(".pronun-retry").onclick = (e) => {
      e.stopPropagation();
      startPronunciationCheck(sentenceEl, sentence);
    };
    panel.querySelector(".pronun-close").onclick = (e) => {
      e.stopPropagation();
      panel.remove();
    };
    // A successful pronunciation is active engagement with the sentence — let
    // it count the same way a sentence-play would, toward today's "read" goal.
    if (score >= 65) bumpDaily("read");
  }

  // ============ SHADOWING MODE ============
  // Sequence over each sentence: speak → short gap → listen → score →
  // brief pause → advance. Stop is non-fatal at any point.
  const shadowState = { active: false, story: null, i: 0, timer: null, rec: null };
  function setShadowButtonLabel() {
    const btn = document.getElementById("shadow-all");
    if (!btn) return;
    btn.textContent = shadowState.active ? "■ Stop shadow" : "🎯 Shadow";
  }
  function stopShadowing() {
    if (!shadowState.active && !shadowState.rec && !shadowState.timer) return;
    shadowState.active = false;
    if (shadowState.timer) { clearTimeout(shadowState.timer); shadowState.timer = null; }
    if (shadowState.rec) { try { shadowState.rec.abort(); } catch (_) {} shadowState.rec = null; }
    try { speechSynthesis.cancel(); } catch (_) {}
    // Clear any in-progress listening UI from the shadow flow (don't touch
    // one-off per-sentence mic panels).
    document.querySelectorAll(".pronun-check.shadow.listening").forEach(p => p.remove());
    setShadowButtonLabel();
  }
  function startShadowing(story) {
    if (!SR_AVAILABLE || !story || !story.sentences || !story.sentences.length) return;
    // Abort any existing per-sentence recognizer too.
    if (activeRec) { try { activeRec.abort(); } catch (_) {} activeRec = null; }
    shadowState.active = true;
    shadowState.story = story;
    // Shadowing is a practice pass, not a reading resume — always start from
    // the first sentence so already-finished stories don't immediately end.
    shadowState.i = 0;
    setShadowButtonLabel();
    shadowNext();
  }
  function shadowNext() {
    if (!shadowState.active) return;
    const { story, i } = shadowState;
    if (i >= story.sentences.length) { stopShadowing(); return; }
    const sentence = story.sentences[i];
    const sentenceEl = view.querySelector(`.sentence[data-i="${i}"]`);
    if (!sentenceEl) { stopShadowing(); return; }

    view.querySelectorAll(".sentence").forEach(el => el.classList.remove("active"));
    sentenceEl.classList.add("active");
    sentenceEl.scrollIntoView({ behavior: "smooth", block: "center" });
    // Remove any prior pronun panel.
    const prev = sentenceEl.querySelector(".pronun-check");
    if (prev) prev.remove();
    markRead(story.id, i, story.sentences.length, countSentenceChars(sentence));

    const text = sentence.words.map(w => w.hz).join("");
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "zh-CN";
    u.rate = state.rate;
    u.pitch = 1;
    if (chosenVoice) u.voice = chosenVoice;
    u.onend = () => {
      if (!shadowState.active) return;
      shadowState.timer = setTimeout(() => shadowListen(sentenceEl, sentence), 350);
    };
    try { speechSynthesis.cancel(); speechSynthesis.speak(u); }
    catch (_) { stopShadowing(); }
  }
  function shadowListen(sentenceEl, sentence) {
    if (!shadowState.active) return;
    const expected = sentence.words.map(w => w.hz).join("");
    const expectedClean = stripForPronun(expected);

    const panel = document.createElement("div");
    panel.className = "pronun-check listening shadow";
    panel.innerHTML = `
      <div class="pronun-row">
        <span class="pronun-status"><span class="pronun-dot"></span>Your turn — repeat the sentence</span>
        <button class="pronun-skip" type="button">Skip</button>
      </div>
      <div class="pronun-interim"></div>
    `;
    sentenceEl.appendChild(panel);
    panel.addEventListener("click", (e) => e.stopPropagation());
    panel.querySelector(".pronun-skip").onclick = (e) => {
      e.stopPropagation();
      if (shadowState.rec) { try { shadowState.rec.abort(); } catch (_) {} }
      panel.remove();
      shadowState.i += 1;
      shadowState.timer = setTimeout(shadowNext, 200);
    };

    const rec = new SR_CTOR();
    rec.lang = "zh-CN";
    rec.interimResults = true;
    rec.maxAlternatives = 1;
    rec.continuous = false;
    shadowState.rec = rec;

    let finalT = "", interim = "";
    rec.onresult = (ev) => {
      finalT = ""; interim = "";
      for (let i = 0; i < ev.results.length; i++) {
        const r = ev.results[i];
        if (r.isFinal) finalT += r[0].transcript;
        else interim += r[0].transcript;
      }
      const el = panel.querySelector(".pronun-interim");
      if (el) el.textContent = interim || finalT || "";
    };
    rec.onerror = () => {
      shadowState.rec = null;
      if (!shadowState.active) return;
      panel.remove();
      shadowState.i += 1;
      shadowState.timer = setTimeout(shadowNext, 400);
    };
    rec.onend = () => {
      shadowState.rec = null;
      if (!shadowState.active) return;
      const heard = (finalT || interim || "").trim();
      if (!heard) {
        panel.remove();
        shadowState.i += 1;
        shadowState.timer = setTimeout(shadowNext, 400);
        return;
      }
      renderPronunResult(panel, sentenceEl, sentence, expected, expectedClean, heard);
      // Advance after a brief pause so the user can read their score.
      shadowState.timer = setTimeout(() => {
        if (!shadowState.active) return;
        shadowState.i += 1;
        shadowNext();
      }, 1800);
    };
    try { rec.start(); }
    catch (err) {
      try { rec.abort(); } catch (_) {}
      shadowState.timer = setTimeout(() => { if (shadowState.active) shadowListen(sentenceEl, sentence); }, 200);
    }
  }

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
      markRead(story.id, i, story.sentences.length, countSentenceChars(s));
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
