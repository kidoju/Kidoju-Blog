/*! <%= pkg.copyright %> - Version <%= pkg.version %> dated <%= grunt.template.today() %> */!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://www.kidoju.com/support/build/",n(n.s=107)}({0:function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},105:function(e,t,n){var o,r,i;!function(n,a){"use strict";r=[],void 0===(i="function"==typeof(o=function(){var e=window.app;
/*!
     * modernizr v3.5.0
     * Build https://modernizr.com/download?-atobbtoa-audio-blobconstructor-bloburls-canvas-canvastext-csstransforms-datauri-filereader-flexbox-hashchange-history-inlinesvg-localstorage-sessionstorage-svg-svgasimg-touchevents-video-webworkers-setclasses-dontmin
     *
     * Copyright (c)
     *  Faruk Ates
     *  Paul Irish
     *  Alex Sexton
     *  Ryan Seddon
     *  Patrick Kettner
     *  Stu Cox
     *  Richard Herrera

     * MIT License
     */return function(e,t,n){var o=[],r=[],i={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){r.push({name:e,fn:t,options:n})},addAsyncTest:function(e){r.push({name:null,fn:e})}},a=function(){};function s(e,t){return typeof e===t}a.prototype=i,
/*!
         {
         "name": "Blob constructor",
         "property": "blobconstructor",
         "aliases": ["blob-constructor"],
         "builderAliases": ["blob_constructor"],
         "caniuse": "blobbuilder",
         "notes": [{
         "name": "W3C spec",
         "href": "https://w3c.github.io/FileAPI/#constructorBlob"
         }],
         "polyfills": ["blobjs"]
         }
         !*/
(a=new a).addTest("blobconstructor",function(){try{return!!new Blob}catch(e){return!1}},{aliases:["blob-constructor"]}),
/*!
         {
         "name": "History API",
         "property": "history",
         "caniuse": "history",
         "tags": ["history"],
         "authors": ["Hay Kranen", "Alexander Farkas"],
         "notes": [{
         "name": "W3C Spec",
         "href": "https://www.w3.org/TR/html51/browsers.html#the-history-interface"
         }, {
         "name": "MDN documentation",
         "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.history"
         }],
         "polyfills": ["historyjs", "html5historyapi"]
         }
         !*/
a.addTest("history",function(){var t=navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")||"file:"===location.protocol)&&e.history&&"pushState"in e.history}),
/*!
         {
         "name": "SVG",
         "property": "svg",
         "caniuse": "svg",
         "tags": ["svg"],
         "authors": ["Erik Dahlstrom"],
         "polyfills": [
         "svgweb",
         "raphael",
         "amplesdk",
         "canvg",
         "svg-boilerplate",
         "sie",
         "dojogfx",
         "fabricjs"
         ]
         }
         !*/
a.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),
/*!
         {
         "name": "File API",
         "property": "filereader",
         "caniuse": "fileapi",
         "notes": [{
         "name": "W3C Working Draft",
         "href": "https://www.w3.org/TR/FileAPI/"
         }],
         "tags": ["file"],
         "builderAliases": ["file_api"],
         "knownBugs": ["Will fail in Safari 5 due to its lack of support for the standards defined FileReader object"]
         }
         !*/
a.addTest("filereader",!!(e.File&&e.FileList&&e.FileReader)),
/*!
         {
         "name": "Local Storage",
         "property": "localstorage",
         "caniuse": "namevalue-storage",
         "tags": ["storage"],
         "knownBugs": [],
         "notes": [],
         "warnings": [],
         "polyfills": [
         "joshuabell-polyfill",
         "cupcake",
         "storagepolyfill",
         "amplifyjs",
         "yui-cacheoffline"
         ]
         }
         !*/
a.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}),
/*!
         {
         "name": "Session Storage",
         "property": "sessionstorage",
         "tags": ["storage"],
         "polyfills": ["joshuabell-polyfill", "cupcake", "sessionstorage"]
         }
         !*/
a.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(e){return!1}}),
/*!
         {
         "name": "Base 64 encoding/decoding",
         "property": ["atobbtoa"],
         "builderAliases": ["atob-btoa"],
         "caniuse" : "atob-btoa",
         "tags": ["atob", "base64", "WindowBase64", "btoa"],
         "authors": ["Christian Ulbrich"],
         "notes": [{
         "name": "WindowBase64",
         "href": "https://www.w3.org/TR/html5/webappapis.html#windowbase64"
         }, {
         "name": "MDN documentation",
         "href": "https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/atob"
         }],
         "polyfills": ["base64js"]
         }
         !*/
a.addTest("atobbtoa","atob"in e&&"btoa"in e,{aliases:["atob-btoa"]}),
/*!
         {
         "name": "Web Workers",
         "property": "webworkers",
         "caniuse" : "webworkers",
         "tags": ["performance", "workers"],
         "notes": [{
         "name": "W3C Reference",
         "href": "https://www.w3.org/TR/workers/"
         }, {
         "name": "HTML5 Rocks article",
         "href": "http://www.html5rocks.com/en/tutorials/workers/basics/"
         }, {
         "name": "MDN documentation",
         "href": "https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers"
         }],
         "polyfills": ["fakeworker", "html5shims"]
         }
         !*/
a.addTest("webworkers","Worker"in e);var u=t.documentElement,c="svg"===u.nodeName.toLowerCase();function l(e){var t=u.className,n=a._config.classPrefix||"";if(c&&(t=t.baseVal),a._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}a._config.enableClasses&&(t+=" "+n+e.join(" "+n),c?u.className.baseVal=t:u.className=t)}function d(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):c?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}
/*!
         {
         "name" : "HTML5 Audio Element",
         "property": "audio",
         "tags" : ["html5", "audio", "media"]
         }
         !*/a.addTest("audio",function(){var e=d("audio"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return t}),
/*!
         {
         "name": "Canvas",
         "property": "canvas",
         "caniuse": "canvas",
         "tags": ["canvas", "graphics"],
         "polyfills": ["flashcanvas", "excanvas", "slcanvas", "fxcanvas"]
         }
         !*/
a.addTest("canvas",function(){var e=d("canvas");return!(!e.getContext||!e.getContext("2d"))}),
/*!
         {
         "name": "Canvas text",
         "property": "canvastext",
         "caniuse": "canvas-text",
         "tags": ["canvas", "graphics"],
         "polyfills": ["canvastext"]
         }
         !*/
a.addTest("canvastext",function(){return!1!==a.canvas&&"function"==typeof d("canvas").getContext("2d").fillText}),
/*!
         {
         "name": "HTML5 Video",
         "property": "video",
         "caniuse": "video",
         "tags": ["html5"],
         "knownBugs": [
         "Without QuickTime, `Modernizr.video.h264` will be `undefined`; https://github.com/Modernizr/Modernizr/issues/546"
         ],
         "polyfills": [
         "html5media",
         "mediaelementjs",
         "sublimevideo",
         "videojs",
         "leanbackplayer",
         "videoforeverybody"
         ]
         }
         !*/
a.addTest("video",function(){var e=d("video"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(e){}return t}),
/*!
         {
         "name": "Inline SVG",
         "property": "inlinesvg",
         "caniuse": "svg-html5",
         "tags": ["svg"],
         "notes": [{
         "name": "Test page",
         "href": "https://paulirish.com/demo/inline-svg"
         }, {
         "name": "Test page and results",
         "href": "https://codepen.io/eltonmesquita/full/GgXbvo/"
         }],
         "polyfills": ["inline-svg-polyfill"],
         "knownBugs": ["False negative on some Chromia browsers."]
         }
         !*/
a.addTest("inlinesvg",function(){var e=d("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"===("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var f,p=(f=!("onblur"in t.documentElement),function(e,t){var o;return!!e&&(t&&"string"!=typeof t||(t=d(t||"div")),!(o=(e="on"+e)in t)&&f&&(t.setAttribute||(t=d("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),o)});i.hasEvent=p,
/*!
         {
         "name": "Hashchange event",
         "property": "hashchange",
         "caniuse": "hashchange",
         "tags": ["history"],
         "notes": [{
         "name": "MDN documentation",
         "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.onhashchange"
         }],
         "polyfills": [
         "jquery-hashchange",
         "moo-historymanager",
         "jquery-ajaxy",
         "hasher",
         "shistory"
         ]
         }
         !*/
a.addTest("hashchange",function(){return!1!==p("hashchange",e)&&(t.documentMode===n||t.documentMode>7)});var v,g,m=i._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];function h(e,t){if("object"==typeof e)for(var n in e)v(e,n)&&h(n,e[n]);else{var o=(e=e.toLowerCase()).split("."),r=a[o[0]];if(2===o.length&&(r=r[o[1]]),void 0!==r)return a;t="function"==typeof t?t():t,1===o.length?a[o[0]]=t:(!a[o[0]]||a[o[0]]instanceof Boolean||(a[o[0]]=new Boolean(a[o[0]])),a[o[0]][o[1]]=t),l([(t&&!1!==t?"":"no-")+o.join("-")]),a._trigger(e,t)}return a}function w(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function y(e,n,o,r){var i,a,s,l,f="modernizr",p=d("div"),v=function(){var e=t.body;return e||((e=d(c?"svg":"body")).fake=!0),e}();if(parseInt(o,10))for(;o--;)(s=d("div")).id=r?r[o]:f+(o+1),p.appendChild(s);return(i=d("style")).type="text/css",i.id="s"+f,(v.fake?v:p).appendChild(i),v.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),p.id=f,v.fake&&(v.style.background="",v.style.overflow="hidden",l=u.style.overflow,u.style.overflow="hidden",u.appendChild(v)),a=n(p,e),v.fake?(v.parentNode.removeChild(v),u.style.overflow=l,u.offsetHeight):p.parentNode.removeChild(p),!!a}i._prefixes=m,v=s(g={}.hasOwnProperty,"undefined")||s(g.call,"undefined")?function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")}:function(e,t){return g.call(e,t)},i._l={},i.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),a.hasOwnProperty(e)&&setTimeout(function(){a._trigger(e,a[e])},0)},i._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},a._q.push(function(){i.addTest=h}),
/*!
         {
         "name": "SVG as an <img> tag source",
         "property": "svgasimg",
         "caniuse" : "svg-img",
         "tags": ["svg"],
         "aliases": ["svgincss"],
         "authors": ["Chris Coyier"],
         "notes": [{
         "name": "HTML5 Spec",
         "href": "http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element"
         }]
         }
         !*/
a.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")),
/*!
         {
         "name": "Data URI",
         "property": "datauri",
         "caniuse": "datauri",
         "tags": ["url"],
         "builderAliases": ["url_data_uri"],
         "async": true,
         "notes": [{
         "name": "Wikipedia article",
         "href": "https://en.wikipedia.org/wiki/Data_URI_scheme"
         }],
         "warnings": ["Support in Internet Explorer 8 is limited to images and linked resources like CSS files, not HTML files"]
         }
         !*/
a.addAsyncTest(function(){-1!==navigator.userAgent.indexOf("MSIE 7.")&&setTimeout(function(){h("datauri",!1)},10);var e=new Image;e.onerror=function(){h("datauri",!1)},e.onload=function(){1===e.width&&1===e.height?h("datauri",!0):h("datauri",!1)},e.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="});var b=i.testStyles=y;
/*!
         {
         "name": "Touch Events",
         "property": "touchevents",
         "caniuse" : "touch",
         "tags": ["media", "attribute"],
         "notes": [{
         "name": "Touch Events spec",
         "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
         }],
         "warnings": [
         "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
         ],
         "knownBugs": [
         "False-positive on some configurations of Nokia N900",
         "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
         ]
         }
         !*/a.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)n=!0;else{var o=["@media (",m.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");b(o,function(e){n=9===e.offsetTop})}return n});var x=i._config.usePrefixes?"Moz O ms Webkit".split(" "):[];i._cssomPrefixes=x;var T=function(t){var o,r=m.length,i=e.CSSRule;if(void 0===i)return n;if(!t)return!1;if((o=(t=t.replace(/^@/,"")).replace(/-/g,"_").toUpperCase()+"_RULE")in i)return"@"+t;for(var a=0;a<r;a++){var s=m[a];if(s.toUpperCase()+"_"+o in i)return"@-"+s.toLowerCase()+"-"+t}return!1};i.atRule=T;var A=i._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];function S(e,t){return function(){return e.apply(t,arguments)}}i._domPrefixes=A;var C={elem:d("modernizr")};a._q.push(function(){delete C.elem});var P={style:C.elem.style};function _(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function j(t,o){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(_(t[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];r--;)i.push("("+_(t[r])+":"+o+")");return y("@supports ("+(i=i.join(" or "))+") { #modernizr { position: absolute; } }",function(t){return"absolute"===function(t,n,o){var r;if("getComputedStyle"in e){r=getComputedStyle.call(e,t,n);var i=e.console;null!==r?o&&(r=r.getPropertyValue(o)):i&&i[i.error?"error":"log"].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else r=!n&&t.currentStyle&&t.currentStyle[o];return r}(t,null,"position")})}return n}function E(e,t,o,r,i){var a=e.charAt(0).toUpperCase()+e.slice(1),u=(e+" "+x.join(a+" ")+a).split(" ");return s(t,"string")||s(t,"undefined")?function(e,t,o,r){if(r=!s(r,"undefined")&&r,!s(o,"undefined")){var i=j(e,o);if(!s(i,"undefined"))return i}for(var a,u,c,l,f,p=["modernizr","tspan","samp"];!P.style&&p.length;)a=!0,P.modElem=d(p.shift()),P.style=P.modElem.style;function v(){a&&(delete P.style,delete P.modElem)}for(c=e.length,u=0;u<c;u++)if(l=e[u],f=P.style[l],~(""+l).indexOf("-")&&(l=w(l)),P.style[l]!==n){if(r||s(o,"undefined"))return v(),"pfx"!==t||l;try{P.style[l]=o}catch(e){}if(P.style[l]!==f)return v(),"pfx"!==t||l}return v(),!1}(u,t,r,i):function(e,t,n){var o;for(var r in e)if(e[r]in t)return!1===n?e[r]:s(o=t[e[r]],"function")?S(o,n||t):o;return!1}(u=(e+" "+A.join(a+" ")+a).split(" "),t,o)}function O(e,t,o){return E(e,n,n,t,o)}a._q.unshift(function(){delete P.style}),i.testAllProps=E,i.testAllProps=O,
/*!
         {
         "name": "Flexbox",
         "property": "flexbox",
         "caniuse": "flexbox",
         "tags": ["css"],
         "notes": [{
         "name": "The _new_ flexbox",
         "href": "http://dev.w3.org/csswg/css3-flexbox"
         }],
         "warnings": [
         "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
         ]
         }
         !*/
a.addTest("flexbox",O("flexBasis","1px",!0)),
/*!
         {
         "name": "CSS Transforms",
         "property": "csstransforms",
         "caniuse": "transforms2d",
         "tags": ["css"]
         }
         !*/
a.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&O("transform","scale(1)",!0)});var k=(i.prefixed=function(e,t,n){return 0===e.indexOf("@")?T(e):(-1!==e.indexOf("-")&&(e=w(e)),t?E(e,t,n):E(e,"pfx"))})("URL",e,!1);
/*!
         {
         "name": "Blob URLs",
         "property": "bloburls",
         "caniuse": "bloburls",
         "notes": [{
         "name": "W3C Working Draft",
         "href": "https://www.w3.org/TR/FileAPI/#creating-revoking"
         }],
         "tags": ["file", "url"],
         "authors": ["Ron Waldon (@jokeyrhyme)"]
         }
         !*/k=k&&e[k],a.addTest("bloburls",k&&"revokeObjectURL"in k&&"createObjectURL"in k),function(){var e,t,n,i,u,c;for(var l in r)if(r.hasOwnProperty(l)){if(e=[],(t=r[l]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=s(t.fn,"function")?t.fn():t.fn,u=0;u<e.length;u++)1===(c=e[u].split(".")).length?a[c[0]]=i:(!a[c[0]]||a[c[0]]instanceof Boolean||(a[c[0]]=new Boolean(a[c[0]])),a[c[0]][c[1]]=i),o.push((i?"":"no-")+c.join("-"))}}(),l(o),delete i.addTest,delete i.addAsyncTest;for(var L=0;L<a._q.length;L++)a._q[L]();e.Modernizr=a}(window,document),e.support=window.Modernizr,window.app})?o.apply(t,r):o)||(e.exports=i)}(0,n(0))},106:function(e,t,n){var o,r,i;!function(n,a){"use strict";r=[],void 0===(i="function"==typeof(o=function(){return function(){var e=window.app=window.app||{},t=function(){return Array.prototype.slice.call(arguments).join("/").replace(/([^:])[\/]{2,}/g,"$1/")};function n(e){for(var t=0,n=e,o=/%[sdj]/;"string"==typeof n&&o.test(n);)n=n.replace(o,"{"+t+"}"),t++;return n}e.DEBUG="true"==="false".toLowerCase(),e.version="0.3.8",e.locales=JSON.parse('["en","fr"]'),e.constants={facebookAppId:"892459787527630",twitterAccount:"kidoju"},e.uris={cdn:{icons:t("https://cdn.kidoju.com",n("/images/o_collection/svg/office/%s.svg"))},webapp:{error:t("https://www.kidoju.com",n("/support/%s/error")),home:t("https://www.kidoju.com",n("/support/")),locale:t("https://www.kidoju.com",n("/support/%s")),logger:t("https://www.kidoju.com",n("/support/logger")),feed:t("https://www.kidoju.com",n("/support/%s/rss.xml")),sitemap:t("https://www.kidoju.com",n("/support/%s/sitemap.xml")),pages:t("https://www.kidoju.com",n("/support/%s/%s")),posts:t("https://www.kidoju.com",n("/support/%s/posts/%s/%s/%s"))}},e.logger=e.logger||{},e.logger.level=parseInt("2",10)||0,e.logger.endPoint=e.uris.webapp.logger}(),window.app})?o.apply(t,r):o)||(e.exports=i)}(0,n(0))},107:function(e,t,n){n(106),n(105),function(){"use strict";var e=window.document,t=window.navigator;if("standalone"in t&&t.standalone){var n=e.location,o=/^(a|html)$/i;e.addEventListener("click",function(e){for(var t=e.target;!o.test(t.nodeName);)t=t.parentNode;var r=t.href;"string"===$.type(r)&&r.length>1&&r!==n.href&&r.replace(n.protocol+"//"+n.host+n.pathname,"").length>1&&r.replace(n.protocol+"//"+n.host+n.pathname,"").indexOf("#")&&(!/^[a-z\+\.\-]+:/i.test(r)||0===r.indexOf(n.protocol+"//"+n.host))&&(e.preventDefault(),n.assign(r))},!1)}}(),function(){"use strict";var e=window.app,t=window.location,n=window.document.getElementsByTagName("html")[0].getAttribute("lang"),o=e.uris.webapp.error.replace("{0}",n),r=e.DEBUG&&navigator.userAgent.indexOf("PhantomJS")>=0,i=/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);if(!r&&!i&&t.href.substr(0,o.length)!==o){var a=e.support;a.atobbtoa&&a.audio&&(a.audio.mp3||a.audio.ogg)&&a.blobconstructor&&a.bloburls&&a.canvas&&a.canvastext&&a.csstransforms&&a.filereader&&a.flexbox&&a.hashchange&&a.history&&a.localstorage&&a.sessionstorage&&a.svg&&a.inlinesvg&&a.svgasimg&&a.video&&(a.video.h264||a.video.ogg||a.video.webm)&&a.webworkers||t.assign(o+"?code=1000")}}(),function(t){"use strict";var n=0,o=!1,r=function(e){for(var t=e.target;t!==document.body&&t!==document;){var o=window.getComputedStyle(t);if(!o)break;if("INPUT"===t.nodeName&&"range"===t.getAttribute("type"))return;var r=o.getPropertyValue("-webkit-overflow-scrolling"),i=o.getPropertyValue("overflow-y"),a=parseInt(o.getPropertyValue("height"),10),s="touch"===r&&("auto"===i||"scroll"===i),u=t.scrollHeight>t.offsetHeight;if(s&&u){var c=e.touches?e.touches[0].screenY:e.screenY,l=n<=c&&0===t.scrollTop,d=n>=c&&t.scrollHeight-t.scrollTop===a;return void((l||d)&&e.preventDefault())}t=t.parentNode}e.preventDefault()},i=function(e){n=e.touches?e.touches[0].screenY:e.screenY},a=function(){window.addEventListener("touchstart",i,!1),window.addEventListener("touchmove",r,!1),o=!0},s=document.createElement("div");document.documentElement.appendChild(s),s.style.WebkitOverflowScrolling="touch";var u="getComputedStyle"in window&&"touch"===window.getComputedStyle(s)["-webkit-overflow-scrolling"];document.documentElement.removeChild(s),u&&a();var c={enable:a,disable:function(){window.removeEventListener("touchstart",i,!1),window.removeEventListener("touchmove",r,!1),o=!1},isEnabled:function(){return o}};void 0!==e&&e.exports&&(e.exports=c),"function"==typeof t.define?(0,t.define)("iNoBounce",[],function(){return c}):t.iNoBounce=c}(this)}});