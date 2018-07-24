/**
 * Copyright (c) 2013-2018 Memba Sarl. All rights reserved.
 * Sources at https://github.com/Memba
 */

/* eslint-disable no-unused-expressions */

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { format } = require('util');
const url = require('url');

const ApplicationError = require('../../../webapp/lib/applicationError.es6');
const config = require('../../../webapp/config/index.es6');
const error = require('../../../webapp/middleware/error.es6');

const { expect } = chai;
chai.use(sinonChai);

const locale = 'en';
const whatever = 'whatever';

class Response {
    constructor() {
        this._json = sinon.spy();
        this._send = sinon.spy();
        this._set = sinon.spy();
        this._status = sinon.spy();
        this._vary = sinon.spy();
    }

    // eslint-disable-next-line class-methods-use-this
    __() {}

    // eslint-disable-next-line class-methods-use-this
    getLocale() {
        return locale;
    }

    // eslint-disable-next-line class-methods-use-this
    get locals() {
        return {
            config: config.get(),
            format,
            // moment: require('moment');
            url
        };
    }

    json(options) {
        this._json(options);
        return this; // Support chaining
    }

    render(template, data) {
        this._template = template;
        this._data = data;
        return this; // Support chaining
    }

    send(options) {
        this._send(options);
        return this; // Support chaining
    }

    set(options) {
        this._set(options);
        return this; // Support chaining
    }

    status(options) {
        this._status(options);
        return this; // Support chaining
    }

    vary(options) {
        this._vary(options);
        return this; // Support chaining
    }
}

describe('middleware/error', () => {
    describe('api json errors', () => {
        it('report an uncaught error', () => {
            const err = new Error('Oops!');
            const req = {};
            const res = new Response();
            error.handler(err, req, res);
            expect(res._status).to.have.been.calledWith(500);
            expect(res._json).to.have.been.calledWithMatch(
                args =>
                    args.error instanceof ApplicationError &&
                    args.error.originalError.message === err.message
            );
        });

        it('report a mongoose error', () => {
            const err = new mongoose.Error.ValidationError('Oops!');
            const req = {};
            const res = new Response();
            error.handler(err, req, res);
            expect(res._status).to.have.been.calledWith(500);
            expect(res._json).to.have.been.calledWithMatch(
                args =>
                    args.error instanceof ApplicationError &&
                    args.error.originalError.message === err.message
            );
        });

        it('report a body-parser error', () => {
            const err = new Error('Oops!');
            const req = {};
            const res = new Response();
            error.handler(err, req, res);
            expect(res._status).to.have.been.calledWith(500);
            expect(res._json).to.have.been.calledWithMatch(
                args =>
                    args.error instanceof ApplicationError &&
                    args.error.originalError.message === err.message
            );
        });

        it('report not found', () => {
            const err = new ApplicationError(404);
            const req = {};
            const res = new Response();
            error.handler(err, req, res);
            expect(res._status).to.have.been.calledWith(404);
            expect(res._json).to.have.been.calledWithMatch(
                args => args.error instanceof ApplicationError
            );
        });
    });

    describe('webapp html errors', () => {
        function assertCommonProperties(res) {
            expect(res.getLocale()).to.equal(locale);
            expect(res._set['Cache-Control']).to.equal('no-cache');
            expect(res._set['Content-Language']).to.equal(locale);
            expect(res._set['Content-Type']).to.equal(
                'text/html; charset=utf-8'
            );
            expect(res._template).to.equal('error');
            expect(res._vary).to.equal('Accept-Encoding');
            expect(res.__()).to.equal(whatever);
        }

        it('report an uncaught error', () => {
            const err = new Error('Oops!');
            const req = { method: 'GET' };
            const res = new Response({ html: true });
            error.handler(err, req, res);
            expect(res._data).to.have.property('author');
            expect(res._data).to.have.property('description');
            expect(res._data).to.have.property('icon');
            expect(res._data).to.have.property('keywords');
            expect(res._data).to.have.property('menu');
            expect(res._data).to.have.property('results');
            expect(res._data).to.have.property('site_url');
            expect(res._data).to.have.property('title'); // TODO title is undefined
            expect(res._data).to.have.property('trace');
            expect(res._status).to.equal(500);
        });

        it('report not found', () => {
            const err = new ApplicationError(404);
            const req = { method: 'GET' };
            const res = new Response({ html: true });
            error.handler(err, req, res);
            expect(res._data).to.have.property('author');
            expect(res._data).to.have.property('description');
            expect(res._data).to.have.property('icon');
            expect(res._data).to.have.property('keywords');
            expect(res._data).to.have.property('menu');
            expect(res._data).to.have.property('results');
            expect(res._data).to.have.property('site_url');
            expect(res._data).to.have.property('title'); // TODO title is undefined
            expect(res._data).to.have.property('trace');
            expect(res._status).to.equal(404);
        });
    });
});
