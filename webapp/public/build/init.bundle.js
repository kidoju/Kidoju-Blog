/*! Copyright ©2013-2017 Memba® Sarl. All rights reserved. - Version 0.3.4 dated Wed Aug 09 2017 16:44:56 */
!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://www.kidoju.com/support/build/",t(t.s=20)}({0:function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},20:function(e,t,n){n(21),n(22),function(){"use strict";var e=window.document,t=window.navigator;if("standalone"in t&&t.standalone){var n=e.location,o=/^(a|html)$/i;e.addEventListener("click",function(e){for(var t=e.target;!o.test(t.nodeName);)t=t.parentNode;var r=t.href;"string"===$.type(r)&&r.length>1&&r!==n.href&&r.replace(n.protocol+"//"+n.host+n.pathname,"").length>1&&r.replace(n.protocol+"//"+n.host+n.pathname,"").indexOf("#")&&(!/^[a-z\+\.\-]+:/i.test(r)||0===r.indexOf(n.protocol+"//"+n.host))&&(e.preventDefault(),n.assign(r))},!1)}}(),function(){"use strict";var e=window.app,t=window.location,n=window.document.getElementsByTagName("html")[0].getAttribute("lang"),o=e.uris.webapp.error.replace("{0}",n);if(!(e.DEBUG&&navigator.userAgent.indexOf("PhantomJS")>=0)&&t.href.substr(0,o.length)!==o){var r=e.support;r.atobbtoa&&r.audio&&(r.audio.mp3||r.audio.ogg)&&r.blobconstructor&&r.bloburls&&r.canvas&&r.canvastext&&r.csstransforms&&r.filereader&&r.flexbox&&r.hashchange&&r.history&&r.localstorage&&r.sessionstorage&&r.svg&&r.inlinesvg&&r.svgasimg&&r.video&&(r.video.h264||r.video.ogg||r.video.webm)&&r.webworkers||t.assign(o+"?code=1000")}}(),function(t){"use strict";var n=0,o=!1,r=function(e){for(var t=e.target;t!==document.body;){var o=window.getComputedStyle(t);if(!o)break;if("INPUT"===t.nodeName&&"range"===t.getAttribute("type"))return;var r=o.getPropertyValue("-webkit-overflow-scrolling"),i=o.getPropertyValue("overflow-y"),a=parseInt(o.getPropertyValue("height"),10),s="touch"===r&&("auto"===i||"scroll"===i),c=t.scrollHeight>t.offsetHeight;if(s&&c){var u=e.touches?e.touches[0].screenY:e.screenY,l=n<=u&&0===t.scrollTop,d=n>=u&&t.scrollHeight-t.scrollTop===a;return void((l||d)&&e.preventDefault())}t=t.parentNode}e.preventDefault()},i=function(e){n=e.touches?e.touches[0].screenY:e.screenY},a=function(){window.addEventListener("touchstart",i,!1),window.addEventListener("touchmove",r,!1),o=!0},s=function(){window.removeEventListener("touchstart",i,!1),window.removeEventListener("touchmove",r,!1),o=!1},c=function(){return o},u=document.createElement("div");document.documentElement.appendChild(u),u.style.WebkitOverflowScrolling="touch";var l="getComputedStyle"in window&&"touch"===window.getComputedStyle(u)["-webkit-overflow-scrolling"];document.documentElement.removeChild(u),l&&a();var d={enable:a,disable:s,isEnabled:c};void 0!==e&&e.exports&&(e.exports=d),"function"==typeof t.define?function(e){e("iNoBounce",[],function(){return d})}(t.define):t.iNoBounce=d}(this)},21:function(e,t,n){var o,r,i;!function(n,a){"use strict";r=[],o=n,void 0!==(i="function"==typeof o?o.apply(t,r):o)&&(e.exports=i)}(function(){"use strict";return function(){function e(e){for(var t=0,n=e,o=/%[sdj]/;"string"==typeof n&&o.test(n);)n=n.replace(o,"{"+t+"}"),t++;return n}var t=window.app=window.app||{},n={join:function(){return Array.prototype.slice.call(arguments).join("/").replace(/([^:])[\/]{2,}/g,"$1/")}};t.DEBUG="true"==="false".toLowerCase(),t.version="0.3.4",t.locales=JSON.parse('["en","fr"]'),t.facebook={clientID:"892459787527630"},t.twitter={account:"kidoju"},t.uris={cdn:{icons:n.join("https://cdn.kidoju.com",e("/images/o_collection/svg/office/%s.svg"))},webapp:{error:n.join("https://www.kidoju.com",e("/support/%s/error")),home:n.join("https://www.kidoju.com",e("/support/")),locale:n.join("https://www.kidoju.com",e("/support/%s")),logger:n.join("https://www.kidoju.com",e("/support/logger")),feed:n.join("https://www.kidoju.com",e("/support/%s/rss.xml")),sitemap:n.join("https://www.kidoju.com",e("/support/%s/sitemap.xml")),pages:n.join("https://www.kidoju.com",e("/support/%s/%s")),posts:n.join("https://www.kidoju.com",e("/support/%s/posts/%s/%s/%s"))}},t.logger=t.logger||{},t.logger.level=parseInt("2",10)||0,t.logger.endPoint=t.uris.webapp.logger}(),window.app},n(0))},22:function(e,t,n){var o,r,i;!function(n,a){"use strict";r=[],o=n,void 0!==(i="function"==typeof o?o.apply(t,r):o)&&(e.exports=i)}(function(){"use strict";var e=window.app;return function(e,t,n){function o(e,t){return typeof e===t}function r(e){var t=C.className,n=T._config.classPrefix||"";if(A&&(t=t.baseVal),T._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}T._config.enableClasses&&(t+=" "+n+e.join(" "+n),A?C.className.baseVal=t:C.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):A?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,t){if("object"==typeof e)for(var n in e)P(e,n)&&a(n,e[n]);else{e=e.toLowerCase();var o=e.split("."),i=T[o[0]];if(2===o.length&&(i=i[o[1]]),void 0!==i)return T;t="function"==typeof t?t():t,1===o.length?T[o[0]]=t:(!T[o[0]]||T[o[0]]instanceof Boolean||(T[o[0]]=new Boolean(T[o[0]])),T[o[0]][o[1]]=t),r([(t&&!1!==t?"":"no-")+o.join("-")]),T._trigger(e,t)}return T}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(){var e=t.body;return e||(e=i(A?"svg":"body"),e.fake=!0),e}function u(e,n,o,r){var a,s,u,l,d="modernizr",f=i("div"),p=c();if(parseInt(o,10))for(;o--;)u=i("div"),u.id=r?r[o]:d+(o+1),f.appendChild(u);return a=i("style"),a.type="text/css",a.id="s"+d,(p.fake?p:f).appendChild(a),p.appendChild(f),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),f.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",l=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),s=n(f,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=l,C.offsetHeight):f.parentNode.removeChild(f),!!s}function l(e,t){return!!~(""+e).indexOf(t)}function d(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var r;for(var i in e)if(e[i]in t)return!1===n?e[i]:(r=t[e[i]],o(r,"function")?d(r,n||t):r);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function v(t,n,o){var r;if("getComputedStyle"in e){r=getComputedStyle.call(e,t,n);var i=e.console;if(null!==r)o&&(r=r.getPropertyValue(o));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else r=!n&&t.currentStyle&&t.currentStyle[o];return r}function g(t,o){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(p(t[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];r--;)i.push("("+p(t[r])+":"+o+")");return i=i.join(" or "),u("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"===v(e,null,"position")})}return n}function h(e,t,r,a){function c(){d&&(delete z.style,delete z.modElem)}if(a=!o(a,"undefined")&&a,!o(r,"undefined")){var u=g(e,r);if(!o(u,"undefined"))return u}for(var d,f,p,v,h,m=["modernizr","tspan","samp"];!z.style&&m.length;)d=!0,z.modElem=i(m.shift()),z.style=z.modElem.style;for(p=e.length,f=0;f<p;f++)if(v=e[f],h=z.style[v],l(v,"-")&&(v=s(v)),z.style[v]!==n){if(a||o(r,"undefined"))return c(),"pfx"!==t||v;try{z.style[v]=r}catch(e){}if(z.style[v]!==h)return c(),"pfx"!==t||v}return c(),!1}function m(e,t,n,r,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+k.join(a+" ")+a).split(" ");return o(t,"string")||o(t,"undefined")?h(s,t,r,i):(s=(e+" "+L.join(a+" ")+a).split(" "),f(s,t,n))}function w(e,t,o){return m(e,n,n,t,o)}var y=[],b=[],x={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},T=function(){};T.prototype=x,T=new T,T.addTest("blobconstructor",function(){try{return!!new Blob}catch(e){return!1}},{aliases:["blob-constructor"]}),T.addTest("history",function(){var t=navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")||"file:"===location.protocol)&&(e.history&&"pushState"in e.history)}),T.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),T.addTest("filereader",!!(e.File&&e.FileList&&e.FileReader)),T.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}),T.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(e){return!1}}),T.addTest("atobbtoa","atob"in e&&"btoa"in e,{aliases:["atob-btoa"]}),T.addTest("webworkers","Worker"in e);var C=t.documentElement,A="svg"===C.nodeName.toLowerCase();T.addTest("audio",function(){var e=i("audio"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return t}),T.addTest("canvas",function(){var e=i("canvas");return!(!e.getContext||!e.getContext("2d"))}),T.addTest("canvastext",function(){return!1!==T.canvas&&"function"==typeof i("canvas").getContext("2d").fillText}),T.addTest("video",function(){var e=i("video"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(e){}return t}),T.addTest("inlinesvg",function(){var e=i("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"===("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var S=function(){function e(e,t){var r;return!!e&&(t&&"string"!=typeof t||(t=i(t||"div")),e="on"+e,r=e in t,!r&&o&&(t.setAttribute||(t=i("div")),t.setAttribute(e,""),r="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),r)}var o=!("onblur"in t.documentElement);return e}();x.hasEvent=S,T.addTest("hashchange",function(){return!1!==S("hashchange",e)&&(t.documentMode===n||t.documentMode>7)});var j=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=j;var P;!function(){var e={}.hasOwnProperty;P=o(e,"undefined")||o(e.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),x._l={},x.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),T.hasOwnProperty(e)&&setTimeout(function(){T._trigger(e,T[e])},0)},x._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},T._q.push(function(){x.addTest=a}),T.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")),T.addAsyncTest(function(){-1!==navigator.userAgent.indexOf("MSIE 7.")&&setTimeout(function(){a("datauri",!1)},10);var e=new Image;e.onerror=function(){a("datauri",!1)},e.onload=function(){1===e.width&&1===e.height?a("datauri",!0):a("datauri",!1)},e.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="});var _=x.testStyles=u;T.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)n=!0;else{var o=["@media (",j.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");_(o,function(e){n=9===e.offsetTop})}return n});var E="Moz O ms Webkit",k=x._config.usePrefixes?E.split(" "):[];x._cssomPrefixes=k;var O=function(t){var o,r=j.length,i=e.CSSRule;if(void 0===i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),(o=t.replace(/-/g,"_").toUpperCase()+"_RULE")in i)return"@"+t;for(var a=0;a<r;a++){var s=j[a];if(s.toUpperCase()+"_"+o in i)return"@-"+s.toLowerCase()+"-"+t}return!1};x.atRule=O;var L=x._config.usePrefixes?E.toLowerCase().split(" "):[];x._domPrefixes=L;var N={elem:i("modernizr")};T._q.push(function(){delete N.elem});var z={style:N.elem.style};T._q.unshift(function(){delete z.style}),x.testAllProps=m,x.testAllProps=w,T.addTest("flexbox",w("flexBasis","1px",!0)),T.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&w("transform","scale(1)",!0)});var $=x.prefixed=function(e,t,n){return 0===e.indexOf("@")?O(e):(-1!==e.indexOf("-")&&(e=s(e)),t?m(e,t,n):m(e,"pfx"))},B=$("URL",e,!1);B=B&&e[B],T.addTest("bloburls",B&&"revokeObjectURL"in B&&"createObjectURL"in B),function(){var e,t,n,r,i,a,s;for(var c in b)if(b.hasOwnProperty(c)){if(e=[],t=b[c],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?T[s[0]]=r:(!T[s[0]]||T[s[0]]instanceof Boolean||(T[s[0]]=new Boolean(T[s[0]])),T[s[0]][s[1]]=r),y.push((r?"":"no-")+s.join("-"))}}(),r(y),delete x.addTest,delete x.addAsyncTest;for(var R=0;R<T._q.length;R++)T._q[R]();e.Modernizr=T}(window,document),e.support=window.Modernizr,window.app},n(0))}});
//# sourceMappingURL=init.bundle.js.map?v=0.3.4