/* global workbox */

workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL('/index.html')
)

workbox.routing.registerRoute(
  /\.js$/,
  new workbox.strategies.NetworkFirst()
)

workbox.routing.registerRoute(
  /\.html$/,
  new workbox.strategies.NetworkFirst()
)

workbox.routing.registerRoute(
  /\.css$/,
  new workbox.strategies.NetworkFirst()
)

workbox.routing.registerRoute(
  // Cache image files.
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  // Use the cache if it's available.
  new workbox.strategies.CacheFirst({
    // Use a custom cache name.
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images.
        maxEntries: 20,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60
      })
    ]
  })
)

self.addEventListener('message', function (event) {
  const data = event.data

  if (data.command === 'oneWayCommunication') {
    event.waitUntil(new Promise(function (resolve, reject) {
      setTimeout(() => {
        self.registration.showNotification('ServiceWorker Cookbook', {
          body: 'hello this is notification'
        })
        resolve()
      }, 3000)
    }))
  }
})
