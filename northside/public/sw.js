/* eslint-env serviceworker */

const VERSION = "v1";

const CACHE_NAME = `period-tracker-${VERSION}`;

const APP_STATIC_RESOURCES = [
    "/",
    "/index.html",
    "/static/js/main.5fe9cbd0.js",
    "/index.css",
    "manifest.webmanifest"
];

self.addEventListener("install", (e) => {
    e.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            await cache.addAll(APP_STATIC_RESOURCES)
        })(),
    )
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        (async () => {
            const names = await caches.keys();
            await Promise.all(
                names.map((name) => {
                    if (name !== CACHE_NAME) {
                        return caches.delete(name);
                    }
                }),
            );
            await clients.claim();
        })(),
    );
});

self.addEventListener("fetch", (event) => {
    if (event.request.mode === "navigate") {
        event.respondWith(
            caches.match("/index.html")
        );
        return;
    }
    event.respondWith(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            const cachedResponse = await cache.match(event.request);
            if (cachedResponse) {
                return cachedResponse;
            }
            return new Response(null, { status: 404 });
        })(),
    );
});