webpackJsonp([20],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-2015 Memba Sarl. All rights reserved.
	 * Sources at https://github.com/Memba
	 */
	
	/* jshint browser: true, jquery: true */
	/* globals require: false */
	
	(function ($, undefined) {
	
	    'use strict';
	
	    __webpack_require__(14);
	    __webpack_require__(3);
	
	    var app = window.app = window.app || {},
	        logEntry = {
	            module: 'app.home',
	            sessionId: $('#session').val()
	        };
	
	    /**
	     * Wait until document is ready to initialize UI
	     */
	    $(document).on('locale.loaded', function() {
	        app.logger.info($.extend(logEntry, { message: 'home page initialized in ' + app.locale.value() }));
	    });
	
	}(window.jQuery));


/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./app.page.home.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./app.page.home.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(74)();
	exports.push([module.id, "/**\n * Variables\n */\n/**\n * Bootstrap mixins\n * TODO: will be deprecated in v4 - See https://github.com/passy/autoprefixer-loader\n */\n/**\n * Custom mixins\n */\n.toolbar {\n  position: absolute;\n  top: 50px;\n  width: 100%;\n  border-left: none;\n  border-right: none;\n}\n.toolbar label {\n  font-weight: normal;\n}\n.splitter {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: auto;\n  border: none;\n  top: 50px;\n  bottom: 44px;\n}\n.wrapper {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: auto;\n  border: none;\n  top: 50px;\n  bottom: 44px;\n  overflow-y: scroll;\n}\n/*********************************************\n * Site page\n ********************************************/\n#home-wrapper {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: auto;\n  border: none;\n  top: 50px;\n  bottom: 44px;\n  overflow-y: scroll;\n}\n#home-wrapper .jumbotron {\n  background: url("+__webpack_require__(195)+") no-repeat center center;\n  background-size: cover;\n  height: 60%;\n}\n#home-wrapper .container .col-sm-6 {\n  margin-bottom: 20px;\n  text-align: center;\n}\n#home-wrapper .container .col-sm-6 .flag {\n  height: 160px;\n  width: 160px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n#home-wrapper .container .col-sm-6 .uk {\n  background: url("+__webpack_require__(196)+") no-repeat center center;\n}\n#home-wrapper .container .col-sm-6 .fr {\n  background: url("+__webpack_require__(197)+") no-repeat center center;\n}\n#home-wrapper .container .col-sm-6 h2 {\n  font-weight: normal;\n}\n#home-wrapper .container .col-sm-6 p {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n/*********************************************\n * Printing\n ********************************************/\n@media print {\n  .container {\n    width: auto;\n  }\n  #page-wrapper {\n    position: relative;\n    top: 0px;\n    overflow: visible;\n  }\n}\n", ""]);

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "cb164637a68c5eccae23f2cd472c88e3.jpg"

/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7b86e776fa941fcaaa291c1811b569d4.png"

/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "427e4f9cf2fe0ef7ed77c8807de1eb0a.png"

/***/ }

});
//# sourceMappingURL=home.bundle.js.map