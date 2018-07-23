/*! <%= pkg.copyright %> - Version <%= pkg.version %> dated <%= grunt.template.today() %> */!function(e){function t(t){for(var n,a,s=t[0],p=t[1],u=t[2],l=0,f=[];l<s.length;l++)a=s[l],o[a]&&f.push(o[a][0]),o[a]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(e[n]=p[n]);for(c&&c(t);f.length;)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var p=r[s];0!==o[p]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={3:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=n);var i,s=document.getElementsByTagName("head")[0],p=document.createElement("script");p.charset="utf-8",p.timeout=120,a.nc&&p.setAttribute("nonce",a.nc),p.src=function(e){return a.p+""+({7:"app.culture.en",8:"app.culture.fr",9:"app.theme.black",10:"app.theme.blueopal",11:"app.theme.bootstrap",12:"app.theme.default",13:"app.theme.fiori",14:"app.theme.flat",15:"app.theme.highcontrast",16:"app.theme.material",17:"app.theme.materialblack",18:"app.theme.metro",19:"app.theme.metroblack",20:"app.theme.moonlight",21:"app.theme.nova",22:"app.theme.office365",23:"app.theme.silver",24:"app.theme.uniform"}[e]||e)+".bundle.js?v=0.3.8"}(e),i=function(t){p.onerror=p.onload=null,clearTimeout(u);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+n+": "+i+")");a.type=n,a.request=i,r[1](a)}o[e]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:p})},12e4);p.onerror=p.onload=i,s.appendChild(p)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="https://www.kidoju.com/support/build/",a.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=p;i.push([419,0]),r()}({12:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(n),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[r].concat(i).concat([o]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},13:function(e,t,r){var n={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),a=null,s=0,p=[],u=r(36);function c(e,t){for(var r=0;r<e.length;r++){var o=e[r],i=n[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(v(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(v(o.parts[a],t));n[o.id]={id:o.id,refs:1,parts:s}}}}function l(e,t){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function f(e,t){var r=i(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=p[p.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),p.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertInto+" "+e.insertAt.before);r.insertBefore(t,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=p.indexOf(e);t>=0&&p.splice(t,1)}function d(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),m(t,e.attrs),f(e,t),t}function m(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function v(e,t){var r,n,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var p=s++;r=a||(a=d(t)),n=g.bind(null,r,p,!1),o=g.bind(null,r,p,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),f(e,t),t}(t),n=function(e,t,r){var n=r.css,o=r.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(n=u(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,r,t),o=function(){h(r),r.href&&URL.revokeObjectURL(r.href)}):(r=d(t),n=function(e,t){var r=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){h(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=l(e,t);return c(r,t),function(e){for(var o=[],i=0;i<r.length;i++){var a=r[i];(s=n[a.id]).refs--,o.push(s)}e&&c(l(e,t),t);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var p=0;p<s.parts.length;p++)s.parts[p]();delete n[s.id]}}}};var b=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}();function g(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},25:function(e,t){e.exports=jQuery},36:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},37:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},419:function(e,t,r){"use strict";var n=i(r(25)),o=i(r(32));function i(e){return e&&e.__esModule?e:{default:e}}r(35),r(51),r(64),r(96),r(420);var a=window.app.i18n,s=new o.default("page.home");(0,n.default)(function(){s.info({message:"home page initialized in "+a.locale(),method:"document.ready"})})},420:function(e,t,r){var n=r(421);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(13)(n,o);n.locals&&(e.exports=n.locals)},421:function(e,t,r){var n=r(37);(e.exports=r(12)(!1)).push([e.i,".toolbar{position:absolute;top:51px;width:100%;border-left-width:0;border-right-width:0}.toolbar label{font-weight:normal}.wrapper{position:absolute;left:0;right:0;height:auto;border-width:0;top:51px;bottom:44px;-webkit-overflow-scrolling:touch}#home-wrapper{position:absolute;left:0;right:0;height:auto;border-width:0;top:51px;bottom:44px;-webkit-overflow-scrolling:touch;overflow-y:scroll}#home-wrapper .jumbotron{background:url("+n(r(422))+") no-repeat center center;background-size:cover;height:60%;margin-bottom:4vh}#home-wrapper .jumbotron h1{color:#FFFFFF;width:60%;top:30%;right:5%;position:absolute;font-size:7vmin;text-shadow:0 0 2vmin #333333}#home-wrapper .container .col-xs-6{text-align:center}#home-wrapper .container .col-xs-6 .flag{height:15vh;width:15vh;border-radius:50%;margin:0 auto}#home-wrapper .container .col-xs-6 .uk{background:url("+n(r(423))+") no-repeat center center;background-size:15.2vh 15.2vh}#home-wrapper .container .col-xs-6 .fr{background:url("+n(r(424))+") no-repeat center center;background-size:15.2vh 15.2vh}#home-wrapper .container .col-xs-6 h2{font-weight:normal;font-size:4vh;line-height:1em;margin-top:2vh;margin-bottom:1vh}#home-wrapper .container .col-xs-6 p{font-size:2vh;margin:0 10px;line-height:1.2em}@media (max-height:450px){header.hidden-print{display:none !important}#home-wrapper{top:0;bottom:0}footer.hidden-print{display:none !important}}@media print{#page-wrapper{position:relative;top:0px;overflow:visible}#page-wrapper .container{width:auto}}",""])},422:function(e,t,r){e.exports=r.p+"47120e35b461638cf2038d63dece4402.jpg"},423:function(e,t,r){e.exports=r.p+"cdfd82cd7caa66cfe027d1702b434bd9.png"},424:function(e,t,r){e.exports=r.p+"cbb99b5861be0813c86d8b564e49a468.png"},5:function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},57:function(e,t,r){var n={"./app.theme.black.less":65,"./app.theme.blueopal.less":66,"./app.theme.bootstrap.less":67,"./app.theme.default.less":68,"./app.theme.fiori.less":69,"./app.theme.flat.less":70,"./app.theme.highcontrast.less":71,"./app.theme.material.less":72,"./app.theme.materialblack.less":73,"./app.theme.metro.less":74,"./app.theme.metroblack.less":75,"./app.theme.moonlight.less":76,"./app.theme.nova.less":77,"./app.theme.office365.less":78,"./app.theme.silver.less":79,"./app.theme.uniform.less":80};function o(e){var t=i(e);return r(t)}function i(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=57},61:function(e,t,r){var n={"./app.culture.en.js":62,"./app.culture.fr.js":63};function o(e){var t=i(e);return r(t)}function i(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=61}});