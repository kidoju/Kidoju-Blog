/**
 * Copyright (c) 2013-2018 Memba Sarl. All rights reserved.
 * Sources at https://github.com/Memba
 */

const request = require('supertest'); // eslint-disable-line node/no-unpublished-require
const util = require('util');
const config = require('../../../webapp/config');

// We cannot define the app like follows because the server is already running
// const app = request('../../../webapp/server');
const app = config.get('uris:webapp:root');

describe('routes/feedRoute', () => {
    it('it should return an english feed', done => {
        request(app)
            .get(util.format(config.get('uris:webapp:feed'), 'en'))
            .expect(200)
            .expect('Content-Type', /rss/)
            .end(done);
    });

    it('it should return a french feed', done => {
        request(app)
            .get(util.format(config.get('uris:webapp:feed'), 'fr'))
            .expect(200)
            .expect('Content-Type', /rss/)
            .end(done);
    });
});
