if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let o=Promise.resolve();return u[e]||(o=new Promise((async o=>{if("document"in self){const u=document.createElement("script");u.src=e,document.head.appendChild(u),u.onload=o}else importScripts(e),o()}))),o.then((()=>{if(!u[e])throw new Error(`Module ${e} didn’t register its module`);return u[e]}))},o=(o,u)=>{Promise.all(o.map(e)).then((e=>u(1===e.length?e[0]:e)))},u={require:Promise.resolve(o)};self.define=(o,s,t)=>{u[o]||(u[o]=Promise.resolve().then((()=>{let u={};const i={uri:location.origin+o.slice(1)};return Promise.all(s.map((o=>{switch(o){case"exports":return u;case"module":return i;default:return e(o)}}))).then((e=>{const o=t(...e);return u.default||(u.default=o),u}))})))}}define("./sw.js",["./workbox-f544ae7b"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Kidoju-Blog"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"https://code.jquery.com/jquery-3.6.0.min.js"},{url:"https://www.kidoju.com/support/build/45733d9a7d356b0ebd29b3fbf814d971.woff",revision:null},{url:"https://www.kidoju.com/support/build/6633a7f304db97a48be491c9778830f7.png",revision:null},{url:"https://www.kidoju.com/support/build/9c473da0183f170a51201086a3c84008.png",revision:null},{url:"https://www.kidoju.com/support/build/app-culture-en-es6.bundle.js?v=0.3.8",revision:"8f12805ec8530b3aa1c9e1b1bfacd791"},{url:"https://www.kidoju.com/support/build/app-culture-fr-es6.bundle.js?v=0.3.8",revision:"2bafb7b995c86f35de3cd21cf14f7acd"},{url:"https://www.kidoju.com/support/build/app.theme.black.bundle.js?v=0.3.8",revision:"62cd10edf72a6497530c688ee5c6d839"},{url:"https://www.kidoju.com/support/build/app.theme.bootstrap.bundle.js?v=0.3.8",revision:"4160058830c676e31e0e6aea1e3a7138"},{url:"https://www.kidoju.com/support/build/app.theme.flat.bundle.js?v=0.3.8",revision:"9b9b91ced25af7ad99ab58748d871bbb"},{url:"https://www.kidoju.com/support/build/app.theme.highcontrast.bundle.js?v=0.3.8",revision:"803b0974f800110a1d3e5785f26dac15"},{url:"https://www.kidoju.com/support/build/app.theme.indigo.bundle.js?v=0.3.8",revision:"69a0b2d75c041ce906136d0eabbeb4b8"},{url:"https://www.kidoju.com/support/build/app.theme.memba.bundle.js?v=0.3.8",revision:"ba6ff8a7ac3fcb95f9af05ca35ea3db9"},{url:"https://www.kidoju.com/support/build/app.theme.nordic.bundle.js?v=0.3.8",revision:"11153d45598cdcd49bd49554251fba61"},{url:"https://www.kidoju.com/support/build/app.theme.turquoise.bundle.js?v=0.3.8",revision:"694c053067c1f1cb8fe4a236ab00af2f"},{url:"https://www.kidoju.com/support/build/app.theme.urban.bundle.js?v=0.3.8",revision:"386cbf4a94f77b853cda341baaea9ce9"},{url:"https://www.kidoju.com/support/build/app.theme.vintage.bundle.js?v=0.3.8",revision:"e5ade1db7ccf7655318173b0b2a2a747"},{url:"https://www.kidoju.com/support/build/common.bundle.js?v=0.3.8",revision:"8f7369886d82defa71835c3a185da4d5"},{url:"https://www.kidoju.com/support/build/e308906454d79d8c93c1d868de49976d.jpg",revision:null},{url:"https://www.kidoju.com/support/build/edc3513dbd94240c09d78c25e494d655.eot",revision:null},{url:"https://www.kidoju.com/support/build/error.bundle.js?v=0.3.8",revision:"6d28cc1cc60a637e38d69b988a9e4029"},{url:"https://www.kidoju.com/support/build/f818f00b6561cddc041075994b0d7470.ttf",revision:null},{url:"https://www.kidoju.com/support/build/home.bundle.js?v=0.3.8",revision:"473ac44607f44c8027a5ffb2516b843c"},{url:"https://www.kidoju.com/support/build/init.bundle.js?v=0.3.8",revision:"76e8a6466c41e9c68b6959cdb232d4d3"},{url:"https://www.kidoju.com/support/build/page.bundle.js?v=0.3.8",revision:"5042c2eaa583fb63c58b73b94bf004e4"},{url:"https://www.kidoju.com/support/build/post.bundle.js?v=0.3.8",revision:"e191e69364d138caa5b682b0f91389c2"},{url:"https://www.kidoju.com/support/build/search.bundle.js?v=0.3.8",revision:"2a6d166d758a444a9630f89cb96ddc8c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/cdn.kidoju.com/,new e.CacheFirst({cacheName:"Kidoju-Blog-runtime-assets",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/www.kidoju.com\/support(\/?$|\/[a-z]{2}($|\/))/,new e.StaleWhileRevalidate({cacheName:"Kidoju-Blog-runtime-content",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.initialize({})}));
