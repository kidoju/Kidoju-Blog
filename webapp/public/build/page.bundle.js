webpackJsonp([19],{134:function(e,t,n){var a,r,i;n(56),function(o,u){"use strict";r=[n(53),n(1),n(2),n(4),n(5),n(9),n(6)],a=o,i="function"==typeof a?a.apply(t,r):a,!(void 0!==i&&(e.exports=i))}(function(){"use strict";return function(e,t){var n=window.app,a=new window.Logger("app.page"),r=n.i18n;e(function(){a.info({message:"site page initialized in "+r.locale(),method:"document.ready"})})}(window.jQuery),window.app},n(0))},43:function(e,t){e.exports=jQuery},53:function(e,t,n){var a,r,i;!function(o,u){r=[n(3)],a=o,i="function"==typeof a?a.apply(t,r):a,!(void 0!==i&&(e.exports=i))}(function(){return function(e,t){function n(t){var n,a=u.ui.validator.ruleResolvers||{},r={};for(n in a)e.extend(!0,r,a[n].resolve(t));return r}function a(e){return e.replace(/&amp/g,"&amp;").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">")}function r(e){return e=(e+"").split("."),e.length>1?e[1].length:0}function i(t){return e(e.parseHTML?e.parseHTML(t):t)}function o(t,n){for(var a,r,i=e(),o=0,l=t.length;o<l;o++)a=t[o],p.test(a.className)&&(r=a.getAttribute(u.attr("for")),r===n&&(i=i.add(a)));return i}var u=window.kendo,l=u.ui.Widget,s=".kendoValidator",d="k-invalid-msg",p=new RegExp(d,"i"),c="k-invalid",F="k-valid",f=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i,h=/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,m=":input:not(:button,[type=submit],[type=reset],[disabled],[readonly])",g=":checkbox:not([disabled],[readonly])",v="[type=number],[type=range]",w="blur",y="name",b="form",D="novalidate",x="validate",_="change",k="validateInput",E=e.proxy,C=function(e,t){return"string"==typeof t&&(t=new RegExp("^(?:"+t+")$")),t.test(e)},A=function(e,t,n){var a=e.val();return!e.filter(t).length||""===a||C(a,n)},z=function(e,t){return!!e.length&&null!=e[0].attributes[t]};u.ui.validator||(u.ui.validator={rules:{},messages:{}});var M=l.extend({init:function(t,a){var r=this,i=n(t),o="["+u.attr("validate")+"!=false]";a=a||{},a.rules=e.extend({},u.ui.validator.rules,i.rules,a.rules),a.messages=e.extend({},u.ui.validator.messages,i.messages,a.messages),l.fn.init.call(r,t,a),r._errorTemplate=u.template(r.options.errorTemplate),r.element.is(b)&&r.element.attr(D,D),r._inputSelector=m+o,r._checkboxSelector=g+o,r._errors={},r._attachEvents(),r._isValidated=!1},events:[x,_,k],options:{name:"Validator",errorTemplate:'<span class="k-widget k-tooltip k-tooltip-validation"><span class="k-icon k-i-warning"> </span> #=message#</span>',messages:{required:"{0} is required",pattern:"{0} is not valid",min:"{0} should be greater than or equal to {1}",max:"{0} should be smaller than or equal to {1}",step:"{0} is not valid",email:"{0} is not valid email",url:"{0} is not valid URL",date:"{0} is not valid date",dateCompare:"End date should be greater than or equal to the start date"},rules:{required:function(e){var t=e.filter("[type=checkbox]").length&&!e.is(":checked"),n=e.val();return!(z(e,"required")&&(!n||""===n||0===n.length||t))},pattern:function(e){return!e.filter("[type=text],[type=email],[type=url],[type=tel],[type=search],[type=password]").filter("[pattern]").length||""===e.val()||C(e.val(),e.attr("pattern"))},min:function(e){if(e.filter(v+",["+u.attr("type")+"=number]").filter("[min]").length&&""!==e.val()){var t=parseFloat(e.attr("min"))||0,n=u.parseFloat(e.val());return t<=n}return!0},max:function(e){if(e.filter(v+",["+u.attr("type")+"=number]").filter("[max]").length&&""!==e.val()){var t=parseFloat(e.attr("max"))||0,n=u.parseFloat(e.val());return t>=n}return!0},step:function(e){if(e.filter(v+",["+u.attr("type")+"=number]").filter("[step]").length&&""!==e.val()){var t,n=parseFloat(e.attr("min"))||0,a=parseFloat(e.attr("step"))||1,i=parseFloat(e.val()),o=r(a);return o?(t=Math.pow(10,o),Math.floor((i-n)*t)%(a*t)/Math.pow(100,o)===0):(i-n)%a===0}return!0},email:function(e){return A(e,"[type=email],["+u.attr("type")+"=email]",f)},url:function(e){return A(e,"[type=url],["+u.attr("type")+"=url]",h)},date:function(e){return!e.filter("[type^=date],["+u.attr("type")+"=date]").length||""===e.val()||null!==u.parseDate(e.val(),e.attr(u.attr("format")))}},validateOnBlur:!0},destroy:function(){l.fn.destroy.call(this),this.element.off(s)},value:function(){return!!this._isValidated&&0===this.errors().length},_submit:function(e){return!!this.validate()||(e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault(),!1)},_checkElement:function(e){var t=this.value();this.validateInput(e),this.value()!==t&&this.trigger(_)},_attachEvents:function(){var t=this;t.element.is(b)&&t.element.on("submit"+s,E(t._submit,t)),t.options.validateOnBlur&&(t.element.is(m)?(t.element.on(w+s,function(){t._checkElement(t.element)}),t.element.is(g)&&t.element.on("click"+s,function(){t._checkElement(t.element)})):(t.element.on(w+s,t._inputSelector,function(){t._checkElement(e(this))}),t.element.on("click"+s,t._checkboxSelector,function(){t._checkElement(e(this))})))},validate:function(){var e,t,n,a=!1,r=this.value();if(this._errors={},this.element.is(m))a=this.validateInput(this.element);else{var i=!1;for(e=this.element.find(this._inputSelector),t=0,n=e.length;t<n;t++)this.validateInput(e.eq(t))||(i=!0);a=!i}return this.trigger(x,{valid:a}),r!==a&&this.trigger(_),a},validateInput:function(t){t=e(t),this._isValidated=!0;var n,r=this,o=r._errorTemplate,l=r._checkValidity(t),s=l.valid,p="."+d,f=t.attr(y)||"",h=r._findMessageContainer(f).add(t.next(p).filter(function(){var t=e(this);return!t.filter("["+u.attr("for")+"]").length||t.attr(u.attr("for"))===f})).hide(),m=!t.attr("aria-invalid");if(t.removeAttr("aria-invalid"),s)delete r._errors[f];else{n=r._extractMessage(t,l.key),r._errors[f]=n;var g=i(o({message:a(n)})),v=h.attr("id");r._decorateMessageContainer(g,f),v&&g.attr("id",v),h.replaceWith(g).length||g.insertAfter(t),g.show(),t.attr("aria-invalid",!0)}return m!==s&&this.trigger(k,{valid:s,input:t}),t.toggleClass(c,!s),t.toggleClass(F,s),s},hideMessages:function(){var e=this,t="."+d,n=e.element;n.is(m)?n.next(t).hide():n.find(t).hide()},_findMessageContainer:function(t){for(var n,a=u.ui.validator.messageLocators,r=e(),i=0,l=this.element.length;i<l;i++)r=r.add(o(this.element[i].getElementsByTagName("*"),t));for(n in a)r=r.add(a[n].locate(this.element,t));return r},_decorateMessageContainer:function(e,t){var n,a=u.ui.validator.messageLocators;e.addClass(d).attr(u.attr("for"),t||"");for(n in a)a[n].decorate(e,t);e.attr("role","alert")},_extractMessage:function(e,t){var n=this,a=n.options.messages[t],r=e.attr(y);return a=u.isFunction(a)?a(e):a,u.format(e.attr(u.attr(t+"-msg"))||e.attr("validationMessage")||e.attr("title")||a||"",r,e.attr(t)||e.attr(u.attr(t)))},_checkValidity:function(e){var t,n=this.options.rules;for(t in n)if(!n[t].call(this,e))return{valid:!1,key:t};return{valid:!0}},errors:function(){var e,t=[],n=this._errors;for(e in n)t.push(n[e]);return t}});u.ui.plugin(M)}(window.kendo.jQuery),window.kendo},n(0))},56:function(e,t,n){var a=n(93);"string"==typeof a&&(a=[[e.i,a,""]]);n(8)(a,{});a.locals&&(e.exports=a.locals)},6:function(e,t,n){var a,r,i;n(41),function(o,u){"use strict";r=[n(3),n(1),n(2),n(4),n(5)],a=o,i="function"==typeof a?a.apply(t,r):a,!(void 0!==i&&(e.exports=i))}(function(){"use strict";return function(e,t){function n(t){e(t.currentTarget).removeClass(F)}function a(t){e(t.currentTarget).addClass(F)}function r(t){return t.which!==i.keys.ENTER&&t.keyCode!==i.keys.ENTER||(window.location.href=i.format(o.uris.webapp.pages,l.locale())+"?q="+encodeURIComponent(e(t.currentTarget).val()),!1)}var i=window.kendo,o=window.app,u=new window.Logger("app.menu"),l=o.i18n,s="blur",d="focus",p="keypress",c="#navbar-search-input",F="k-state-active";e(function(){e(c).on(s,n).on(d,a).on(p,r),u.debug({message:"Menu initialized in "+l.locale(),method:"document.ready"})})}(window.jQuery),window.app},n(0))},93:function(e,t,n){t=e.exports=n(7)(),t.push([e.i,"/**\n * Variables\n */\n/**\n * Bootstrap mixins\n * TODO: will be deprecated in v4 - See https://github.com/passy/autoprefixer-loader\n */\n/**\n * Custom mixins\n */\n.toolbar {\n  position: absolute;\n  top: 50px;\n  width: 100%;\n  border-left: none;\n  border-right: none;\n}\n.toolbar label {\n  font-weight: normal;\n}\n.wrapper {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: auto;\n  border: none;\n  top: 50px;\n  bottom: 44px;\n  -webkit-overflow-scrolling: touch;\n}\n/*********************************************\n * Site page\n ********************************************/\n#page-wrapper {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: auto;\n  border: none;\n  top: 50px;\n  bottom: 44px;\n  -webkit-overflow-scrolling: touch;\n  overflow-y: scroll;\n}\n#page-wrapper .container article {\n  margin-top: 3em;\n}\n#page-wrapper .container article img.img-responsive {\n  margin: 1.5em 0;\n}\n#page-wrapper .container article a:not(.k-button) {\n  border-bottom: dotted 1px;\n  text-decoration: none;\n}\n#page-wrapper .container article a:not(.k-button):hover {\n  border-bottom: none;\n  text-decoration: underline;\n  color: inherit;\n}\n/*********************************************\n * Small screens\n ********************************************/\n@media (max-height: 450px) {\n  header.hidden-print {\n    display: none !important;\n  }\n  #page-wrapper {\n    top: 0;\n    bottom: 0;\n  }\n  #page-wrapper .container article {\n    margin-top: 0;\n  }\n  footer.hidden-print {\n    display: none !important;\n  }\n}\n/*********************************************\n * Printing\n ********************************************/\n@media print {\n  #page-wrapper {\n    position: relative;\n    top: 0px;\n    overflow: visible;\n  }\n  #page-wrapper .container {\n    width: auto;\n  }\n}\n",""])}},[134]);
//# sourceMappingURL=page.bundle.js.map?v=0.2.88