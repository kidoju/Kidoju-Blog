/*! Copyright ©2013-2019 Memba® Sarl. All rights reserved. - Version 0.3.8 dated 26-Feb-2019 */!function(e){function t(t){for(var n,a,s=t[0],p=t[1],c=t[2],l=0,f=[];l<s.length;l++)a=s[l],o[a]&&f.push(o[a][0]),o[a]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(e[n]=p[n]);for(u&&u(t);f.length;)f.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var p=r[s];0!==o[p]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={20:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=n);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=function(e){return a.p+""+({1:"app.culture.en",2:"app.culture.fr",3:"app.theme.black",4:"app.theme.blueopal",5:"app.theme.bootstrap",6:"app.theme.default",7:"app.theme.fiori",8:"app.theme.flat",9:"app.theme.highcontrast",10:"app.theme.material",11:"app.theme.materialblack",12:"app.theme.metro",13:"app.theme.metroblack",14:"app.theme.moonlight",15:"app.theme.nova",16:"app.theme.office365",17:"app.theme.silver",18:"app.theme.uniform"}[e]||e)+".bundle.js?v=0.3.8"}(e),i=function(t){s.onerror=s.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+n+": "+i+")");a.type=n,a.request=i,r[1](a)}o[e]=void 0}};var p=setTimeout(function(){i({type:"timeout",target:s})},12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="https://www.kidoju.com/support/build/",a.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=p;i.push([369,0]),r()}({1:function(e,t){e.exports=jQuery},11:function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},17:function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[r].concat(i).concat([o]).join("\n")}var a;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},18:function(e,t,r){var n,o,i={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),s=function(e){var t={};return function(e,r){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),p=null,c=0,u=[],l=r(37);function f(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=i[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(g(n.parts[a],t))}else{var s=[];for(a=0;a<n.parts.length;a++)s.push(g(n.parts[a],t));i[n.id]={id:n.id,refs:1,parts:s}}}}function h(e,t){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function d(e,t){var r=s(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=u[u.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),u.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,r);r.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return r.nc}();n&&(e.attrs.nonce=n)}return b(t,e.attrs),d(e,t),t}function b(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function g(e,t){var r,n,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=c++;r=p||(p=v(t)),n=x.bind(null,r,a,!1),o=x.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),d(e,t),t}(t),n=function(e,t,r){var n=r.css,o=r.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(n=l(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,r,t),o=function(){m(r),r.href&&URL.revokeObjectURL(r.href)}):(r=v(t),n=function(e,t){var r=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){m(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=h(e,t);return f(r,t),function(e){for(var n=[],o=0;o<r.length;o++){var a=r[o];(s=i[a.id]).refs--,n.push(s)}e&&f(h(e,t),t);for(o=0;o<n.length;o++){var s;if(0===(s=n[o]).refs){for(var p=0;p<s.parts.length;p++)s.parts[p]();delete i[s.id]}}}};var w,y=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function x(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},369:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),i=r(14),a=r(16),s=r(15);r(370);function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=new s.a("page.home"),u=new(a.a.extend({init:function(){a.a.fn.init.call(this),o.a.when.apply(o.a,p(this.initializers)).then(function(){c.info({message:"home page initialized in ".concat(i.a.locale),method:"Controller.init"})})}}));t.default=u},37:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},370:function(e,t,r){var n=r(371);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(18)(n,o);n.locals&&(e.exports=n.locals)},371:function(e,t,r){t=e.exports=r(17)(!1);var n=r(38),o=n(r(372)),i=n(r(373)),a=n(r(374));t.push([e.i,".toolbar{position:absolute;top:51px;width:100%;border-left-width:0;border-right-width:0}.toolbar label{font-weight:normal}.wrapper{position:absolute;left:0;right:0;height:auto;border-width:0;top:51px;bottom:44px;-webkit-overflow-scrolling:touch}#home-wrapper{position:absolute;left:0;right:0;height:auto;border-width:0;top:51px;bottom:44px;-webkit-overflow-scrolling:touch;overflow-y:scroll}#home-wrapper .jumbotron{background:url("+o+") no-repeat center center;background-size:cover;height:60%;margin-bottom:4vh}#home-wrapper .jumbotron h1{color:#FFFFFF;width:60%;top:30%;right:5%;position:absolute;font-size:7vmin;text-shadow:0 0 2vmin #333333}#home-wrapper .container .col-xs-6{text-align:center}#home-wrapper .container .col-xs-6 .flag{height:15vh;width:15vh;border-radius:50%;margin:0 auto}#home-wrapper .container .col-xs-6 .uk{background:url("+i+") no-repeat center center;background-size:15.2vh 15.2vh}#home-wrapper .container .col-xs-6 .fr{background:url("+a+") no-repeat center center;background-size:15.2vh 15.2vh}#home-wrapper .container .col-xs-6 h2{font-weight:normal;font-size:4vh;line-height:1em;margin-top:2vh;margin-bottom:1vh}#home-wrapper .container .col-xs-6 p{font-size:2vh;margin:0 10px;line-height:1.2em}@media (max-height:450px){header.hidden-print{display:none !important}#home-wrapper{top:0;bottom:0}footer.hidden-print{display:none !important}}@media print{#page-wrapper{position:relative;top:0px;overflow:visible}#page-wrapper .container{width:auto}}",""])},372:function(e,t,r){e.exports=r.p+"47120e35b461638cf2038d63dece4402.jpg"},373:function(e,t,r){e.exports=r.p+"cdfd82cd7caa66cfe027d1702b434bd9.png"},374:function(e,t,r){e.exports=r.p+"cbb99b5861be0813c86d8b564e49a468.png"},38:function(e,t,r){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},56:function(e,t,r){var n={"./app.theme.black.less":64,"./app.theme.blueopal.less":65,"./app.theme.bootstrap.less":66,"./app.theme.default.less":67,"./app.theme.fiori.less":68,"./app.theme.flat.less":69,"./app.theme.highcontrast.less":70,"./app.theme.material.less":71,"./app.theme.materialblack.less":72,"./app.theme.metro.less":73,"./app.theme.metroblack.less":74,"./app.theme.moonlight.less":75,"./app.theme.nova.less":76,"./app.theme.office365.less":77,"./app.theme.silver.less":78,"./app.theme.uniform.less":79};function o(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=56},61:function(e,t,r){var n={"./app.culture.en.es6":62,"./app.culture.fr.es6":63};function o(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=61}});