/**
 * Copyright (c) 2013-2018 Memba Sarl. All rights reserved.
 * Sources at https://github.com/Memba
 */

/* jshint browser: true, jquery: true */
/* globals define: false, require: false */

// Bootstrap menus
require('./vendor/bootstrap/dropdown.js');

(function (f, define) {
    'use strict';
    define([
        './vendor/kendo/kendo.core',
        './window.assert',
        './window.logger',
        './app.logger',
        './app.i18n'
    ], f);
})(function () {

    'use strict';

    (function ($, undefined) {

        var kendo = window.kendo;
        var app = window.app;
        var logger = new window.Logger('app.menu');
        var i18n = app.i18n;
        var BLUR = 'blur';
        var FOCUS = 'focus';
        var KEYPRESS = 'keypress';
        var SEARCH_INPUT = '#navbar-search-input';
        var ACTIVE_CLASS = 'k-state-active';

        /**
         * Event handler triggered when the search input loses focus
         * @param e
         */
        function onSearchInputBlur(e) {
            $(e.currentTarget).removeClass(ACTIVE_CLASS);
        }

        /**
         * Event handler triggered when the search input gets focus
         * @param e
         */
        function onSearchInputFocus(e) {
            $(e.currentTarget).addClass(ACTIVE_CLASS);
        }

        /**
         * Event handler triggered when pressing any key when the search input has focus
         * @param e
         */
        function onSearchInputKeyPress(e) {
            if (e.which === kendo.keys.ENTER || e.keyCode === kendo.keys.ENTER) {
                window.location.href = kendo.format(app.uris.webapp.pages, i18n.locale()) +
                    '?q=' + encodeURIComponent($(e.currentTarget).val());
                return false; // Prevent a form submission
            } else {
                return true; // Accept any other character
            }
        }

        /**
         * Initialization code to execute when document is ready
         */
        $(function () {
            // Search input event handlers
            $(SEARCH_INPUT)
                .on(BLUR, onSearchInputBlur)
                .on(FOCUS, onSearchInputFocus)
                .on(KEYPRESS, onSearchInputKeyPress);

            // Log page readiness
            logger.debug({
                message: 'Menu initialized in ' + i18n.locale(),
                method: 'document.ready'
            });
        });

    }(window.jQuery));

    return window.app;

}, typeof define === 'function' && define.amd ? define : function (_, f) { 'use strict'; f(); });
