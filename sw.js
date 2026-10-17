self.addEventListener('install', e => {
  e.waitUntil(caches.open('geodio-v1').then(c => c.addAll(['./', './index.html', './logo.png', './manifest.json'])));
  self.skipWaiting();
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
