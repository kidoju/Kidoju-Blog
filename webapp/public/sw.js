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
  "https://www.kidoju.com/support/build/precache-manifest.d910f5cbde4f2d02abc88b71fa07c69d.js"
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
    "url": "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute(/^https:\/\/cdn.kidoju.com/, new workbox.strategies.CacheFirst({ "cacheName":"Kidoju-Blog-runtime-assets", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/www.kidoju.com\/support(\/?$|\/[a-z]{2}($|\/))/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"Kidoju-Blog-runtime-content", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');

workbox.googleAnalytics.initialize({});
