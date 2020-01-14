/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "https://www.kidoju.com/support/build/precache-manifest.cdbd1aa123c27e9c5459a4a721504b4c.js"
);

workbox.core.setCacheNameDetails({prefix: "Kidoju-Blog"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute(/^https:\/\/cdn.kidoju.com/, new workbox.strategies.CacheFirst({ "cacheName":"Kidoju-Blog-runtime-assets", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 100, maxAgeSeconds: 2592000, purgeOnQuotaError: true })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/www.kidoju.com\/support(\/?$|\/[a-z]{2}($|\/))/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"Kidoju-Blog-runtime-content", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"google-fonts-stylesheets", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, new workbox.strategies.CacheFirst({ "cacheName":"google-fonts-webfonts", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 20, maxAgeSeconds: 31536000, purgeOnQuotaError: true })] }), 'GET');

workbox.googleAnalytics.initialize({});
