/*! Copyright ©2013-2016 Memba® Sarl. All rights reserved. - Version 0.1.5 dated 4/22/2016 */
/*! Copyright ©2013-2016 Memba® Sarl. All rights reserved. - Version 0.1.5 dated 4/22/2016 */
webpackJsonp([19],{0:function(e,o,n){var t,r,i;n(517),function(a,p){"use strict";r=[n(200),n(202),n(204),n(203),n(219),n(522)],t=a,i="function"==typeof t?t.apply(o,r):t,!(void 0!==i&&(e.exports=i))}(function(){"use strict";return function(e,o){var n=window.app,t=new window.Logger("app.home"),r=n.i18n;e(document).ready(function(){t.info({message:"home page initialized in "+r.locale(),method:"$(document).ready"})})}(window.jQuery),window.app},n(201))},517:function(e,o,n){var t=n(518);"string"==typeof t&&(t=[[e.id,t,""]]);n(199)(t,{});t.locals&&(e.exports=t.locals)},518:function(e,o,n){o=e.exports=n(198)(),o.push([e.id,".toolbar{position:absolute;top:50px;width:100%;border-left:none;border-right:none}.toolbar label{font-weight:400}.splitter{position:absolute;left:0;right:0;height:auto;border:none;top:50px;bottom:44px}#home-wrapper,.wrapper{position:absolute;left:0;right:0;height:auto;border:none;top:50px;bottom:44px;overflow-y:scroll}#home-wrapper .jumbotron{background:url("+n(519)+") no-repeat center center;background-size:cover;height:60%;margin-bottom:4vh}#home-wrapper .jumbotron h1{color:#fff;width:60%;top:30%;right:5%;position:absolute;font-size:7vmin;text-shadow:0 0 2vmin #333}#home-wrapper .container .col-xs-6{text-align:center}#home-wrapper .container .col-xs-6 .flag{height:15vh;width:15vh;border-radius:50%;margin:0 auto}#home-wrapper .container .col-xs-6 .uk{background:url("+n(520)+") no-repeat center center;background-size:15.2vh 15.2vh}#home-wrapper .container .col-xs-6 .fr{background:url("+n(521)+") no-repeat center center;background-size:15.2vh 15.2vh}#home-wrapper .container .col-xs-6 h2{font-weight:400;font-size:4vh;line-height:1em;margin-top:2vh;margin-bottom:1vh}#home-wrapper .container .col-xs-6 p{font-size:2vh;margin:0 10px;line-height:1.2em}@media print{#page-wrapper{position:relative;top:0;overflow:visible}#page-wrapper .container{width:auto}}",""])},519:function(e,o,n){e.exports=n.p+"47120e35b461638cf2038d63dece4402.jpg"},520:function(e,o,n){e.exports=n.p+"cdfd82cd7caa66cfe027d1702b434bd9.png"},521:function(e,o,n){e.exports=n.p+"cbb99b5861be0813c86d8b564e49a468.png"},522:function(e,o,n){var t,r,i;n(258),function(a,p){"use strict";r=[n(210),n(200),n(202),n(204),n(203)],t=a,i="function"==typeof t?t.apply(o,r):t,!(void 0!==i&&(e.exports=i))}(function(){"use strict";return function(e,o){function n(o){e(o.currentTarget).width(i)}function t(o){e(o.currentTarget).width(400)}function r(o){return o.which===a.keys.ENTER||o.keyCode===a.keys.ENTER?(window.location.href=a.format(p.uris.webapp.pages,u.locale())+"?q="+encodeURIComponent(e(o.currentTarget).val()),!1):!0}var i,a=window.kendo,p=window.app,c=new window.Logger("app.menu"),u=p.i18n,d="blur",s="focus",h="keypress";e(document).ready(function(){var o=e("#navbar-search-input");i=o.width(),o.on(d,n).on(s,t).on(h,r),c.info({message:"Menu initialized in "+u.locale(),method:"$(document).ready"})})}(window.jQuery),window.app},n(201))}});
//# sourceMappingURL=home.bundle.js.map?v=0.1.5