/**
 * Copyright (c) 2013-2018 Memba Sarl. All rights reserved.
 * Sources at https://github.com/Memba
 */

/* eslint-disable no-unused-expressions */

const chai = require('chai');
const http = require('http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const url = require('url');
const util = require('util');
const config = require('../../../webapp/config');
const extension = require('../../../webapp/middleware/extension.es6');

const root = config.get('uris:webapp:root');
const feed = config.get('uris:webapp:feed');
const sitemap = config.get('uris:webapp:sitemap');

const { expect } = chai;
chai.use(sinonChai);

class Response {
    constructor() {
        this._send = sinon.spy();
        this._set = sinon.spy();
        this._status = sinon.spy();
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
}

describe('middleware/extension', () => {
    it('Anything without extension should go through', () => {
        const req = { originalUrl: url.resolve(root, 'a/b/c') };
        const res = new Response();
        const next = sinon.spy();
        extension.handler(req, res, next);
        expect(res._status).not.to.have.been.called;
        expect(res._set).not.to.have.been.called;
        expect(res._send).not.to.have.been.called;
        expect(next).to.have.been.called;
    });

    it('/sitemap.xml should go through', () => {
        const req = {
            originalUrl: url.resolve(
                root,
                util.format(sitemap, '').replace('//', '/')
            )
        };
        const res = new Response();
        const next = sinon.spy();
        extension.handler(req, res, next);
        expect(res._status).not.to.have.been.called;
        expect(res._set).not.to.have.been.called;
        expect(res._send).not.to.have.been.called;
        expect(next).to.have.been.called;
    });

    it('/en/sitemap.xml should go through', () => {
        const req = {
            originalUrl: url.resolve(root, util.format(sitemap, 'en'))
        };
        const res = new Response();
        const next = sinon.spy();
        extension.handler(req, res, next);
        expect(res._status).not.to.have.been.called;
        expect(res._set).not.to.have.been.called;
        expect(res._send).not.to.have.been.called;
        expect(next).to.have.been.called;
    });

    it('/fr/rss.xml should go through', () => {
        const req = { originalUrl: url.resolve(root, util.format(feed, 'fr')) };
        const res = new Response();
        const next = sinon.spy();
        extension.handler(req, res, next);
        expect(res._status).not.to.have.been.called;
        expect(res._set).not.to.have.been.called;
        expect(res._send).not.to.have.been.called;
        expect(next).to.have.been.called;
    });

    it('/dummy/image.jpg should return plain text 404', () => {
        const req = { originalUrl: url.resolve(root, '/dummy/image.jpg') };
        const res = new Response();
        const next = sinon.spy();
        extension.handler(req, res, next);
        expect(res._status).to.have.been.calledWith(404);
        expect(res._set).to.have.been.calledWith({
            'Content-Type': 'text/plain; charset=utf-8'
        });
        expect(res._send).to.have.been.calledWith(http.STATUS_CODES['404']);
        expect(next).not.to.have.been.called;
    });
});