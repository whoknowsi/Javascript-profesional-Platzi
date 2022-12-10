const CACHE_VERSION = 'v1'

self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const { request } = event
    if (request.method !== 'GET') return

    event.respondWith(cachedResponse(request))

    event.request.url.startsWith('http') && event.waitUntil(updateCache(request))
})

async function precache() {
    const cache = await caches.open(CACHE_VERSION)
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4',
    ])
}

async function cachedResponse(request) {
    const cache = await caches.open(CACHE_VERSION)
    const response = await cache.match(request)
    return response || fetch(request)
}

async function updateCache(request) {
    const cache = await caches.open(CACHE_VERSION)
    const response = await fetch(request)
    if (response.status === 206 && !response.headers.get('content-encoding')) {
        const contentLength = parseInt(response.headers.get('content-length'));
        if (
            `bytes 0-${contentLength - 1}/${contentLength}` ===
            response.headers.get('content-range')
        ) {
            // Convert response from 206 -> 200 to make it cacheable
            return new Response(response.body, { status: 200, headers: response.headers });
        }
    }
    return cache.put(request, response)
}