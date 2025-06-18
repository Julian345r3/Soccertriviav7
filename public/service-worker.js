const CACHE_NAME = "soccer-trivia-cache-v1";
const urlsToCache = [
  "./", // Caches the root HTML file
  "./index.html", // Ensures index.html is explicitly cached
  // Add other static assets your app uses.
  // In a real build, these would be automatically generated React JS/CSS files.
  // For a CodeSandbox, this assumes the main bundles are covered by the './' scope.
  // You might want to explicitly list any specific image URLs you use if they are critical for offline.
  // e.g., 'https://placehold.co/400x200/4CAF50/FFFFFF?text=Historic+Football+1',
];

self.addEventListener("install", (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }
      // No cache hit - fetch from network
      return fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Delete old caches
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
