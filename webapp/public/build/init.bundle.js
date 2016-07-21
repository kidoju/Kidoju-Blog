/*! Copyright ©2013-2016 Memba® Sarl. All rights reserved. - Version 0.2.23 dated 7/21/2016 */
/*! Copyright ©2013-2016 Memba® Sarl. All rights reserved. - Version 0.2.23 dated 7/21/2016 */
!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="https://www.kidoju.com/support/build/",t(0)}({0:function(e,t,n){n(506),n(507)},185:function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},506:function(e,t,n){var o,r,i;!function(n,a){"use strict";r=[],o=n,i="function"==typeof o?o.apply(t,r):o,!(void 0!==i&&(e.exports=i))}(function(){"use strict";return function(){function e(e){for(var t=0,n=e,o=/%[sdj]/;"string"==typeof n&&o.test(n);)n=n.replace(o,"{"+t+"}"),t++;return n}var t=window.app=window.app||{},n={join:function(){return Array.prototype.slice.call(arguments).join("/").replace(/([^:])[\/]{2,}/g,"$1/")}};t.DEBUG="true"==="false".toLowerCase(),t.version="0.2.23",t.locales=JSON.parse('["en","fr"]'),t.facebook={clientID:"892459787527630"},t.twitter={account:"kidoju"},t.uris={cdn:{icons:n.join("https://cdn.kidoju.com",e("/images/o_collection/svg/office/%s.svg"))},webapp:{home:n.join("https://www.kidoju.com",e("/support/")),locale:n.join("https://www.kidoju.com",e("/support/%s")),logger:n.join("https://www.kidoju.com",e("/support/logger")),feed:n.join("https://www.kidoju.com",e("/support/%s/rss.xml")),sitemap:n.join("https://www.kidoju.com",e("/support/%s/sitemap.xml")),pages:n.join("https://www.kidoju.com",e("/support/%s/%s")),posts:n.join("https://www.kidoju.com",e("/support/%s/posts/%s/%s/%s"))}},t.logger=t.logger||{},t.logger.level=parseInt("0",10)||0,t.logger.endPoint=t.uris.webapp.logger}(),window.app},n(185))},507:function(e,t,n){var o,r,i;!function(n,a){"use strict";r=[],o=n,i="function"==typeof o?o.apply(t,r):o,!(void 0!==i&&(e.exports=i))}(function(){"use strict";var e=window.app;return function(e,t,n){function o(e,t){return typeof e===t}function r(){var e,t,n,r,i,a,s;for(var u in A)if(A.hasOwnProperty(u)){if(e=[],t=A[u],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?T[s[0]]=r:(!T[s[0]]||T[s[0]]instanceof Boolean||(T[s[0]]=new Boolean(T[s[0]])),T[s[0]][s[1]]=r),y.push((r?"":"no-")+s.join("-"))}}function i(e){var t=x.className,n=T._config.classPrefix||"";if(C&&(t=t.baseVal),T._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}T._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?x.className.baseVal=t:x.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e,t){if("object"==typeof e)for(var n in e)S(e,n)&&s(n,e[n]);else{e=e.toLowerCase();var o=e.split("."),r=T[o[0]];if(2===o.length&&(r=r[o[1]]),"undefined"!=typeof r)return T;t="function"==typeof t?t():t,1===o.length?T[o[0]]=t:(!T[o[0]]||T[o[0]]instanceof Boolean||(T[o[0]]=new Boolean(T[o[0]])),T[o[0]][o[1]]=t),i([(t&&t!==!1?"":"no-")+o.join("-")]),T._trigger(e,t)}return T}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(){var e=t.body;return e||(e=a(C?"svg":"body"),e.fake=!0),e}function l(e,n,o,r){var i,s,u,l,d="modernizr",f=a("div"),p=c();if(parseInt(o,10))for(;o--;)u=a("div"),u.id=r?r[o]:d+(o+1),f.appendChild(u);return i=a("style"),i.type="text/css",i.id="s"+d,(p.fake?p:f).appendChild(i),p.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),f.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",l=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),s=n(f,e),p.fake?(p.parentNode.removeChild(p),x.style.overflow=l,x.offsetHeight):f.parentNode.removeChild(f),!!s}function d(e,t){return!!~(""+e).indexOf(t)}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var r;for(var i in e)if(e[i]in t)return n===!1?e[i]:(r=t[e[i]],o(r,"function")?f(r,n||t):r);return!1}function v(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function g(t,o){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(v(t[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];r--;)i.push("("+v(t[r])+":"+o+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"===getComputedStyle(e,null).position})}return n}function w(e,t,r,i){function s(){l&&(delete z.style,delete z.modElem)}if(i=o(i,"undefined")?!1:i,!o(r,"undefined")){var c=g(e,r);if(!o(c,"undefined"))return c}for(var l,f,p,v,w,h=["modernizr","tspan","samp"];!z.style&&h.length;)l=!0,z.modElem=a(h.shift()),z.style=z.modElem.style;for(p=e.length,f=0;p>f;f++)if(v=e[f],w=z.style[v],d(v,"-")&&(v=u(v)),z.style[v]!==n){if(i||o(r,"undefined"))return s(),"pfx"===t?v:!0;try{z.style[v]=r}catch(m){}if(z.style[v]!==w)return s(),"pfx"===t?v:!0}return s(),!1}function h(e,t,n,r,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+E.join(a+" ")+a).split(" ");return o(t,"string")||o(t,"undefined")?w(s,t,r,i):(s=(e+" "+R.join(a+" ")+a).split(" "),p(s,t,n))}function m(e,t,o){return h(e,n,n,t,o)}var y=[],A=[],b={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){A.push({name:e,fn:t,options:n})},addAsyncTest:function(e){A.push({name:null,fn:e})}},T=function(){};T.prototype=b,T=new T,T.addTest("blobconstructor",function(){try{return!!new Blob}catch(e){return!1}},{aliases:["blob-constructor"]}),T.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")?e.history&&"pushState"in e.history:!1}),T.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),T.addTest("filereader",!!(e.File&&e.FileList&&e.FileReader)),T.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),T.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),T.addTest("atobbtoa","atob"in e&&"btoa"in e,{aliases:["atob-btoa"]}),T.addTest("webworkers","Worker"in e);var x=t.documentElement,C="svg"===x.nodeName.toLowerCase();/*!
	         {
	         "name" : "HTML5 Audio Element",
	         "property": "audio",
	         "tags" : ["html5", "audio", "media"]
	         }
	         !*/
T.addTest("audio",function(){var e=a("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),/*!
	         {
	         "name": "Canvas",
	         "property": "canvas",
	         "caniuse": "canvas",
	         "tags": ["canvas", "graphics"],
	         "polyfills": ["flashcanvas", "excanvas", "slcanvas", "fxcanvas"]
	         }
	         !*/
T.addTest("canvas",function(){var e=a("canvas");return!(!e.getContext||!e.getContext("2d"))}),/*!
	         {
	         "name": "Canvas text",
	         "property": "canvastext",
	         "caniuse": "canvas-text",
	         "tags": ["canvas", "graphics"],
	         "polyfills": ["canvastext"]
	         }
	         !*/
T.addTest("canvastext",function(){return T.canvas===!1?!1:"function"==typeof a("canvas").getContext("2d").fillText}),/*!
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
T.addTest("video",function(){var e=a("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),/*!
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
T.addTest("inlinesvg",function(){var e=a("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"===("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var j=function(){function e(e,t){var r;return e?(t&&"string"!=typeof t||(t=a(t||"div")),e="on"+e,r=e in t,!r&&o&&(t.setAttribute||(t=a("div")),t.setAttribute(e,""),r="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),r):!1}var o=!("onblur"in t.documentElement);return e}();b.hasEvent=j,/*!
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
T.addTest("hashchange",function(){return j("hashchange",e)===!1?!1:t.documentMode===n||t.documentMode>7});var P=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=P;var S;!function(){var e={}.hasOwnProperty;S=o(e,"undefined")||o(e.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),b._l={},b.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),T.hasOwnProperty(e)&&setTimeout(function(){T._trigger(e,T[e])},0)},b._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,o;for(e=0;e<n.length;e++)(o=n[e])(t)},0),delete this._l[e]}},T._q.push(function(){b.addTest=s}),/*!
	         {
	         "name": "SVG as an <img> tag source",
	         "property": "svgasimg",
	         "caniuse" : "svg-img",
	         "tags": ["svg"],
	         "authors": ["Chris Coyier"],
	         "notes": [{
	         "name": "HTML5 Spec",
	         "href": "http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element"
	         }]
	         }
	         !*/
T.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")),/*!
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
T.addAsyncTest(function(){function e(){var e=new Image;e.onerror=function(){s("datauri",!0),T.datauri=new Boolean(!0),T.datauri.over32kb=!1},e.onload=function(){s("datauri",!0),T.datauri=new Boolean(!0),T.datauri.over32kb=1===e.width&&1===e.height};for(var t="R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";t.length<33e3;)t="\r\n"+t;e.src="data:image/gif;base64,"+t}-1!==navigator.userAgent.indexOf("MSIE 7.")&&setTimeout(function(){s("datauri",!1)},10);var t=new Image;t.onerror=function(){s("datauri",!1)},t.onload=function(){1===t.width&&1===t.height?e():s("datauri",!1)},t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="});var _=b.testStyles=l;/*!
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
	         !*/
T.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)n=!0;else{var o=["@media (",P.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");_(o,function(e){n=9===e.offsetTop})}return n});var k="Moz O ms Webkit",E=b._config.usePrefixes?k.split(" "):[];b._cssomPrefixes=E;var O=function(t){var o,r=P.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),o=t.replace(/-/g,"_").toUpperCase()+"_RULE",o in i)return"@"+t;for(var a=0;r>a;a++){var s=P[a],u=s.toUpperCase()+"_"+o;if(u in i)return"@-"+s.toLowerCase()+"-"+t}return!1};b.atRule=O;var R=b._config.usePrefixes?k.toLowerCase().split(" "):[];b._domPrefixes=R;var L={elem:a("modernizr")};T._q.push(function(){delete L.elem});var z={style:L.elem.style};T._q.unshift(function(){delete z.style}),b.testAllProps=h,b.testAllProps=m,/*!
	         {
	         "name": "CSS Transforms",
	         "property": "csstransforms",
	         "caniuse": "transforms2d",
	         "tags": ["css"]
	         }
	         !*/
T.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&m("transform","scale(1)",!0)});var B=b.prefixed=function(e,t,n){return 0===e.indexOf("@")?O(e):(-1!==e.indexOf("-")&&(e=u(e)),t?h(e,t,n):h(e,"pfx"))},I=B("URL",e,!1);I=I&&e[I],T.addTest("bloburls",I&&"revokeObjectURL"in I&&"createObjectURL"in I),r(),i(y),delete b.addTest,delete b.addAsyncTest;for(var $=0;$<T._q.length;$++)T._q[$]();e.Modernizr=T}(window,document),e.support=window.Modernizr,window.app},n(185))}});
//# sourceMappingURL=init.bundle.js.map?v=0.2.23