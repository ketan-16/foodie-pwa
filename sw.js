// Install a SW
self.addEventListener('install', evt => {
    console.log('Service worker installed')
})

self.addEventListener('activate', evt => {
    console.log('Service Worker Activated')
})