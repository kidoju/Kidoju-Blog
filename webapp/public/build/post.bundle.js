/*! Copyright ©2013-2016 Memba® Sarl. All rights reserved. - Version 0.2.84 dated 1/25/2017 */
/*! Copyright ©2013-2016 Memba® Sarl. All rights reserved. - Version 0.2.84 dated 1/25/2017 */
webpackJsonp([22],{0:function(t,e,o){var n,r,i;o(456),function(a,p){"use strict";r=[o(187),o(189),o(191),o(190),o(205),o(450)],n=a,i="function"==typeof n?n.apply(e,r):n,!(void 0!==i&&(t.exports=i))}(function(){"use strict";return function(t,e){function o(){t(d).find(l).on(s,function(e){a.instanceof(t.Event,e,r.format(a.messages.instanceof.default,"e","default")),a.instanceof(window.HTMLAnchorElement,e.currentTarget,r.format(a.messages.instanceof.default,"e.currentTarget","window.HTMLAnchorElement"));var o,p=window.encodeURIComponent(t('meta[property="og:url"]').attr("content")),s=window.encodeURIComponent(t('meta[property="og:site_name"]').attr("content")),d=window.encodeURIComponent(t('meta[property="og:title"]').attr("content")),l=window.encodeURIComponent(t('meta[property="og:description"]').attr("content")),m=window.encodeURIComponent(t('meta[property="og:image"]').attr("content")),g=t(e.currentTarget).attr(r.attr("command"));switch(g){case w.FACEBOOK:o="https://www.facebook.com/dialog/share?display=popup&app_id="+i.facebook.clientID+"&href="+p+"&redirect_uri="+p;break;case w.GOOGLE:o="https://plus.google.com/share?url="+p+"&hl="+c.locale();break;case w.LINKEDIN:o="https://www.linkedin.com/shareArticle?mini=true&source="+s+"&summary="+l+"&title="+d+"&url="+p;break;case w.PINTEREST:o="https://pinterest.com/pin/create/button/?url="+p+"&media="+m+"&description="+l;break;case w.TWITTER:o="https://twitter.com/intent/tweet?text="+d+"&url="+p+"&via="+i.twitter.account;break;case w.EMAIL:o="mailto:info@memba.org?&subject=Shared Link&body=Hey%20loojk%20at%20that"}(null===u||u.closed||n!==o)&&(u=window.open(o,"social","toolbar=0,status=0,menubar=0,height=450,width=600")),n=o,u&&t.isFunction(u.focus)&&u.focus()})}var n,r=window.kendo,i=window.app,a=window.assert,p=new window.Logger("app.post"),c=i.i18n,s="click",d="#post-wrapper",l=".social",w={FACEBOOK:"facebook",GOOGLE:"google",LINKEDIN:"linkedin",PINTEREST:"pinterest",TWITTER:"twitter",EMAIL:"email"},u=null;t(function(){o(),p.info({message:"post page initialized in "+c.locale(),method:"document.ready"})})}(window.jQuery),window.app},o(188))},450:function(t,e,o){var n,r,i;o(244),function(a,p){"use strict";r=[o(196),o(187),o(189),o(191),o(190)],n=a,i="function"==typeof n?n.apply(e,r):n,!(void 0!==i&&(t.exports=i))}(function(){"use strict";return function(t,e){function o(e){t(e.currentTarget).removeClass(u)}function n(e){t(e.currentTarget).addClass(u)}function r(e){return e.which!==i.keys.ENTER&&e.keyCode!==i.keys.ENTER||(window.location.href=i.format(a.uris.webapp.pages,c.locale())+"?q="+encodeURIComponent(t(e.currentTarget).val()),!1)}var i=window.kendo,a=window.app,p=new window.Logger("app.menu"),c=a.i18n,s="blur",d="focus",l="keypress",w="#navbar-search-input",u="k-state-active";t(function(){t(w).on(s,o).on(d,n).on(l,r),p.debug({message:"Menu initialized in "+c.locale(),method:"document.ready"})})}(window.jQuery),window.app},o(188))},456:function(t,e,o){var n=o(457);"string"==typeof n&&(n=[[t.id,n,""]]);o(186)(n,{});n.locals&&(t.exports=n.locals)},457:function(t,e,o){e=t.exports=o(185)(),e.push([t.id,".toolbar{position:absolute;top:50px;width:100%;border-left:none;border-right:none}.toolbar label{font-weight:400}#post-wrapper,.wrapper{position:absolute;left:0;right:0;height:auto;border:none;top:50px;bottom:44px;-webkit-overflow-scrolling:touch}#post-wrapper{overflow-y:scroll}#post-wrapper .container article{margin-top:3em}#post-wrapper .container article div.embed-responsive,#post-wrapper .container article img.img-responsive{margin:1.5em 0}#post-wrapper .container article a:not(.k-button){border-bottom:1px dotted;text-decoration:none}#post-wrapper .container article a:not(.k-button):hover{border-bottom:none;text-decoration:underline;color:inherit}#post-wrapper .container section:not(.group){margin-bottom:40px;text-align:right}#post-wrapper .container section:not(.group) .social{border:0}#post-wrapper .container section:not(.group) .social img{height:40px;width:40px}#post-wrapper .container section.group{margin-bottom:40px}#post-wrapper .container section.group img{height:28px;width:28px;vertical-align:top}#post-wrapper .container section.group div.list-group img{height:24px;width:24px}@media (max-height:450px){header.hidden-print{display:none!important}#post-wrapper{top:0;bottom:0}footer.hidden-print{display:none!important}}@media print{#post-wrapper{position:relative;top:0;overflow:visible}#post-wrapper .container{width:auto}}",""])}});
//# sourceMappingURL=post.bundle.js.map?v=0.2.84