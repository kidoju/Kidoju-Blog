/**
 * Copyright (c) 2013-2019 Memba Sarl. All rights reserved.
 * Sources at https://github.com/Memba
 */

// https://github.com/benmosher/eslint-plugin-import/issues/1097
// eslint-disable-next-line import/extensions, import/no-extraneous-dependencies, import/no-unresolved
import $ from 'jquery';
import __ from '../app/app.i18n.es6';
import AppController from '../app/app.controller.es6';
import Logger from '../common/window.logger.es6';

// Import page styles
// import '../../styles/ui/error.page.scss';

const { history, location } = window;
const logger = new Logger('error.page');
const SELECTORS = {
    BACK_BUTTON: 'button.k-button',
};

/**
 * Controller
 * @class Controller
 * @extends AppController
 */
const Controller = AppController.extend({
    /**
     * init
     * @constructor init
     */
    init() {
        AppController.fn.init.call(this);
        // Wait until document is ready to initialize UI
        this.ready().then(() => {
            this.initBackButton();
            logger.info({
                message: `error page initialized in ${__.locale}`,
                method: 'init',
            });
        });
    },

    /**
     * initBackButton
     * @method initBackButton
     */
    initBackButton() {
        // Add click handler on back button
        $(SELECTORS.BACK_BUTTON).click((e) => {
            e.preventDefault();
            if (history && history.length > 1) {
                history.back();
            } else {
                location.assign('/');
            }
        });
    },
});

/**
 * Initialize page controller
 */
const controller = new Controller();

/**
 * Default export
 */
export default controller;
