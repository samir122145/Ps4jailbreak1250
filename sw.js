const cacheName = 'ps4-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/goldhen.bin' // Include only if you want this payload cached offline
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
