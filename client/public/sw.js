// Retire the old cache-first worker so visitors always receive the latest app.
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames
        .filter((name) => name.startsWith('waypoint-appraisal-'))
        .map((name) => caches.delete(name))
    );
    await self.registration.unregister();
    await self.clients.claim();
  })());
});
