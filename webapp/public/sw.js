if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let d=Promise.resolve();return o[e]||(d=new Promise(async d=>{if("document"in self){const o=document.createElement("script");o.src=e,document.head.appendChild(o),o.onload=d}else importScripts(e),d()})),d.then(()=>{if(!o[e])throw new Error(`Module ${e} didn’t register its module`);return o[e]})},d=(d,o)=>{Promise.all(d.map(e)).then(e=>o(1===e.length?e[0]:e))},o={require:Promise.resolve(d)};self.define=(d,u,s)=>{o[d]||(o[d]=Promise.resolve().then(()=>{let o={};const t={uri:location.origin+d.slice(1)};return Promise.all(u.map(d=>{switch(d){case"exports":return o;case"module":return t;default:return e(d)}})).then(e=>{const d=s(...e);return o.default||(o.default=d),o})}))}}define("./sw.js",["./workbox-29af1cbd"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Kidoju-Blog"}),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"},{url:"https://www.kidoju.com/support/build/45733d9a7d356b0ebd29b3fbf814d971.woff",revision:"e811d21d46e69ff03a92761dd0b9f47e"},{url:"https://www.kidoju.com/support/build/6633a7f304db97a48be491c9778830f7.png",revision:"cdfd82cd7caa66cfe027d1702b434bd9"},{url:"https://www.kidoju.com/support/build/9c473da0183f170a51201086a3c84008.png",revision:"cbb99b5861be0813c86d8b564e49a468"},{url:"https://www.kidoju.com/support/build/app-culture-en-es6.bundle.js?v=0.3.8",revision:"d807c86d64bc9b4268f85f7e4af92e81"},{url:"https://www.kidoju.com/support/build/app-culture-fr-es6.bundle.js?v=0.3.8",revision:"aaa30b6e2b2adbd591fe4fad1777681e"},{url:"https://www.kidoju.com/support/build/app.theme.black.bundle.js?v=0.3.8",revision:"67b6ee7fa7c93cfe02c64f347580ad92"},{url:"https://www.kidoju.com/support/build/app.theme.bootstrap.bundle.js?v=0.3.8",revision:"ccf74c7da90c4b4f181e4300aed24ee1"},{url:"https://www.kidoju.com/support/build/app.theme.flat.bundle.js?v=0.3.8",revision:"0819b6ae8e97ae3d739454382a1727fa"},{url:"https://www.kidoju.com/support/build/app.theme.highcontrast.bundle.js?v=0.3.8",revision:"e952f86054a2ed53485d9658aafa71b2"},{url:"https://www.kidoju.com/support/build/app.theme.indigo.bundle.js?v=0.3.8",revision:"f770d12a41979a374b931c12955a9fc3"},{url:"https://www.kidoju.com/support/build/app.theme.memba.bundle.js?v=0.3.8",revision:"8a9e5e6d8dc440877d4440e89d9a64d6"},{url:"https://www.kidoju.com/support/build/app.theme.nordic.bundle.js?v=0.3.8",revision:"425f72961ebe37cd9d868f991d5cb3d5"},{url:"https://www.kidoju.com/support/build/app.theme.turquoise.bundle.js?v=0.3.8",revision:"0af7fcacd163504fcd5f2ff3dfcfdf02"},{url:"https://www.kidoju.com/support/build/app.theme.urban.bundle.js?v=0.3.8",revision:"afe8f1e65a531d46b511a9410177aef1"},{url:"https://www.kidoju.com/support/build/app.theme.vintage.bundle.js?v=0.3.8",revision:"4748374a7dc7ac881297149d877bbd49"},{url:"https://www.kidoju.com/support/build/common.bundle.js?v=0.3.8",revision:"9d16c3a4ef91de16b9b039adde21b0d4"},{url:"https://www.kidoju.com/support/build/e308906454d79d8c93c1d868de49976d.jpg",revision:"47120e35b461638cf2038d63dece4402"},{url:"https://www.kidoju.com/support/build/edc3513dbd94240c09d78c25e494d655.eot",revision:"06c0e4eee47149717c20a979ffb49b61"},{url:"https://www.kidoju.com/support/build/error.bundle.js?v=0.3.8",revision:"6d19a52bf2051c83dd417e4a92d003ed"},{url:"https://www.kidoju.com/support/build/f818f00b6561cddc041075994b0d7470.ttf",revision:"f0e822cb280b38eaa00d74d242a837f9"},{url:"https://www.kidoju.com/support/build/home.bundle.js?v=0.3.8",revision:"e971ad09974de8db902fef91700857f7"},{url:"https://www.kidoju.com/support/build/init.bundle.js?v=0.3.8",revision:"b0ec5ffd60e7d8dc2a145a59fe775e24"},{url:"https://www.kidoju.com/support/build/page.bundle.js?v=0.3.8",revision:"b96df8ab23fb8fb66de8e0786aecd9db"},{url:"https://www.kidoju.com/support/build/post.bundle.js?v=0.3.8",revision:"4028e9ebf5d72599744d4b9b49705e11"},{url:"https://www.kidoju.com/support/build/search.bundle.js?v=0.3.8",revision:"6969b120eb6eefd7eb188ea65f3cc7f8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/cdn.kidoju.com/,new e.CacheFirst({cacheName:"Kidoju-Blog-runtime-assets",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/www.kidoju.com\/support(\/?$|\/[a-z]{2}($|\/))/,new e.StaleWhileRevalidate({cacheName:"Kidoju-Blog-runtime-content",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.initialize({})}));
