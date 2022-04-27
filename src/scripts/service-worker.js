self.addEventListener('install', (event) => {
  // TODO: Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
  // TODO: Delete old caches
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
  // TODO: Add/get fetch request to/from caches
});
