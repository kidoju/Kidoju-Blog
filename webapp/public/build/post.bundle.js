/*! Copyright ©2013-2018 Memba® Sarl. All rights reserved. - Version 0.3.8 dated 30-Dec-2018 */!function(t){function e(e){for(var n,a,c=e[0],p=e[1],s=e[2],f=0,l=[];f<c.length;f++)a=c[f],o[a]&&l.push(o[a][0]),o[a]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(t[n]=p[n]);for(u&&u(e);l.length;)l.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,c=1;c<r.length;c++){var p=r[c];0!==o[p]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={23:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(t){return a.p+""+({1:"app.culture.en",2:"app.culture.fr",3:"app.theme.black",4:"app.theme.blueopal",5:"app.theme.bootstrap",6:"app.theme.default",7:"app.theme.fiori",8:"app.theme.flat",9:"app.theme.highcontrast",10:"app.theme.material",11:"app.theme.materialblack",12:"app.theme.metro",13:"app.theme.metroblack",14:"app.theme.moonlight",15:"app.theme.nova",16:"app.theme.office365",17:"app.theme.silver",18:"app.theme.uniform"}[t]||t)+".bundle.js?v=0.3.8"}(t),i=function(e){c.onerror=c.onload=null,clearTimeout(p);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+n+": "+i+")");a.type=n,a.request=i,r[1](a)}o[t]=void 0}};var p=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="https://www.kidoju.com/support/build/",a.oe=function(t){throw console.error(t),t};var c=window.webpackJsonp=window.webpackJsonp||[],p=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=p;i.push([381,0]),r()}({1:function(t,e){t.exports=jQuery},14:function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},17:function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[r].concat(i).concat([o]).join("\n")}var a;return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},18:function(t,e,r){var n,o,i={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),c=function(t){var e={};return function(t,r){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),p=null,s=0,u=[],f=r(36);function l(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=i[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(w(n.parts[a],e))}else{var c=[];for(a=0;a<n.parts.length;a++)c.push(w(n.parts[a],e));i[n.id]={id:n.id,refs:1,parts:c}}}}function h(t,e){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(c):r.push(n[a]={id:a,parts:[c]})}return r}function d(t,e){var r=c(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=u[u.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),u.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertAt.before,r);r.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return r.nc}();n&&(t.attrs.nonce=n)}return b(e,t.attrs),d(t,e),e}function b(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function w(t,e){var r,n,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=s++;r=p||(p=v(e)),n=k.bind(null,r,a,!1),o=k.bind(null,r,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),d(t,e),e}(e),n=function(t,e,r){var n=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(n=f(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,r,e),o=function(){m(r),r.href&&URL.revokeObjectURL(r.href)}):(r=v(e),n=function(t,e){var r=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){m(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=h(t,e);return l(r,e),function(t){for(var n=[],o=0;o<r.length;o++){var a=r[o];(c=i[a.id]).refs--,n.push(c)}t&&l(h(t,e),e);for(o=0;o<n.length;o++){var c;if(0===(c=n[o]).refs){for(var p=0;p<c.parts.length;p++)c.parts[p]();delete i[c.id]}}}};var g,x=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function k(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},36:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},37:function(t,e,r){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},381:function(t,e,r){"use strict";r.r(e);var n,o=r(1),i=r.n(o),a=(r(22),r(79),r(11)),c=r(13),p=r(3),s=r(2),u=r(9),f=(r(382),window.HTMLAnchorElement),l=window.kendo.attr,h=new u.a("page.post"),d={SOCIAL:".social",WRAPPER:"#post-wrapper"},m={FACEBOOK:"facebook",GOOGLE:"google",LINKEDIN:"linkedin",PINTEREST:"pinterest",TWITTER:"twitter",EMAIL:"email"},v=null;i()(function(){i()(d.WRAPPER).find(d.SOCIAL).on(s.a.CLICK,function(t){p.a.instanceof(i.a.Event,t,p.a.format(p.a.messages.instanceof.default,"e","default")),p.a.instanceof(f,t.currentTarget,p.a.format(p.a.messages.instanceof.default,"e.currentTarget","HTMLAnchorElement"));var e,r=encodeURIComponent(i()('meta[property="og:url"]').attr("content")),o=encodeURIComponent(i()('meta[property="og:site_name"]').attr("content")),s=encodeURIComponent(i()('meta[property="og:title"]').attr("content")),u=encodeURIComponent(i()('meta[property="og:description"]').attr("content")),h=encodeURIComponent(i()('meta[property="og:image"]').attr("content"));switch(i()(t.currentTarget).attr(l("command"))){case m.FACEBOOK:e="".concat("https://www.facebook.com/dialog/share?display=popup&app_id=").concat(a.a.constants.facebookAppId,"&href=").concat(r,"&redirect_uri=").concat(r);break;case m.GOOGLE:e="".concat("https://plus.google.com/share?url=").concat(r,"&hl=").concat(c.a.locale());break;case m.LINKEDIN:e="".concat("https://www.linkedin.com/shareArticle?mini=true&source=").concat(o,"&summary=").concat(u,"&title=").concat(s,"&url=").concat(r);break;case m.PINTEREST:e="".concat("https://pinterest.com/pin/create/button/?url=").concat(r,"&media=").concat(h,"&description=").concat(u);break;case m.TWITTER:e="".concat("https://twitter.com/intent/tweet?text=").concat(s,"&url=").concat(r,"&via=").concat(a.a.constants.twitterAccount);break;case m.EMAIL:e="mailto:info@memba.org?&subject=Shared Link&body=Hey%20loojk%20at%20that"}(null===v||v.closed||n!==e)&&(v=window.open(e,"social","toolbar=0,status=0,menubar=0,height=450,width=600")),n=e,v&&i.a.isFunction(v.focus)&&v.focus()}),h.info({message:"post page initialized in ".concat(c.a.locale()),method:"document.ready"})})},382:function(t,e,r){var n=r(383);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(18)(n,o);n.locals&&(t.exports=n.locals)},383:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,".toolbar{position:absolute;top:51px;width:100%;border-left-width:0;border-right-width:0}.toolbar label{font-weight:normal}.wrapper{position:absolute;left:0;right:0;height:auto;border-width:0;top:51px;bottom:44px;-webkit-overflow-scrolling:touch}#post-wrapper{position:absolute;left:0;right:0;height:auto;border-width:0;top:51px;bottom:44px;-webkit-overflow-scrolling:touch;overflow-y:scroll}#post-wrapper .container article{margin-top:3em}#post-wrapper .container article img.img-responsive,#post-wrapper .container article div.embed-responsive{margin:1.5em 0}#post-wrapper .container article a:not(.k-button){border-bottom:dotted 1px;text-decoration:none}#post-wrapper .container article a:not(.k-button):hover{border-bottom:none;text-decoration:underline;color:inherit}#post-wrapper .container section:not(.group){margin-bottom:40px;text-align:right}#post-wrapper .container section:not(.group) .social{border:0}#post-wrapper .container section:not(.group) .social img{height:40px;width:40px}#post-wrapper .container section.group{margin-bottom:40px}#post-wrapper .container section.group img{height:28px;width:28px;vertical-align:top}#post-wrapper .container section.group div.list-group img{height:24px;width:24px}@media (max-height:450px){header.hidden-print{display:none !important}#post-wrapper{top:0;bottom:0}footer.hidden-print{display:none !important}}@media print{#post-wrapper{position:relative;top:0px;overflow:visible}#post-wrapper .container{width:auto}}",""])},55:function(t,e,r){var n={"./app.theme.black.less":63,"./app.theme.blueopal.less":64,"./app.theme.bootstrap.less":65,"./app.theme.default.less":66,"./app.theme.fiori.less":67,"./app.theme.flat.less":68,"./app.theme.highcontrast.less":69,"./app.theme.material.less":70,"./app.theme.materialblack.less":71,"./app.theme.metro.less":72,"./app.theme.metroblack.less":73,"./app.theme.moonlight.less":74,"./app.theme.nova.less":75,"./app.theme.office365.less":76,"./app.theme.silver.less":77,"./app.theme.uniform.less":78};function o(t){var e=i(t);return r(e)}function i(t){var e=n[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}o.keys=function(){return Object.keys(n)},o.resolve=i,t.exports=o,o.id=55},60:function(t,e,r){var n={"./app.culture.en.es6":61,"./app.culture.fr.es6":62};function o(t){var e=i(t);return r(e)}function i(t){var e=n[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}o.keys=function(){return Object.keys(n)},o.resolve=i,t.exports=o,o.id=60}});