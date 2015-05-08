/**
 * Copyright (c) 2013-2015 Memba Sarl. All rights reserved.
 * Sources at https://github.com/Memba
 */

/* jshint node: true */

'use strict';

var convert = require('../lib/convert'),
    db = require('../lib/db');

module.exports = {

    /**
     * Search index for content by site_url
     * @param site_url
     * @param callback
     */
    findBySiteUrl: function(site_url, callback) {
        var language = convert.site_url2language(site_url);
        db[language].find({site_url: site_url}, function(error, indexEntries) {
            if(!error && Array.isArray(indexEntries) && indexEntries.length) {
                callback(error, indexEntries);
            } else {
                callback(error);
            }
        });
    },

    /**
     * Search index for one entry by path
     * @param path
     * @param callback
     */
    findOneByPath: function(path, callback) {
        var language = convert.path2language(path);
        db[language].find({path: path}, function(error, indexEntries) {
            if(!error && Array.isArray(indexEntries) && indexEntries.length) {
                callback(error, indexEntries[0]);
            } else {
                callback(error);
            }
        });
    }

};
