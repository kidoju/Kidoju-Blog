!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://www.kidoju.com/support/build/",t(t.s=133)}({0:function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},133:function(e,t,n){n(59),n(52),function(){"use strict";var e=window.document,t=window.navigator,n="standalone";if(n in t&&t[n]){var o=e.location,r=/^(a|html)$/i,i="string";e.addEventListener("click",function(e){for(var t=e.target;!r.test(t.nodeName);)t=t.parentNode;var n=t.href;$.type(n)===i&&n.length>1&&n!==o.href&&n.replace(o.protocol+"//"+o.host+o.pathname,"").length>1&&n.replace(o.protocol+"//"+o.host+o.pathname,"").indexOf("#")&&(!/^[a-z\+\.\-]+:/i.test(n)||0===n.indexOf(o.protocol+"//"+o.host))&&(e.preventDefault(),o.assign(n))},!1)}}(),function(){"use strict";var e=window.app,t=window.location,n=window.document.getElementsByTagName("html")[0].getAttribute("lang"),o=e.uris.webapp.error.replace("{0}",n),r=e.DEBUG&&navigator.userAgent.indexOf("PhantomJS")>=0;if(!r&&t.href.substr(0,o.length)!==o){var i=e.support,a=i.atobbtoa&&i.audio&&(i.audio.mp3||i.audio.ogg)&&i.blobconstructor&&i.bloburls&&i.canvas&&i.canvastext&&i.csstransforms&&i.filereader&&i.flexbox&&i.hashchange&&i.history&&i.localstorage&&i.sessionstorage&&i.svg&&i.inlinesvg&&i.svgasimg&&i.video&&(i.video.h264||i.video.ogg||i.video.webm)&&i.webworkers;a||t.assign(o+"?code=1000")}}(),function(t){"use strict";var n=0,o=!1,r=function(e){for(var t=e.target;t!==document.body;){var o=window.getComputedStyle(t);if(!o)break;if("INPUT"===t.nodeName&&"range"===t.getAttribute("type"))return;var r=o.getPropertyValue("-webkit-overflow-scrolling"),i=o.getPropertyValue("overflow-y"),a=parseInt(o.getPropertyValue("height"),10),s="touch"===r&&("auto"===i||"scroll"===i),u=t.scrollHeight>t.offsetHeight;if(s&&u){var c=e.touches?e.touches[0].screenY:e.screenY,l=n<=c&&0===t.scrollTop,d=n>=c&&t.scrollHeight-t.scrollTop===a;return void((l||d)&&e.preventDefault())}t=t.parentNode}e.preventDefault()},i=function(e){n=e.touches?e.touches[0].screenY:e.screenY},a=function(){window.addEventListener("touchstart",i,!1),window.addEventListener("touchmove",r,!1),o=!0},s=function(){window.removeEventListener("touchstart",i,!1),window.removeEventListener("touchmove",r,!1),o=!1},u=function(){return o},c=document.createElement("div");document.documentElement.appendChild(c),c.style.WebkitOverflowScrolling="touch";var l="getComputedStyle"in window&&"touch"===window.getComputedStyle(c)["-webkit-overflow-scrolling"];document.documentElement.removeChild(c),l&&a();var d={enable:a,disable:s,isEnabled:u};"undefined"!=typeof e&&e.exports&&(e.exports=d),"function"==typeof t.define?!function(e){e("iNoBounce",[],function(){return d})}(t.define):t.iNoBounce=d}(this)},52:function(e,t,n){var o,r,i;!function(n,a){"use strict";r=[],o=n,i="function"==typeof o?o.apply(t,r):o,!(void 0!==i&&(e.exports=i))}(function(){"use strict";var e=window.app;return function(e,t,n){function o(e,t){return typeof e===t}function r(){var e,t,n,r,i,a,s;for(var u in b)if(b.hasOwnProperty(u)){if(e=[],t=b[u],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?x[s[0]]=r:(!x[s[0]]||x[s[0]]instanceof Boolean||(x[s[0]]=new Boolean(x[s[0]])),x[s[0]][s[1]]=r),y.push((r?"":"no-")+s.join("-"))}}function i(e){var t=T.className,n=x._config.classPrefix||"";if(C&&(t=t.baseVal),x._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}x._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?T.className.baseVal=t:T.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e,t){if("object"==typeof e)for(var n in e)S(e,n)&&s(n,e[n]);else{e=e.toLowerCase();var o=e.split("."),r=x[o[0]];if(2===o.length&&(r=r[o[1]]),"undefined"!=typeof r)return x;t="function"==typeof t?t():t,1===o.length?x[o[0]]=t:(!x[o[0]]||x[o[0]]instanceof Boolean||(x[o[0]]=new Boolean(x[o[0]])),x[o[0]][o[1]]=t),i([(t&&t!==!1?"":"no-")+o.join("-")]),x._trigger(e,t)}return x}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(){var e=t.body;return e||(e=a(C?"svg":"body"),e.fake=!0),e}function l(e,n,o,r){var i,s,u,l,d="modernizr",f=a("div"),p=c();if(parseInt(o,10))for(;o--;)u=a("div"),u.id=r?r[o]:d+(o+1),f.appendChild(u);return i=a("style"),i.type="text/css",i.id="s"+d,(p.fake?p:f).appendChild(i),p.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),f.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",l=T.style.overflow,T.style.overflow="hidden",T.appendChild(p)),s=n(f,e),p.fake?(p.parentNode.removeChild(p),T.style.overflow=l,T.offsetHeight):f.parentNode.removeChild(f),!!s}function d(e,t){return!!~(""+e).indexOf(t)}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var r;for(var i in e)if(e[i]in t)return n===!1?e[i]:(r=t[e[i]],o(r,"function")?f(r,n||t):r);return!1}function v(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function g(t,o){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(v(t[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];r--;)i.push("("+v(t[r])+":"+o+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"===getComputedStyle(e,null).position})}return n}function h(e,t,r,i){function s(){l&&(delete N.style,delete N.modElem)}if(i=!o(i,"undefined")&&i,!o(r,"undefined")){var c=g(e,r);if(!o(c,"undefined"))return c}for(var l,f,p,v,h,w=["modernizr","tspan","samp"];!N.style&&w.length;)l=!0,N.modElem=a(w.shift()),N.style=N.modElem.style;for(p=e.length,f=0;f<p;f++)if(v=e[f],h=N.style[v],d(v,"-")&&(v=u(v)),N.style[v]!==n){if(i||o(r,"undefined"))return s(),"pfx"!==t||v;try{N.style[v]=r}catch(e){}if(N.style[v]!==h)return s(),"pfx"!==t||v}return s(),!1}function w(e,t,n,r,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+k.join(a+" ")+a).split(" ");return o(t,"string")||o(t,"undefined")?h(s,t,r,i):(s=(e+" "+L.join(a+" ")+a).split(" "),p(s,t,n))}function m(e,t,o){return w(e,n,n,t,o)}var y=[],b=[],A={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},x=function(){};x.prototype=A,x=new x,x.addTest("blobconstructor",function(){try{return!!new Blob}catch(e){return!1}},{aliases:["blob-constructor"]}),x.addTest("history",function(){var t=navigator.userAgent;return(t.indexOf("Android 2.")===-1&&t.indexOf("Android 4.0")===-1||t.indexOf("Mobile Safari")===-1||t.indexOf("Chrome")!==-1||t.indexOf("Windows Phone")!==-1)&&(e.history&&"pushState"in e.history)}),x.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),x.addTest("filereader",!!(e.File&&e.FileList&&e.FileReader)),x.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}),x.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(e){return!1}}),x.addTest("atobbtoa","atob"in e&&"btoa"in e,{aliases:["atob-btoa"]}),x.addTest("webworkers","Worker"in e);var T=t.documentElement,C="svg"===T.nodeName.toLowerCase();x.addTest("audio",function(){var e=a("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return t}),x.addTest("canvas",function(){var e=a("canvas");return!(!e.getContext||!e.getContext("2d"))}),x.addTest("canvastext",function(){return x.canvas!==!1&&"function"==typeof a("canvas").getContext("2d").fillText}),x.addTest("video",function(){var e=a("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(e){}return t}),x.addTest("inlinesvg",function(){var e=a("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"===("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var j=function(){function e(e,t){var r;return!!e&&(t&&"string"!=typeof t||(t=a(t||"div")),e="on"+e,r=e in t,!r&&o&&(t.setAttribute||(t=a("div")),t.setAttribute(e,""),r="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),r)}var o=!("onblur"in t.documentElement);return e}();A.hasEvent=j,x.addTest("hashchange",function(){return j("hashchange",e)!==!1&&(t.documentMode===n||t.documentMode>7)});var P=A._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];A._prefixes=P;var S;!function(){var e={}.hasOwnProperty;S=o(e,"undefined")||o(e.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),A._l={},A.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),x.hasOwnProperty(e)&&setTimeout(function(){x._trigger(e,x[e])},0)},A._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,o;for(e=0;e<n.length;e++)(o=n[e])(t)},0),delete this._l[e]}},x._q.push(function(){A.addTest=s}),x.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")),x.addAsyncTest(function(){function e(){var e=new Image;e.onerror=function(){s("datauri",!0),x.datauri=new Boolean(!0),x.datauri.over32kb=!1},e.onload=function(){s("datauri",!0),x.datauri=new Boolean(!0),x.datauri.over32kb=1===e.width&&1===e.height};for(var t="R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";t.length<33e3;)t="\r\n"+t;e.src="data:image/gif;base64,"+t}navigator.userAgent.indexOf("MSIE 7.")!==-1&&setTimeout(function(){s("datauri",!1)},10);var t=new Image;t.onerror=function(){s("datauri",!1)},t.onload=function(){1===t.width&&1===t.height?e():s("datauri",!1)},t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="});var _=A.testStyles=l;x.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)n=!0;else{var o=["@media (",P.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");_(o,function(e){n=9===e.offsetTop})}return n});var E="Moz O ms Webkit",k=A._config.usePrefixes?E.split(" "):[];A._cssomPrefixes=k;var O=function(t){var o,r=P.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),o=t.replace(/-/g,"_").toUpperCase()+"_RULE",o in i)return"@"+t;for(var a=0;a<r;a++){var s=P[a],u=s.toUpperCase()+"_"+o;if(u in i)return"@-"+s.toLowerCase()+"-"+t}return!1};A.atRule=O;var L=A._config.usePrefixes?E.toLowerCase().split(" "):[];A._domPrefixes=L;var B={elem:a("modernizr")};x._q.push(function(){delete B.elem});var N={style:B.elem.style};x._q.unshift(function(){delete N.style}),A.testAllProps=w,A.testAllProps=m,x.addTest("flexbox",m("flexBasis","1px",!0)),x.addTest("csstransforms",function(){return navigator.userAgent.indexOf("Android 2.")===-1&&m("transform","scale(1)",!0)});var I=A.prefixed=function(e,t,n){return 0===e.indexOf("@")?O(e):(e.indexOf("-")!==-1&&(e=u(e)),t?w(e,t,n):w(e,"pfx"))},R=I("URL",e,!1);R=R&&e[R],x.addTest("bloburls",R&&"revokeObjectURL"in R&&"createObjectURL"in R),r(),i(y),delete A.addTest,delete A.addAsyncTest;for(var $=0;$<x._q.length;$++)x._q[$]();e.Modernizr=x}(window,document),e.support=window.Modernizr,window.app},n(0))},59:function(e,t,n){var o,r,i;!function(n,a){"use strict";r=[],o=n,i="function"==typeof o?o.apply(t,r):o,!(void 0!==i&&(e.exports=i))}(function(){"use strict";return function(){function e(e){for(var t=0,n=e,o=/%[sdj]/;"string"==typeof n&&o.test(n);)n=n.replace(o,"{"+t+"}"),t++;return n}var t=window.app=window.app||{},n={join:function(){return Array.prototype.slice.call(arguments).join("/").replace(/([^:])[\/]{2,}/g,"$1/")}};t.DEBUG="true"==="false".toLowerCase(),t.version="0.2.87",t.locales=JSON.parse('["en","fr"]'),t.facebook={clientID:"892459787527630"},t.twitter={account:"kidoju"},t.uris={cdn:{icons:n.join("https://cdn.kidoju.com",e("/images/o_collection/svg/office/%s.svg"))},webapp:{error:n.join("https://www.kidoju.com",e("/support/%s/error")),home:n.join("https://www.kidoju.com",e("/support/")),locale:n.join("https://www.kidoju.com",e("/support/%s")),logger:n.join("https://www.kidoju.com",e("/support/logger")),feed:n.join("https://www.kidoju.com",e("/support/%s/rss.xml")),sitemap:n.join("https://www.kidoju.com",e("/support/%s/sitemap.xml")),pages:n.join("https://www.kidoju.com",e("/support/%s/%s")),posts:n.join("https://www.kidoju.com",e("/support/%s/posts/%s/%s/%s"))}},t.logger=t.logger||{},t.logger.level=parseInt("2",10)||0,t.logger.endPoint=t.uris.webapp.logger}(),window.app},n(0))}});
//# sourceMappingURL=init.bundle.js.map?v=0.2.87