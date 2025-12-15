self.addEventListener('install', e => {
  console.log('Service Worker: Installed');
});
self.addEventListener('fetch', e => {
  // future: add caching here
});
