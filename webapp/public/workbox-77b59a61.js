define("./workbox-77b59a61.js",["exports"],(function(t){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(t){}const e=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class s extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:5.1.4"]&&_()}catch(t){}const n=t=>t&&"object"==typeof t?t:{handle:t};class i{constructor(t,e,s="GET"){this.handler=n(e),this.match=t,this.method=s}}class r extends i{constructor(t,e,s){super(({url:e})=>{const s=t.exec(e.href);if(s&&(e.origin===location.origin||0===s.index))return s.slice(1)},e,s)}}const a=t=>new URL(String(t),location.href).href.replace(new RegExp(`^${location.origin}`),"");class c{constructor(){this.t=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",t=>{const{request:e}=t,s=this.handleRequest({request:e,event:t});s&&t.respondWith(s)})}addCacheListener(){self.addEventListener("message",t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data,s=Promise.all(e.urlsToCache.map(t=>{"string"==typeof t&&(t=[t]);const e=new Request(...t);return this.handleRequest({request:e})}));t.waitUntil(s),t.ports&&t.ports[0]&&s.then(()=>t.ports[0].postMessage(!0))}})}handleRequest({request:t,event:e}){const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:i}=this.findMatchingRoute({url:s,request:t,event:e});let r,a=i&&i.handler;if(!a&&this.s&&(a=this.s),a){try{r=a.handle({url:s,request:t,event:e,params:n})}catch(t){r=Promise.reject(t)}return r instanceof Promise&&this.i&&(r=r.catch(n=>this.i.handle({url:s,request:t,event:e}))),r}}findMatchingRoute({url:t,request:e,event:s}){const n=this.t.get(e.method)||[];for(const i of n){let n;const r=i.match({url:t,request:e,event:s});if(r)return n=r,(Array.isArray(r)&&0===r.length||r.constructor===Object&&0===Object.keys(r).length||"boolean"==typeof r)&&(n=void 0),{route:i,params:n}}return{}}setDefaultHandler(t){this.s=n(t)}setCatchHandler(t){this.i=n(t)}registerRoute(t){this.t.has(t.method)||this.t.set(t.method,[]),this.t.get(t.method).push(t)}unregisterRoute(t){if(!this.t.has(t.method))throw new s("unregister-route-but-not-found-with-method",{method:t.method});const e=this.t.get(t.method).indexOf(t);if(!(e>-1))throw new s("unregister-route-route-not-registered");this.t.get(t.method).splice(e,1)}}let o;const h=()=>(o||(o=new c,o.addFetchListener(),o.addCacheListener()),o);try{self["workbox:cacheable-response:5.1.4"]&&_()}catch(t){}class u{constructor(t={}){this.o=t.statuses,this.h=t.headers}isResponseCacheable(t){let e=!0;return this.o&&(e=this.o.includes(t.status)),this.h&&e&&(e=Object.keys(this.h).some(e=>t.headers.get(e)===this.h[e])),e}}const l={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},w=t=>[l.prefix,t,l.suffix].filter(t=>t&&t.length>0).join("-"),f=t=>{(t=>{for(const e of Object.keys(l))t(e)})(e=>{"string"==typeof t[e]&&(l[e]=t[e])})},y=t=>t||w(l.googleAnalytics),d=t=>t||w(l.precache),p=t=>t||w(l.runtime);function g(t){t.then(()=>{})}const m=new Set;class q{constructor(t,e,{onupgradeneeded:s,onversionchange:n}={}){this.u=null,this.l=t,this.p=e,this.g=s,this.m=n||(()=>this.close())}get db(){return this.u}async open(){if(!this.u)return this.u=await new Promise((t,e)=>{let s=!1;setTimeout(()=>{s=!0,e(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this.l,this.p);n.onerror=()=>e(n.error),n.onupgradeneeded=t=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.g&&this.g(t)},n.onsuccess=()=>{const e=n.result;s?e.close():(e.onversionchange=this.m.bind(this),t(e))}}),this}async getKey(t,e){return(await this.getAllKeys(t,e,1))[0]}async getAll(t,e,s){return await this.getAllMatching(t,{query:e,count:s})}async getAllKeys(t,e,s){return(await this.getAllMatching(t,{query:e,count:s,includeKeys:!0})).map(t=>t.key)}async getAllMatching(t,{index:e,query:s=null,direction:n="next",count:i,includeKeys:r=!1}={}){return await this.transaction([t],"readonly",(a,c)=>{const o=a.objectStore(t),h=e?o.index(e):o,u=[],l=h.openCursor(s,n);l.onsuccess=()=>{const t=l.result;t?(u.push(r?t:t.value),i&&u.length>=i?c(u):t.continue()):c(u)}})}async transaction(t,e,s){return await this.open(),await new Promise((n,i)=>{const r=this.u.transaction(t,e);r.onabort=()=>i(r.error),r.oncomplete=()=>n(),s(r,t=>n(t))})}async q(t,e,s,...n){return await this.transaction([e],s,(s,i)=>{const r=s.objectStore(e),a=r[t].apply(r,n);a.onsuccess=()=>i(a.result)})}close(){this.u&&(this.u.close(),this.u=null)}}q.prototype.OPEN_TIMEOUT=2e3;const R={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[t,e]of Object.entries(R))for(const s of e)s in IDBObjectStore.prototype&&(q.prototype[s]=async function(e,...n){return await this.q(s,e,t,...n)});try{self["workbox:expiration:5.1.4"]&&_()}catch(t){}const v=t=>{const e=new URL(t,location.href);return e.hash="",e.href};class x{constructor(t){this.R=t,this.u=new q("workbox-expiration",1,{onupgradeneeded:t=>this.v(t)})}v(t){const e=t.target.result.createObjectStore("cache-entries",{keyPath:"id"});e.createIndex("cacheName","cacheName",{unique:!1}),e.createIndex("timestamp","timestamp",{unique:!1}),(async t=>{await new Promise((e,s)=>{const n=indexedDB.deleteDatabase(t);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{e()}})})(this.R)}async setTimestamp(t,e){const s={url:t=v(t),timestamp:e,cacheName:this.R,id:this.U(t)};await this.u.put("cache-entries",s)}async getTimestamp(t){return(await this.u.get("cache-entries",this.U(t))).timestamp}async expireEntries(t,e){const s=await this.u.transaction("cache-entries","readwrite",(s,n)=>{const i=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),r=[];let a=0;i.onsuccess=()=>{const s=i.result;if(s){const n=s.value;n.cacheName===this.R&&(t&&n.timestamp<t||e&&a>=e?r.push(s.value):a++),s.continue()}else n(r)}}),n=[];for(const t of s)await this.u.delete("cache-entries",t.id),n.push(t.url);return n}U(t){return this.R+"|"+v(t)}}class U{constructor(t,e={}){this.N=!1,this.L=!1,this._=e.maxEntries,this.O=e.maxAgeSeconds,this.R=t,this.T=new x(t)}async expireEntries(){if(this.N)return void(this.L=!0);this.N=!0;const t=this.O?Date.now()-1e3*this.O:0,e=await this.T.expireEntries(t,this._),s=await self.caches.open(this.R);for(const t of e)await s.delete(t);this.N=!1,this.L&&(this.L=!1,g(this.expireEntries()))}async updateTimestamp(t){await this.T.setTimestamp(t,Date.now())}async isURLExpired(t){if(this.O){return await this.T.getTimestamp(t)<Date.now()-1e3*this.O}return!1}async delete(){this.L=!1,await this.T.expireEntries(1/0)}}const b=(t,e)=>t.filter(t=>e in t),N=async({request:t,mode:e,plugins:s=[]})=>{const n=b(s,"cacheKeyWillBeUsed");let i=t;for(const t of n)i=await t.cacheKeyWillBeUsed.call(t,{mode:e,request:i}),"string"==typeof i&&(i=new Request(i));return i},L=async({cacheName:t,request:e,event:s,matchOptions:n,plugins:i=[]})=>{const r=await self.caches.open(t),a=await N({plugins:i,request:e,mode:"read"});let c=await r.match(a,n);for(const e of i)if("cachedResponseWillBeUsed"in e){const i=e.cachedResponseWillBeUsed;c=await i.call(e,{cacheName:t,event:s,matchOptions:n,cachedResponse:c,request:a})}return c},E=async({cacheName:t,request:e,response:n,event:i,plugins:r=[],matchOptions:c})=>{const o=await N({plugins:r,request:e,mode:"write"});if(!n)throw new s("cache-put-with-no-response",{url:a(o.url)});const h=await(async({request:t,response:e,event:s,plugins:n=[]})=>{let i=e,r=!1;for(const e of n)if("cacheWillUpdate"in e){r=!0;const n=e.cacheWillUpdate;if(i=await n.call(e,{request:t,response:i,event:s}),!i)break}return r||(i=i&&200===i.status?i:void 0),i||null})({event:i,plugins:r,response:n,request:o});if(!h)return;const u=await self.caches.open(t),l=b(r,"cacheDidUpdate"),w=l.length>0?await L({cacheName:t,matchOptions:c,request:o}):null;try{await u.put(o,h)}catch(t){throw"QuotaExceededError"===t.name&&await async function(){for(const t of m)await t()}(),t}for(const e of l)await e.cacheDidUpdate.call(e,{cacheName:t,event:i,oldResponse:w,newResponse:h,request:o})},O=L,T=async({request:t,fetchOptions:e,event:n,plugins:i=[]})=>{if("string"==typeof t&&(t=new Request(t)),n instanceof FetchEvent&&n.preloadResponse){const t=await n.preloadResponse;if(t)return t}const r=b(i,"fetchDidFail"),a=r.length>0?t.clone():null;try{for(const e of i)if("requestWillFetch"in e){const s=e.requestWillFetch,i=t.clone();t=await s.call(e,{request:i,event:n})}}catch(t){throw new s("plugin-error-request-will-fetch",{thrownError:t})}const c=t.clone();try{let s;s="navigate"===t.mode?await fetch(t):await fetch(t,e);for(const t of i)"fetchDidSucceed"in t&&(s=await t.fetchDidSucceed.call(t,{event:n,request:c,response:s}));return s}catch(t){for(const e of r)await e.fetchDidFail.call(e,{error:t,event:n,originalRequest:a.clone(),request:c.clone()});throw t}};try{self["workbox:strategies:5.1.4"]&&_()}catch(t){}const D={cacheWillUpdate:async({response:t})=>200===t.status||0===t.status?t:null};let P;async function k(t,e){const s=t.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},i=e?e(n):n,r=function(){if(void 0===P){const t=new Response("");if("body"in t)try{new Response(t.body),P=!0}catch(t){P=!1}P=!1}return P}()?s.body:await s.blob();return new Response(r,i)}try{self["workbox:precaching:5.1.4"]&&_()}catch(t){}function S(t){if(!t)throw new s("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:e,url:n}=t;if(!n)throw new s("add-to-cache-list-unexpected-type",{entry:t});if(!e){const t=new URL(n,location.href);return{cacheKey:t.href,url:t.href}}const i=new URL(n,location.href),r=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",e),{cacheKey:i.href,url:r.href}}class K{constructor(t){this.R=d(t),this.D=new Map,this.P=new Map,this.k=new Map}addToCacheList(t){const e=[];for(const n of t){"string"==typeof n?e.push(n):n&&void 0===n.revision&&e.push(n.url);const{cacheKey:t,url:i}=S(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this.D.has(i)&&this.D.get(i)!==t)throw new s("add-to-cache-list-conflicting-entries",{firstEntry:this.D.get(i),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this.k.has(t)&&this.k.get(t)!==n.integrity)throw new s("add-to-cache-list-conflicting-integrities",{url:i});this.k.set(t,n.integrity)}if(this.D.set(i,t),this.P.set(i,r),e.length>0){const t="Workbox is precaching URLs without revision "+`info: ${e.join(", ")}\nThis is generally NOT safe. `+"Learn more at https://bit.ly/wb-precache";console.warn(t)}}}async install({event:t,plugins:e}={}){const s=[],n=[],i=await self.caches.open(this.R),r=await i.keys(),a=new Set(r.map(t=>t.url));for(const[t,e]of this.D)a.has(e)?n.push(t):s.push({cacheKey:e,url:t});const c=s.map(({cacheKey:s,url:n})=>{const i=this.k.get(s),r=this.P.get(n);return this.S({cacheKey:s,cacheMode:r,event:t,integrity:i,plugins:e,url:n})});return await Promise.all(c),{updatedURLs:s.map(t=>t.url),notUpdatedURLs:n}}async activate(){const t=await self.caches.open(this.R),e=await t.keys(),s=new Set(this.D.values()),n=[];for(const i of e)s.has(i.url)||(await t.delete(i),n.push(i.url));return{deletedURLs:n}}async S({cacheKey:t,url:e,cacheMode:n,event:i,plugins:r,integrity:a}){const c=new Request(e,{integrity:a,cache:n,credentials:"same-origin"});let o,h=await T({event:i,plugins:r,request:c});for(const t of r||[])"cacheWillUpdate"in t&&(o=t);if(!(o?await o.cacheWillUpdate({event:i,request:c,response:h}):h.status<400))throw new s("bad-precaching-response",{url:e,status:h.status});h.redirected&&(h=await k(h)),await E({event:i,plugins:r,response:h,request:t===e?c:new Request(t),cacheName:this.R,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this.D}getCachedURLs(){return[...this.D.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this.D.get(e.href)}async matchPrecache(t){const e=t instanceof Request?t.url:t,s=this.getCacheKeyForURL(e);if(s){return(await self.caches.open(this.R)).match(s)}}createHandler(t=!0){return async({request:e})=>{try{const t=await this.matchPrecache(e);if(t)return t;throw new s("missing-precache-entry",{cacheName:this.R,url:e instanceof Request?e.url:e})}catch(s){if(t)return fetch(e);throw s}}}createHandlerBoundToURL(t,e=!0){if(!this.getCacheKeyForURL(t))throw new s("non-precached-url",{url:t});const n=this.createHandler(e),i=new Request(t);return()=>n({request:i})}}let M;const j=()=>(M||(M=new K),M);const C=(t,e)=>{const s=j().getURLsToCacheKeys();for(const n of function*(t,{ignoreURLParametersMatching:e,directoryIndex:s,cleanURLs:n,urlManipulation:i}={}){const r=new URL(t,location.href);r.hash="",yield r.href;const a=function(t,e=[]){for(const s of[...t.searchParams.keys()])e.some(t=>t.test(s))&&t.searchParams.delete(s);return t}(r,e);if(yield a.href,s&&a.pathname.endsWith("/")){const t=new URL(a.href);t.pathname+=s,yield t.href}if(n){const t=new URL(a.href);t.pathname+=".html",yield t.href}if(i){const t=i({url:r});for(const e of t)yield e.href}}(t,e)){const t=s.get(n);if(t)return t}};let A=!1;function I(t){A||((({ignoreURLParametersMatching:t=[/^utm_/],directoryIndex:e="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const i=d();self.addEventListener("fetch",r=>{const a=C(r.request.url,{cleanURLs:s,directoryIndex:e,ignoreURLParametersMatching:t,urlManipulation:n});if(!a)return;let c=self.caches.open(i).then(t=>t.match(a)).then(t=>t||fetch(a));r.respondWith(c)})})(t),A=!0)}const B=[],F={get:()=>B,add(t){B.push(...t)}},W=t=>{const e=j(),s=F.get();t.waitUntil(e.install({event:t,plugins:s}).catch(t=>{throw t}))},H=t=>{const e=j();t.waitUntil(e.activate())};try{self["workbox:background-sync:5.1.4"]&&_()}catch(t){}class ${constructor(t){this.K=t,this.u=new q("workbox-background-sync",3,{onupgradeneeded:this.M})}async pushEntry(t){delete t.id,t.queueName=this.K,await this.u.add("requests",t)}async unshiftEntry(t){const[e]=await this.u.getAllMatching("requests",{count:1});e?t.id=e.id-1:delete t.id,t.queueName=this.K,await this.u.add("requests",t)}async popEntry(){return this.j({direction:"prev"})}async shiftEntry(){return this.j({direction:"next"})}async getAll(){return await this.u.getAllMatching("requests",{index:"queueName",query:IDBKeyRange.only(this.K)})}async deleteEntry(t){await this.u.delete("requests",t)}async j({direction:t}){const[e]=await this.u.getAllMatching("requests",{direction:t,index:"queueName",query:IDBKeyRange.only(this.K),count:1});if(e)return await this.deleteEntry(e.id),e}M(t){const e=t.target.result;t.oldVersion>0&&t.oldVersion<3&&e.objectStoreNames.contains("requests")&&e.deleteObjectStore("requests"),e.createObjectStore("requests",{autoIncrement:!0,keyPath:"id"}).createIndex("queueName","queueName",{unique:!1})}}const G=["method","referrer","referrerPolicy","mode","credentials","cache","redirect","integrity","keepalive"];class J{constructor(t){"navigate"===t.mode&&(t.mode="same-origin"),this.C=t}static async fromRequest(t){const e={url:t.url,headers:{}};"GET"!==t.method&&(e.body=await t.clone().arrayBuffer());for(const[s,n]of t.headers.entries())e.headers[s]=n;for(const s of G)void 0!==t[s]&&(e[s]=t[s]);return new J(e)}toObject(){const t=Object.assign({},this.C);return t.headers=Object.assign({},this.C.headers),t.body&&(t.body=t.body.slice(0)),t}toRequest(){return new Request(this.C.url,this.C)}clone(){return new J(this.toObject())}}const Q=new Set,V=t=>{const e={request:new J(t.requestData).toRequest(),timestamp:t.timestamp};return t.metadata&&(e.metadata=t.metadata),e};class z{constructor(t,{onSync:e,maxRetentionTime:n}={}){if(this.A=!1,this.I=!1,Q.has(t))throw new s("duplicate-queue-name",{name:t});Q.add(t),this.l=t,this.B=e||this.replayRequests,this.F=n||10080,this.W=new $(this.l),this.H()}get name(){return this.l}async pushRequest(t){await this.$(t,"push")}async unshiftRequest(t){await this.$(t,"unshift")}async popRequest(){return this.G("pop")}async shiftRequest(){return this.G("shift")}async getAll(){const t=await this.W.getAll(),e=Date.now(),s=[];for(const n of t){const t=60*this.F*1e3;e-n.timestamp>t?await this.W.deleteEntry(n.id):s.push(V(n))}return s}async $({request:t,metadata:e,timestamp:s=Date.now()},n){const i={requestData:(await J.fromRequest(t.clone())).toObject(),timestamp:s};e&&(i.metadata=e),await this.W[`${n}Entry`](i),this.A?this.I=!0:await this.registerSync()}async G(t){const e=Date.now(),s=await this.W[`${t}Entry`]();if(s){const n=60*this.F*1e3;return e-s.timestamp>n?this.G(t):V(s)}}async replayRequests(){let t;for(;t=await this.shiftRequest();)try{await fetch(t.request.clone())}catch(e){throw await this.unshiftRequest(t),new s("queue-replay-failed",{name:this.l})}}async registerSync(){if("sync"in self.registration)try{await self.registration.sync.register(`workbox-background-sync:${this.l}`)}catch(t){}}H(){"sync"in self.registration?self.addEventListener("sync",t=>{if(t.tag===`workbox-background-sync:${this.l}`){const e=async()=>{let e;this.A=!0;try{await this.B({queue:this})}catch(t){throw e=t,e}finally{!this.I||e&&!t.lastChance||await this.registerSync(),this.A=!1,this.I=!1}};t.waitUntil(e())}}):this.B({queue:this})}static get J(){return Q}}class X{constructor(t,e){this.fetchDidFail=async({request:t})=>{await this.V.pushRequest({request:t})},this.V=new z(t,e)}}class Y{constructor(t={}){if(this.R=p(t.cacheName),t.plugins){const e=t.plugins.some(t=>!!t.cacheWillUpdate);this.X=e?t.plugins:[D,...t.plugins]}else this.X=[D];this.Y=t.networkTimeoutSeconds||0,this.Z=t.fetchOptions,this.tt=t.matchOptions}async handle({event:t,request:e}){const n=[];"string"==typeof e&&(e=new Request(e));const i=[];let r;if(this.Y){const{id:s,promise:a}=this.et({request:e,event:t,logs:n});r=s,i.push(a)}const a=this.st({timeoutId:r,request:e,event:t,logs:n});i.push(a);let c=await Promise.race(i);if(c||(c=await a),!c)throw new s("no-response",{url:e.url});return c}et({request:t,logs:e,event:s}){let n;return{promise:new Promise(e=>{n=setTimeout(async()=>{e(await this.nt({request:t,event:s}))},1e3*this.Y)}),id:n}}async st({timeoutId:t,request:e,logs:s,event:n}){let i,r;try{r=await T({request:e,event:n,fetchOptions:this.Z,plugins:this.X})}catch(t){i=t}if(t&&clearTimeout(t),i||!r)r=await this.nt({request:e,event:n});else{const t=r.clone(),s=E({cacheName:this.R,request:e,response:t,event:n,plugins:this.X});if(n)try{n.waitUntil(s)}catch(t){}}return r}nt({event:t,request:e}){return O({cacheName:this.R,request:e,event:t,matchOptions:this.tt,plugins:this.X})}}class Z{constructor(t={}){this.X=t.plugins||[],this.Z=t.fetchOptions}async handle({event:t,request:e}){let n,i;"string"==typeof e&&(e=new Request(e));try{i=await T({request:e,event:t,fetchOptions:this.Z,plugins:this.X})}catch(t){n=t}if(!i)throw new s("no-response",{url:e.url,error:n});return i}}try{self["workbox:google-analytics:5.1.4"]&&_()}catch(t){}const tt=/^\/(\w+\/)?collect/,et=t=>{const e=({url:t})=>"www.google-analytics.com"===t.hostname&&tt.test(t.pathname),s=new Z({plugins:[t]});return[new i(e,s,"GET"),new i(e,s,"POST")]},st=t=>{const e=new Y({cacheName:t});return new i(({url:t})=>"www.google-analytics.com"===t.hostname&&"/analytics.js"===t.pathname,e,"GET")},nt=t=>{const e=new Y({cacheName:t});return new i(({url:t})=>"www.googletagmanager.com"===t.hostname&&"/gtag/js"===t.pathname,e,"GET")},it=t=>{const e=new Y({cacheName:t});return new i(({url:t})=>"www.googletagmanager.com"===t.hostname&&"/gtm.js"===t.pathname,e,"GET")};t.CacheFirst=class{constructor(t={}){this.R=p(t.cacheName),this.X=t.plugins||[],this.Z=t.fetchOptions,this.tt=t.matchOptions}async handle({event:t,request:e}){"string"==typeof e&&(e=new Request(e));let n,i=await O({cacheName:this.R,request:e,event:t,matchOptions:this.tt,plugins:this.X});if(!i)try{i=await this.it(e,t)}catch(t){n=t}if(!i)throw new s("no-response",{url:e.url,error:n});return i}async it(t,e){const s=await T({request:t,event:e,fetchOptions:this.Z,plugins:this.X}),n=s.clone(),i=E({cacheName:this.R,request:t,response:n,event:e,plugins:this.X});if(e)try{e.waitUntil(i)}catch(t){}return s}},t.CacheableResponsePlugin=class{constructor(t){this.cacheWillUpdate=async({response:t})=>this.rt.isResponseCacheable(t)?t:null,this.rt=new u(t)}},t.ExpirationPlugin=class{constructor(t={}){var e;this.cachedResponseWillBeUsed=async({event:t,request:e,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.at(n),r=this.ct(s);g(r.expireEntries());const a=r.updateTimestamp(e.url);if(t)try{t.waitUntil(a)}catch(t){}return i?n:null},this.cacheDidUpdate=async({cacheName:t,request:e})=>{const s=this.ct(t);await s.updateTimestamp(e.url),await s.expireEntries()},this.ot=t,this.O=t.maxAgeSeconds,this.ht=new Map,t.purgeOnQuotaError&&(e=()=>this.deleteCacheAndMetadata(),m.add(e))}ct(t){if(t===p())throw new s("expire-custom-caches-only");let e=this.ht.get(t);return e||(e=new U(t,this.ot),this.ht.set(t,e)),e}at(t){if(!this.O)return!0;const e=this.ut(t);return null===e||e>=Date.now()-1e3*this.O}ut(t){if(!t.headers.has("date"))return null;const e=t.headers.get("date"),s=new Date(e).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[t,e]of this.ht)await self.caches.delete(t),await e.delete();this.ht=new Map}},t.StaleWhileRevalidate=class{constructor(t={}){if(this.R=p(t.cacheName),this.X=t.plugins||[],t.plugins){const e=t.plugins.some(t=>!!t.cacheWillUpdate);this.X=e?t.plugins:[D,...t.plugins]}else this.X=[D];this.Z=t.fetchOptions,this.tt=t.matchOptions}async handle({event:t,request:e}){"string"==typeof e&&(e=new Request(e));const n=this.it({request:e,event:t});let i,r=await O({cacheName:this.R,request:e,event:t,matchOptions:this.tt,plugins:this.X});if(r){if(t)try{t.waitUntil(n)}catch(i){}}else try{r=await n}catch(t){i=t}if(!r)throw new s("no-response",{url:e.url,error:i});return r}async it({request:t,event:e}){const s=await T({request:t,event:e,fetchOptions:this.Z,plugins:this.X}),n=E({cacheName:this.R,request:t,response:s.clone(),event:e,plugins:this.X});if(e)try{e.waitUntil(n)}catch(t){}return s}},t.cleanupOutdatedCaches=function(){self.addEventListener("activate",t=>{const e=d();t.waitUntil((async(t,e="-precache-")=>{const s=(await self.caches.keys()).filter(s=>s.includes(e)&&s.includes(self.registration.scope)&&s!==t);return await Promise.all(s.map(t=>self.caches.delete(t))),s})(e).then(t=>{}))})},t.clientsClaim=function(){self.addEventListener("activate",()=>self.clients.claim())},t.initialize=(t={})=>{const e=y(t.cacheName),s=new X("workbox-google-analytics",{maxRetentionTime:2880,onSync:(n=t,async({queue:t})=>{let e;for(;e=await t.shiftRequest();){const{request:s,timestamp:i}=e,r=new URL(s.url);try{const t="POST"===s.method?new URLSearchParams(await s.clone().text()):r.searchParams,e=i-(Number(t.get("qt"))||0),a=Date.now()-e;if(t.set("qt",String(a)),n.parameterOverrides)for(const e of Object.keys(n.parameterOverrides)){const s=n.parameterOverrides[e];t.set(e,s)}"function"==typeof n.hitFilter&&n.hitFilter.call(null,t),await fetch(new Request(r.origin+r.pathname,{body:t.toString(),method:"POST",mode:"cors",credentials:"omit",headers:{"Content-Type":"text/plain"}}))}catch(s){throw await t.unshiftRequest(e),s}}})});var n;const i=[it(e),st(e),nt(e),...et(s)],r=new c;for(const t of i)r.registerRoute(t);r.addFetchListener()},t.precacheAndRoute=function(t,e){!function(t){j().addToCacheList(t),t.length>0&&(self.addEventListener("install",W),self.addEventListener("activate",H))}(t),I(e)},t.registerRoute=function(t,e,n){let a;if("string"==typeof t){const s=new URL(t,location.href);a=new i(({url:t})=>t.href===s.href,e,n)}else if(t instanceof RegExp)a=new r(t,e,n);else if("function"==typeof t)a=new i(t,e,n);else{if(!(t instanceof i))throw new s("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=t}return h().registerRoute(a),a},t.setCacheNameDetails=function(t){f(t)},t.skipWaiting=function(){self.addEventListener("install",()=>self.skipWaiting())}}));