// InkPath service worker.
// Strategy:
//   - App shell (HTML, CSS, JS, data, icon, manifest) is precached on install.
//   - Navigation requests: network-first, fall back to cached index.html when offline.
//   - Firebase SDK (gstatic.com): stale-while-revalidate so it works offline
//     once cached, but updates silently in the background when online.
//   - Everything else: cache-first, fall back to network, then index.html if HTML.

const VERSION = "v10";
const APP_CACHE = "inkpath-app-" + VERSION;
const RUNTIME_CACHE = "inkpath-runtime-" + VERSION;

const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./icon.svg",
  "./data/dictionary.js",
  "./data/hsk-dict.js",
  "./data/stories.js",
  "./data/stories-extra.js",
  "./data/stories-curated.js",
  "./data/stories-volume-2.js",
  "./data/daily-news.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(APP_CACHE).then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== APP_CACHE && k !== RUNTIME_CACHE)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

function isFirebaseSDK(url) {
  return url.origin === "https://www.gstatic.com" && url.pathname.includes("/firebasejs/");
}

function isFirebaseAPI(url) {
  // Firestore/Auth network calls — never cache these; the app will just fail
  // gracefully to the local vocab when offline.
  return /firestore\.googleapis\.com|identitytoolkit\.googleapis\.com|securetoken\.googleapis\.com|firebaseio\.com/.test(url.host);
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // 1) Never intercept live Firebase API traffic.
  if (isFirebaseAPI(url)) return;

  // 2) Firebase SDK scripts: stale-while-revalidate.
  if (isFirebaseSDK(url)) {
    event.respondWith(
      caches.open(RUNTIME_CACHE).then(async (cache) => {
        const cached = await cache.match(req);
        const network = fetch(req).then((res) => {
          if (res && res.status === 200) cache.put(req, res.clone());
          return res;
        }).catch(() => cached);
        return cached || network;
      })
    );
    return;
  }

  // 3) HTML navigations: network-first, fall back to cached index.html.
  if (req.mode === "navigate" || (req.headers.get("accept") || "").includes("text/html")) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(APP_CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(async () => {
          const cached = await caches.match(req);
          return cached || caches.match("./index.html") || caches.match("./");
        })
    );
    return;
  }

  // 4) Same-origin static assets: cache-first.
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          if (res && res.status === 200 && res.type === "basic") {
            const copy = res.clone();
            caches.open(APP_CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
          }
          return res;
        }).catch(() => cached);
      })
    );
    return;
  }

  // 5) Everything else (fonts, etc.): try network, fall back to cache.
  event.respondWith(
    fetch(req).then((res) => {
      if (res && res.status === 200) {
        const copy = res.clone();
        caches.open(RUNTIME_CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
      }
      return res;
    }).catch(() => caches.match(req))
  );
});

// Allow the page to prompt an immediate update when a new SW is waiting.
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});
