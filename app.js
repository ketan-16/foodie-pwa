if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('SW Registered'))
    .catch(() => console.log('SW Not Registered'))
}