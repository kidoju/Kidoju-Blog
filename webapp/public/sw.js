if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let o=Promise.resolve();return u[e]||(o=new Promise(async o=>{if("document"in self){const u=document.createElement("script");u.src=e,document.head.appendChild(u),u.onload=o}else importScripts(e),o()})),o.then(()=>{if(!u[e])throw new Error(`Module ${e} didn’t register its module`);return u[e]})},o=(o,u)=>{Promise.all(o.map(e)).then(e=>u(1===e.length?e[0]:e))},u={require:Promise.resolve(o)};self.define=(o,s,t)=>{u[o]||(u[o]=Promise.resolve().then(()=>{let u={};const d={uri:location.origin+o.slice(1)};return Promise.all(s.map(o=>{switch(o){case"exports":return u;case"module":return d;default:return e(o)}})).then(e=>{const o=t(...e);return u.default||(u.default=o),u})}))}}define("./sw.js",["./workbox-77b59a61"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Kidoju-Blog"}),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"https://code.jquery.com/jquery-3.5.1.min.js"},{url:"https://www.kidoju.com/support/build/45733d9a7d356b0ebd29b3fbf814d971.woff",revision:"e811d21d46e69ff03a92761dd0b9f47e"},{url:"https://www.kidoju.com/support/build/6633a7f304db97a48be491c9778830f7.png",revision:"cdfd82cd7caa66cfe027d1702b434bd9"},{url:"https://www.kidoju.com/support/build/9c473da0183f170a51201086a3c84008.png",revision:"cbb99b5861be0813c86d8b564e49a468"},{url:"https://www.kidoju.com/support/build/app-culture-en-es6.bundle.js?v=0.3.8",revision:"ed8c4bedcca1d88c9a4d42e3d27ed9ed"},{url:"https://www.kidoju.com/support/build/app-culture-fr-es6.bundle.js?v=0.3.8",revision:"5016c1aa243fb9dc104c295fb96b660f"},{url:"https://www.kidoju.com/support/build/app.theme.black.bundle.js?v=0.3.8",revision:"e0e5bb63361412b104af708fabc07d07"},{url:"https://www.kidoju.com/support/build/app.theme.bootstrap.bundle.js?v=0.3.8",revision:"cc2587e48cf190042ee1be59e40aba70"},{url:"https://www.kidoju.com/support/build/app.theme.flat.bundle.js?v=0.3.8",revision:"baa9c85c2e996589ea21dbb581f4e6ee"},{url:"https://www.kidoju.com/support/build/app.theme.highcontrast.bundle.js?v=0.3.8",revision:"e414060af174bae74a6b71fe3bd8c972"},{url:"https://www.kidoju.com/support/build/app.theme.indigo.bundle.js?v=0.3.8",revision:"0bc9e9ddde6a430ac1c52a72c0a08ee2"},{url:"https://www.kidoju.com/support/build/app.theme.memba.bundle.js?v=0.3.8",revision:"5fb44bf56677b0277cc8215eca44d9c5"},{url:"https://www.kidoju.com/support/build/app.theme.nordic.bundle.js?v=0.3.8",revision:"53b9548daf5ef0281989f832aeff0182"},{url:"https://www.kidoju.com/support/build/app.theme.turquoise.bundle.js?v=0.3.8",revision:"15200975582256013ed011931e52c9ae"},{url:"https://www.kidoju.com/support/build/app.theme.urban.bundle.js?v=0.3.8",revision:"dbff977e8588367cbbfaa98aff405062"},{url:"https://www.kidoju.com/support/build/app.theme.vintage.bundle.js?v=0.3.8",revision:"d93ddb929f1240fbbb0185dfb0ec1201"},{url:"https://www.kidoju.com/support/build/common.bundle.js?v=0.3.8",revision:"fa6fd0e07d85e79e6fcd0b6c5965a279"},{url:"https://www.kidoju.com/support/build/e308906454d79d8c93c1d868de49976d.jpg",revision:"47120e35b461638cf2038d63dece4402"},{url:"https://www.kidoju.com/support/build/edc3513dbd94240c09d78c25e494d655.eot",revision:"06c0e4eee47149717c20a979ffb49b61"},{url:"https://www.kidoju.com/support/build/error.bundle.js?v=0.3.8",revision:"6d4bda0f935611495be9a2e843975f74"},{url:"https://www.kidoju.com/support/build/f818f00b6561cddc041075994b0d7470.ttf",revision:"f0e822cb280b38eaa00d74d242a837f9"},{url:"https://www.kidoju.com/support/build/home.bundle.js?v=0.3.8",revision:"ea3dae87f885e016234a8023b42f29f4"},{url:"https://www.kidoju.com/support/build/init.bundle.js?v=0.3.8",revision:"edf5fcebeb56feec93f922e5c08c6768"},{url:"https://www.kidoju.com/support/build/page.bundle.js?v=0.3.8",revision:"87840fa00af1eaacdbd4dd32c8e9db3c"},{url:"https://www.kidoju.com/support/build/post.bundle.js?v=0.3.8",revision:"884c8608957178a825612d5075b51246"},{url:"https://www.kidoju.com/support/build/search.bundle.js?v=0.3.8",revision:"2381043714af7eae08a4b513e08f6c72"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/cdn.kidoju.com/,new e.CacheFirst({cacheName:"Kidoju-Blog-runtime-assets",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/www.kidoju.com\/support(\/?$|\/[a-z]{2}($|\/))/,new e.StaleWhileRevalidate({cacheName:"Kidoju-Blog-runtime-content",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.initialize({})}));
