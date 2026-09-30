/* Quality Quest Service Worker - Offline Study Mode */
const CACHE_NAME = 'quality-quest-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './sesion-01.html',
  './sesion-02.html',
  './sesion-03.html',
  './sesion-04.html',
  './sesion-05.html',
  './examen-final.html',
  './theme.css',
  './gamification.js',
  './settings.js',
  './exam-engine.js',
  './manifest.json',
  './data/questions-s1.js',
  './data/questions-s2.js',
  './data/questions-s3.js',
  './data/questions-s4.js',
  './data/questions-s5.js',
  './data/questions-final.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached and refresh in background
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(() => {});
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        // Fallback to index if navigating
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
