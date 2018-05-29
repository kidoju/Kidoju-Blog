/*! <%= pkg.copyright %> - Version <%= pkg.version %> dated <%= grunt.template.today() %> */!function(e){function t(t){for(var n,o,s=t[0],l=t[1],u=t[2],c=0,d=[];c<s.length;c++)o=s[c],a[o]&&d.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(p&&p(t);d.length;)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={21:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=n);var i=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(e){return o.p+""+({0:"app.culture.en",1:"app.culture.fr",2:"app.theme.black",3:"app.theme.blueopal",4:"app.theme.bootstrap",5:"app.theme.default",6:"app.theme.fiori",7:"app.theme.flat",8:"app.theme.highcontrast",9:"app.theme.material",10:"app.theme.materialblack",11:"app.theme.metro",12:"app.theme.metroblack",13:"app.theme.moonlight",14:"app.theme.nova",15:"app.theme.office365",16:"app.theme.silver",17:"app.theme.uniform"}[e]||e)+".bundle.js?v=0.3.8"}(e);var l=setTimeout(function(){u({type:"timeout",target:s})},12e4);function u(t){s.onerror=s.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+n+": "+i+")");o.type=n,o.request=i,r[1](o)}a[e]=void 0}}s.onerror=s.onload=u,i.appendChild(s)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="https://www.kidoju.com/support/build/",o.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var p=l;i.push([49,18]),r()}({0:function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},1:function(e,t,r){var n,a,i={},o=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=n.apply(this,arguments)),a}),s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,u=0,p=[],c=r(6);function d(e,t){for(var r=0;r<e.length;r++){var n=e[r],a=i[n.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](n.parts[o]);for(;o<n.parts.length;o++)a.parts.push(F(n.parts[o],t))}else{var s=[];for(o=0;o<n.parts.length;o++)s.push(F(n.parts[o],t));i[n.id]={id:n.id,refs:1,parts:s}}}}function f(e,t){for(var r=[],n={},a=0;a<e.length;a++){var i=e[a],o=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};n[o]?n[o].parts.push(s):r.push(n[o]={id:o,parts:[s]})}return r}function h(e,t){var r=s(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=p[p.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),p.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=s(e.insertInto+" "+e.insertAt.before);r.insertBefore(t,a)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=p.indexOf(e);t>=0&&p.splice(t,1)}function v(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),g(t,e.attrs),h(e,t),t}function g(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function F(e,t){var r,n,a,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var o=u++;r=l||(l=v(t)),n=w.bind(null,r,o,!1),a=w.bind(null,r,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),h(e,t),t}(t),n=function(e,t,r){var n=r.css,a=r.sourceMap,i=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||i)&&(n=c(n));a&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var o=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}.bind(null,r,t),a=function(){m(r),r.href&&URL.revokeObjectURL(r.href)}):(r=v(t),n=function(e,t){var r=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),a=function(){m(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else a()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=f(e,t);return d(r,t),function(e){for(var n=[],a=0;a<r.length;a++){var o=r[a];(s=i[o.id]).refs--,n.push(s)}e&&d(f(e,t),t);for(a=0;a<n.length;a++){var s;if(0===(s=n[a]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var b,y=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function w(e,t,r,n){var a=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}},10:function(e,t,r){var n={"./app.theme.black.less":27,"./app.theme.blueopal.less":26,"./app.theme.bootstrap.less":25,"./app.theme.default.less":24,"./app.theme.fiori.less":23,"./app.theme.flat.less":22,"./app.theme.highcontrast.less":21,"./app.theme.material.less":20,"./app.theme.materialblack.less":19,"./app.theme.metro.less":18,"./app.theme.metroblack.less":17,"./app.theme.moonlight.less":16,"./app.theme.nova.less":15,"./app.theme.office365.less":14,"./app.theme.silver.less":13,"./app.theme.uniform.less":12};function a(e){var t=i(e);return r(t)}function i(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=10},2:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var a=(o=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[r].concat(i).concat([a]).join("\n")}var o;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(n[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&n[o[0]]||(r&&!o[2]?o[2]=r:r&&(o[2]="("+o[2]+") and ("+r+")"),t.push(o))}},t}},31:function(e,t,r){var n={"./app.culture.en.js":30,"./app.culture.fr.js":29};function a(e){var t=i(e);return r(t)}function i(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=31},46:function(e,t,r){(e.exports=r(2)(!1)).push([e.i,".toolbar{position:absolute;top:51px;width:100%;border-left-width:0;border-right-width:0}.toolbar label{font-weight:normal}.wrapper{position:absolute;left:0;right:0;height:auto;border-width:0;top:51px;bottom:44px;-webkit-overflow-scrolling:touch}#page-wrapper{position:absolute;left:0;right:0;height:auto;border-width:0;top:51px;bottom:44px;-webkit-overflow-scrolling:touch;overflow-y:scroll}#page-wrapper .container article{margin-top:3em}#page-wrapper .container article img.img-responsive{margin:1.5em 0}#page-wrapper .container article a:not(.k-button){border-bottom:dotted 1px;text-decoration:none}#page-wrapper .container article a:not(.k-button):hover{border-bottom:none;text-decoration:underline;color:inherit}@media (max-height:450px){header.hidden-print{display:none !important}#page-wrapper{top:0;bottom:0}#page-wrapper .container article{margin-top:0}footer.hidden-print{display:none !important}}@media print{#page-wrapper{position:relative;top:0px;overflow:visible}#page-wrapper .container{width:auto}}",""])},47:function(e,t,r){var n=r(46);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(1)(n,a);n.locals&&(e.exports=n.locals)},48:function(e,t,r){var n,a,i;r(0),a=[r(3)],void 0===(i="function"==typeof(n=function(){return function(e,t){var r=window.kendo,n=r.ui.Widget,a=".kendoValidator",i=new RegExp("k-invalid-msg","i"),o=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i,s=/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,l=":input:not(:button,[type=submit],[type=reset],[disabled],[readonly])",u=e.proxy,p=function(e,t){return"string"==typeof t&&(t=new RegExp("^(?:"+t+")$")),t.test(e)},c=function(e,t,r){var n=e.val();return!e.filter(t).length||""===n||p(n,r)};function d(t,n){for(var a,o=e(),s=0,l=t.length;s<l;s++)a=t[s],i.test(a.className)&&a.getAttribute(r.attr("for"))===n&&(o=o.add(a));return o}r.ui.validator||(r.ui.validator={rules:{},messages:{}});var f=n.extend({init:function(t,a){var i=function(t){var n,a=r.ui.validator.ruleResolvers||{},i={};for(n in a)e.extend(!0,i,a[n].resolve(t));return i}(t),o="["+r.attr("validate")+"!=false]";(a=a||{}).rules=e.extend({},r.ui.validator.rules,i.rules,a.rules),a.messages=e.extend({},r.ui.validator.messages,i.messages,a.messages),n.fn.init.call(this,t,a),this._errorTemplate=r.template(this.options.errorTemplate),this.element.is("form")&&this.element.attr("novalidate","novalidate"),this._inputSelector=l+o,this._checkboxSelector=":checkbox:not([disabled],[readonly])"+o,this._errors={},this._attachEvents(),this._isValidated=!1},events:["validate","change","validateInput"],options:{name:"Validator",errorTemplate:'<span class="k-widget k-tooltip k-tooltip-validation"><span class="k-icon k-i-warning"> </span> #=message#</span>',messages:{required:"{0} is required",pattern:"{0} is not valid",min:"{0} should be greater than or equal to {1}",max:"{0} should be smaller than or equal to {1}",step:"{0} is not valid",email:"{0} is not valid email",url:"{0} is not valid URL",date:"{0} is not valid date",dateCompare:"End date should be greater than or equal to the start date"},rules:{required:function(e){var t=e.filter("[type=checkbox]").length&&!e.is(":checked"),r=e.val();return!(function(e,t){return!!e.length&&null!=e[0].attributes[t]}(e,"required")&&(!r||""===r||0===r.length||t))},pattern:function(e){return!e.filter("[type=text],[type=email],[type=url],[type=tel],[type=search],[type=password]").filter("[pattern]").length||""===e.val()||p(e.val(),e.attr("pattern"))},min:function(e){return!e.filter("[type=number],[type=range],["+r.attr("type")+"=number]").filter("[min]").length||""===e.val()||(parseFloat(e.attr("min"))||0)<=r.parseFloat(e.val())},max:function(e){return!e.filter("[type=number],[type=range],["+r.attr("type")+"=number]").filter("[max]").length||""===e.val()||(parseFloat(e.attr("max"))||0)>=r.parseFloat(e.val())},step:function(e){if(e.filter("[type=number],[type=range],["+r.attr("type")+"=number]").filter("[step]").length&&""!==e.val()){var t,n=parseFloat(e.attr("min"))||0,a=parseFloat(e.attr("step"))||1,i=parseFloat(e.val()),o=(s=((s=a)+"").split(".")).length>1?s[1].length:0;return o?(t=Math.pow(10,o),Math.floor((i-n)*t)%(a*t)/Math.pow(100,o)==0):(i-n)%a==0}var s;return!0},email:function(e){return c(e,"[type=email],["+r.attr("type")+"=email]",o)},url:function(e){return c(e,"[type=url],["+r.attr("type")+"=url]",s)},date:function(e){return!e.filter("[type^=date],["+r.attr("type")+"=date]").length||""===e.val()||null!==r.parseDate(e.val(),e.attr(r.attr("format")))}},validateOnBlur:!0},destroy:function(){n.fn.destroy.call(this),this.element.off(a)},value:function(){return!!this._isValidated&&0===this.errors().length},_submit:function(e){return!!this.validate()||(e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault(),!1)},_checkElement:function(e){var t=this.value();this.validateInput(e),this.value()!==t&&this.trigger("change")},_attachEvents:function(){var t=this;t.element.is("form")&&t.element.on("submit"+a,u(t._submit,t)),t.options.validateOnBlur&&(t.element.is(l)?(t.element.on("blur"+a,function(){t._checkElement(t.element)}),t.element.is(":checkbox:not([disabled],[readonly])")&&t.element.on("click"+a,function(){t._checkElement(t.element)})):(t.element.on("blur"+a,t._inputSelector,function(){t._checkElement(e(this))}),t.element.on("click"+a,t._checkboxSelector,function(){t._checkElement(e(this))})))},validate:function(){var e,t,r,n=!1,a=this.value();if(this._errors={},this.element.is(l))n=this.validateInput(this.element);else{var i=!1;for(t=0,r=(e=this.element.find(this._inputSelector)).length;t<r;t++)this.validateInput(e.eq(t))||(i=!0);n=!i}return this.trigger("validate",{valid:n}),a!==n&&this.trigger("change"),n},validateInput:function(t){t=e(t),this._isValidated=!0;var n,a,i,o=this._errorTemplate,s=this._checkValidity(t),l=s.valid,u=t.attr("name")||"",p=this._findMessageContainer(u).add(t.next(".k-invalid-msg").filter(function(){var t=e(this);return!t.filter("["+r.attr("for")+"]").length||t.attr(r.attr("for"))===u})).hide(),c=!t.attr("aria-invalid");if(t.removeAttr("aria-invalid"),l)delete this._errors[u];else{n=this._extractMessage(t,s.key),this._errors[u]=n;var d=(a=o({message:(i=n,i.replace(/&amp/g,"&amp;").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">"))}),e.parseHTML?e(e.parseHTML(a)):e(a)),f=p.attr("id");this._decorateMessageContainer(d,u),f&&d.attr("id",f),p.replaceWith(d).length||d.insertAfter(t),d.show(),t.attr("aria-invalid",!0)}return c!==l&&this.trigger("validateInput",{valid:l,input:t}),t.toggleClass("k-invalid",!l),t.toggleClass("k-valid",l),l},hideMessages:function(){var e=this.element;e.is(l)?e.next(".k-invalid-msg").hide():e.find(".k-invalid-msg").hide()},_findMessageContainer:function(t){for(var n,a=r.ui.validator.messageLocators,i=e(),o=0,s=this.element.length;o<s;o++)i=i.add(d(this.element[o].getElementsByTagName("*"),t));for(n in a)i=i.add(a[n].locate(this.element,t));return i},_decorateMessageContainer:function(e,t){var n,a=r.ui.validator.messageLocators;for(n in e.addClass("k-invalid-msg").attr(r.attr("for"),t||""),a)a[n].decorate(e,t);e.attr("role","alert")},_extractMessage:function(e,t){var n,a=this.options.messages[t],i=e.attr("name");return r.ui.Validator.prototype.options.messages[t]||(n=r.isFunction(a)?a(e):a),a=r.isFunction(a)?a(e):a,r.format(e.attr(r.attr(t+"-msg"))||e.attr("validationMessage")||n||e.attr("title")||a||"",i,e.attr(t)||e.attr(r.attr(t)))},_checkValidity:function(e){var t,r=this.options.rules;for(t in r)if(!r[t].call(this,e))return{valid:!1,key:t};return{valid:!0}},errors:function(){var e,t=[],r=this._errors;for(e in r)t.push(r[e]);return t}});r.ui.plugin(f)}(window.kendo.jQuery),window.kendo})?n.apply(t,a):n)||(e.exports=i)},49:function(e,t,r){"use strict";var n,a=r(5),i=(n=a)&&n.__esModule?n:{default:n};r(4),r(7),r(9),r(28),r(32),r(48),r(47);var o=window,s=o.app.i18n,l=new(0,o.Logger)("app.page");(0,i.default)(function(){l.info({message:"site page initialized in "+s.locale(),method:"document.ready"})})},5:function(e,t){e.exports=jQuery},6:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var a,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(a=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},8:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}}});