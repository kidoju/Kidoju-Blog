webpackJsonp([22],{131:function(n,o,t){var r,e,i;t(54),function(p,a){"use strict";e=[t(1),t(2),t(5),t(9)],r=p,i="function"==typeof r?r.apply(o,e):r,!(void 0!==i&&(n.exports=i))}(function(){"use strict";return function(n,o){var t=window.app,r=new window.Logger("app.error"),e=t.i18n;n(function(){n("#back-button").click(function(){window.history.back()}),r.info({message:"error page initialized in "+e.locale(),method:"document.ready"})})}(window.jQuery),window.app},t(0))},43:function(n,o){n.exports=jQuery},54:function(n,o,t){var r=t(91);"string"==typeof r&&(r=[[n.i,r,""]]);t(8)(r,{});r.locals&&(n.exports=r.locals)},91:function(n,o,t){o=n.exports=t(7)(),o.push([n.i,"/**\n * Variables\n */\n/**\n * Bootstrap mixins\n * TODO: will be deprecated in v4 - See https://github.com/passy/autoprefixer-loader\n */\n/**\n * Custom mixins\n */\n.toolbar {\n  position: absolute;\n  top: 50px;\n  width: 100%;\n  border-left: none;\n  border-right: none;\n}\n.toolbar label {\n  font-weight: normal;\n}\n.wrapper {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: auto;\n  border: none;\n  top: 50px;\n  bottom: 44px;\n  -webkit-overflow-scrolling: touch;\n}\n/*********************************************\n * Error page\n ********************************************/\n#error-wrapper {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: auto;\n  border: none;\n  top: 50px;\n  bottom: 44px;\n  -webkit-overflow-scrolling: touch;\n}\n/*********************************************\n * Small screens\n ********************************************/\n@media (max-height: 450px) {\n  header.hidden-print {\n    display: none !important;\n  }\n  #error-wrapper {\n    top: 0;\n    bottom: 0;\n  }\n  footer.hidden-print {\n    display: none !important;\n  }\n}\n/*********************************************\n * Printing\n ********************************************/\n@media print {\n  #error-wrapper {\n    position: relative;\n    top: 0px;\n    overflow: visible;\n  }\n  #error-wrapper .container {\n    width: auto;\n  }\n}\n",""])}},[131]);
//# sourceMappingURL=error.bundle.js.map?v=0.2.85