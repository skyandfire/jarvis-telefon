// JARVIS PWA service worker — uygulama kabuğunu önbelleğe alır, çevrimdışı açılır.
// Yeni sürüm yayınlarken sadece VERSION'u değiştir: telefonda "GÜNCELLE" bildirimi çıkar.
const VERSION = "1.4.1";
const CACHE = "jarvis-shell-" + VERSION;
const SHELL = ["./", "index.html", "style.css", "app.js", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/icon-512-maskable.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)));
});
self.addEventListener("message", (e) => { if (e.data === "skipWaiting") self.skipWaiting(); });
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k.startsWith("jarvis-shell-") && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  const url = new URL(req.url);
  // Sadece kendi dosyalarımız; API ve yapay zeka istekleri hiç önbelleğe alınmaz.
  if (req.method !== "GET" || url.origin !== location.origin || url.pathname.includes("/api/")) return;
  if (req.mode === "navigate") {
    // Sayfa: önce ağ (güncel kalsın), internet yoksa önbellek.
    e.respondWith(fetch(req).catch(() => caches.match("index.html", { ignoreSearch: true })));
    return;
  }
  // Dosyalar: önbellekten hızlı aç, arkada tazele.
  e.respondWith(caches.match(req, { ignoreSearch: true }).then((hit) => {
    const fresh = fetch(req).then((r) => {
      if (r.ok) { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return r;
    }).catch(() => hit);
    return hit || fresh;
  }));
});
