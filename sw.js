/* Service worker — 9. Sınıf Sınav Hazırlık
   CACHE_NAME, app.js'teki APP_VERSION ile birlikte artırılır. */
const CACHE_NAME = "sinav-hazirlik-v1.4.0";

// Önce kurulan çekirdek dosyalar (küçük, hızlı). İçerik dosyaları ziyaret edildikçe önbelleğe alınır.
const CEKIRDEK = [
  "./",
  "./index.html",
  "./app.js",
  "./style.css",
  "./manifest.webmanifest",
  "./data/9-sinif.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.2/marked.min.js",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((c) => Promise.allSettled(CEKIRDEK.map((u) => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (e) => {
  if (e.data === "skipWaiting") self.skipWaiting();
});

// Yerel geliştirme sunucusunun canlı yenileme kanalı ve HTML dışı yöntemler önbelleğe girmez.
function atla(req, url) {
  if (req.method !== "GET") return true;
  if (url.pathname.includes("__livereload")) return true;
  if (url.protocol !== "http:" && url.protocol !== "https:") return true;
  return false;
}

// Strateji: önce ağ, olmazsa önbellek. Ağdan gelen başarılı yanıt önbelleğe yazılır.
// Böylece yeni içerik hemen görünür, çevrim dışıyken son görülen sürüm açılır.
async function oncaAgSonraOnbellek(req) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const yanit = await fetch(req);
    if (yanit && (yanit.ok || yanit.type === "opaque")) cache.put(req, yanit.clone());
    return yanit;
  } catch (hata) {
    const eski = await cache.match(req, { ignoreSearch: true });
    if (eski) return eski;
    // Sayfa isteğiyse uygulama kabuğunu ver (hash yönlendirmesi istemci tarafında çalışır).
    if (req.mode === "navigate") {
      const kabuk = await cache.match("./index.html");
      if (kabuk) return kabuk;
    }
    throw hata;
  }
}

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (atla(e.request, url)) return;
  e.respondWith(oncaAgSonraOnbellek(e.request));
});
