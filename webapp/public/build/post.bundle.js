/*! Copyright ©2013-2019 Memba® Sarl. All rights reserved. - Version 0.3.8 dated 15-May-2019 */!function(t){function e(e){for(var r,i,s=e[0],c=e[1],p=e[2],l=0,f=[];l<s.length;l++)i=s[l],o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(u&&u(e);f.length;)f.shift()();return a.push.apply(a,p||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={23:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(t){return i.p+""+({1:"app.culture.en",2:"app.culture.fr",3:"app.theme.black",4:"app.theme.blueopal",5:"app.theme.bootstrap",6:"app.theme.default",7:"app.theme.fiori",8:"app.theme.flat",9:"app.theme.highcontrast",10:"app.theme.material",11:"app.theme.materialblack",12:"app.theme.metro",13:"app.theme.metroblack",14:"app.theme.moonlight",15:"app.theme.nova",16:"app.theme.office365",17:"app.theme.silver",18:"app.theme.uniform"}[t]||t)+".bundle.js?v=0.3.8"}(t),a=function(e){s.onerror=s.onload=null,clearTimeout(c);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[t]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="https://www.kidoju.com/support/build/",i.oe=function(t){throw console.error(t),t};var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var u=c;a.push([406,0]),n()}({1:function(t,e){t.exports=jQuery},12:function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},18:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];null!=i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},19:function(t,e,n){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,p=0,u=[],l=n(37);function f(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(g(r.parts[i],e))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(g(r.parts[i],e));a[r.id]={id:r.id,refs:1,parts:s}}}}function d(t,e){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,n);n.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return v(e,t.attrs),h(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,r,o,a;if(e.transform&&t.css){if(!(a="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=a}if(e.singleton){var i=p++;n=c||(c=b(e)),r=x.bind(null,n,i,!1),o=x.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,a=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||a)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return f(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var i=n[o];(s=a[i.id]).refs--,r.push(s)}t&&f(d(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete a[s.id]}}}};var w,y=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}},37:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,a=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?t:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},38:function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},406:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),a=(n(26),n(22)),i=n(16),s=n(14),c=n(3),p=n(2),u=n(15);n(407);function l(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f,d=window.HTMLAnchorElement,h=window.kendo.attr,m=new u.a("page.post"),b=".social",v="#post-wrapper",g="facebook",w="google",y="linkedin",x="pinterest",k="twitter",j="email",O=null,U=new(i.a.extend({init:function(){var t=this;i.a.fn.init.call(this),o.a.when.apply(o.a,l(this.initializers)).then(function(){t.initSocialButtons(),m.info({message:"post page initialized in ".concat(s.a.locale),method:"init"})})},initSocialButtons:function(){o()(v).find(b).on(p.a.CLICK,function(t){c.a.instanceof(o.a.Event,t,c.a.format(c.a.messages.instanceof.default,"e","default")),c.a.instanceof(d,t.currentTarget,c.a.format(c.a.messages.instanceof.default,"e.currentTarget","HTMLAnchorElement"));var e,n=encodeURIComponent(o()('meta[property="og:url"]').attr("content")),r=encodeURIComponent(o()('meta[property="og:site_name"]').attr("content")),i=encodeURIComponent(o()('meta[property="og:title"]').attr("content")),p=encodeURIComponent(o()('meta[property="og:description"]').attr("content")),u=encodeURIComponent(o()('meta[property="og:image"]').attr("content"));switch(o()(t.currentTarget).attr(h("command"))){case g:e="".concat("https://www.facebook.com/dialog/share?display=popup&app_id=").concat(a.a.constants.facebookAppId,"&href=").concat(n,"&redirect_uri=").concat(n);break;case w:e="".concat("https://plus.google.com/share?url=").concat(n,"&hl=").concat(s.a.locale);break;case y:e="".concat("https://www.linkedin.com/shareArticle?mini=true&source=").concat(r,"&summary=").concat(p,"&title=").concat(i,"&url=").concat(n);break;case x:e="".concat("https://pinterest.com/pin/create/button/?url=").concat(n,"&media=").concat(u,"&description=").concat(p);break;case k:e="".concat("https://twitter.com/intent/tweet?text=").concat(i,"&url=").concat(n,"&via=").concat(a.a.constants.twitterAccount);break;case j:e="mailto:info@memba.org?&subject=Shared Link&body=Hey%20loojk%20at%20that"}(null===O||O.closed||f!==e)&&(O=window.open(e,"social","toolbar=0,status=0,menubar=0,height=450,width=600")),f=e,O&&o.a.isFunction(O.focus)&&O.focus()})}}));e.default=U},407:function(t,e,n){var r=n(408);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(19)(r,o);r.locals&&(t.exports=r.locals)},408:function(t,e,n){(t.exports=n(18)(!1)).push([t.i,".toolbar{position:absolute;top:51px;width:100%;border-left-width:0;border-right-width:0}.toolbar label{font-weight:normal}.wrapper{position:absolute;left:0;right:0;height:auto;border-width:0;top:51px;bottom:44px;-webkit-overflow-scrolling:touch}#post-wrapper{position:absolute;left:0;right:0;height:auto;border-width:0;top:51px;bottom:44px;-webkit-overflow-scrolling:touch;overflow-y:scroll}#post-wrapper .container article{margin-top:3em}#post-wrapper .container article img.img-responsive,#post-wrapper .container article div.embed-responsive{margin:1.5em 0}#post-wrapper .container article a:not(.k-button){border-bottom:dotted 1px;text-decoration:none}#post-wrapper .container article a:not(.k-button):hover{border-bottom:none;text-decoration:underline;color:inherit}#post-wrapper .container section:not(.group){margin-bottom:40px;text-align:right}#post-wrapper .container section:not(.group) .social{border:0}#post-wrapper .container section:not(.group) .social img{height:40px;width:40px}#post-wrapper .container section.group{margin-bottom:40px}#post-wrapper .container section.group img{height:28px;width:28px;vertical-align:top}#post-wrapper .container section.group div.list-group img{height:24px;width:24px}@media (max-height:450px){header.hidden-print{display:none !important}#post-wrapper{top:0;bottom:0}footer.hidden-print{display:none !important}}@media print{#post-wrapper{position:relative;top:0px;overflow:visible}#post-wrapper .container{width:auto}}",""])},57:function(t,e,n){var r={"./app.theme.black.less":65,"./app.theme.blueopal.less":66,"./app.theme.bootstrap.less":67,"./app.theme.default.less":68,"./app.theme.fiori.less":69,"./app.theme.flat.less":70,"./app.theme.highcontrast.less":71,"./app.theme.material.less":72,"./app.theme.materialblack.less":73,"./app.theme.metro.less":74,"./app.theme.metroblack.less":75,"./app.theme.moonlight.less":76,"./app.theme.nova.less":77,"./app.theme.office365.less":78,"./app.theme.silver.less":79,"./app.theme.uniform.less":80};function o(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id=57},62:function(t,e,n){var r={"./app.culture.en.es6":63,"./app.culture.fr.es6":64};function o(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id=62}});