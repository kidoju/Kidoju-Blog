if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let o=Promise.resolve();return u[e]||(o=new Promise((async o=>{if("document"in self){const u=document.createElement("script");u.src=e,document.head.appendChild(u),u.onload=o}else importScripts(e),o()}))),o.then((()=>{if(!u[e])throw new Error(`Module ${e} didn’t register its module`);return u[e]}))},o=(o,u)=>{Promise.all(o.map(e)).then((e=>u(1===e.length?e[0]:e)))},u={require:Promise.resolve(o)};self.define=(o,s,t)=>{u[o]||(u[o]=Promise.resolve().then((()=>{let u={};const i={uri:location.origin+o.slice(1)};return Promise.all(s.map((o=>{switch(o){case"exports":return u;case"module":return i;default:return e(o)}}))).then((e=>{const o=t(...e);return u.default||(u.default=o),u}))})))}}define("./sw.js",["./workbox-9840122a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Kidoju-Blog"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"https://code.jquery.com/jquery-3.5.1.min.js"},{url:"https://www.kidoju.com/support/build/45733d9a7d356b0ebd29b3fbf814d971.woff",revision:null},{url:"https://www.kidoju.com/support/build/6633a7f304db97a48be491c9778830f7.png",revision:null},{url:"https://www.kidoju.com/support/build/9c473da0183f170a51201086a3c84008.png",revision:null},{url:"https://www.kidoju.com/support/build/app-culture-en-es6.bundle.js?v=0.3.8",revision:"4650b133290305f011dcae28a93f7035"},{url:"https://www.kidoju.com/support/build/app-culture-fr-es6.bundle.js?v=0.3.8",revision:"26e26a78215e83cea043a78f6a8dc690"},{url:"https://www.kidoju.com/support/build/app.theme.black.bundle.js?v=0.3.8",revision:"826e238033fae390d7a5584cf2f5cceb"},{url:"https://www.kidoju.com/support/build/app.theme.bootstrap.bundle.js?v=0.3.8",revision:"4a51469eadfea450ebacfc08a310e95e"},{url:"https://www.kidoju.com/support/build/app.theme.flat.bundle.js?v=0.3.8",revision:"52548d80c882ff07ef68c6afb59b4464"},{url:"https://www.kidoju.com/support/build/app.theme.highcontrast.bundle.js?v=0.3.8",revision:"74ddce6c54325369529f780071b37b10"},{url:"https://www.kidoju.com/support/build/app.theme.indigo.bundle.js?v=0.3.8",revision:"b97e790b6d5779b1aeb85fb66d7d4f64"},{url:"https://www.kidoju.com/support/build/app.theme.memba.bundle.js?v=0.3.8",revision:"e4a28198c195cc6454ded0e798da2193"},{url:"https://www.kidoju.com/support/build/app.theme.nordic.bundle.js?v=0.3.8",revision:"0e674716f0f7ad1faed1093c42a1aaee"},{url:"https://www.kidoju.com/support/build/app.theme.turquoise.bundle.js?v=0.3.8",revision:"c2a2ba1d5096d51b48c4768fe78a3c37"},{url:"https://www.kidoju.com/support/build/app.theme.urban.bundle.js?v=0.3.8",revision:"60f7e71f67476ee2015eeb3050a57251"},{url:"https://www.kidoju.com/support/build/app.theme.vintage.bundle.js?v=0.3.8",revision:"341b81230e96e3f7195949fb3de6402f"},{url:"https://www.kidoju.com/support/build/common.bundle.js?v=0.3.8",revision:"49bbac70d60991562fb45acd13c51652"},{url:"https://www.kidoju.com/support/build/e308906454d79d8c93c1d868de49976d.jpg",revision:null},{url:"https://www.kidoju.com/support/build/edc3513dbd94240c09d78c25e494d655.eot",revision:null},{url:"https://www.kidoju.com/support/build/error.bundle.js?v=0.3.8",revision:"4e692dc0d0183779fcb34edb9f307636"},{url:"https://www.kidoju.com/support/build/f818f00b6561cddc041075994b0d7470.ttf",revision:null},{url:"https://www.kidoju.com/support/build/home.bundle.js?v=0.3.8",revision:"d7abd01394ae5e89c569618c9e0a577f"},{url:"https://www.kidoju.com/support/build/init.bundle.js?v=0.3.8",revision:"042205b036d9e65577725d870e6b3045"},{url:"https://www.kidoju.com/support/build/page.bundle.js?v=0.3.8",revision:"9253c2dd9904170d5eda811a451fcf47"},{url:"https://www.kidoju.com/support/build/post.bundle.js?v=0.3.8",revision:"211b4c62a8404132266bdeae103af143"},{url:"https://www.kidoju.com/support/build/search.bundle.js?v=0.3.8",revision:"da3566dc33a8e7f7fd8a0ad80ae18c37"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/cdn.kidoju.com/,new e.CacheFirst({cacheName:"Kidoju-Blog-runtime-assets",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/www.kidoju.com\/support(\/?$|\/[a-z]{2}($|\/))/,new e.StaleWhileRevalidate({cacheName:"Kidoju-Blog-runtime-content",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.initialize({})}));
