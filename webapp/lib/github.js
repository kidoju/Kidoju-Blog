/**
 * Copyright (c) 2013-2015 Memba Sarl. All rights reserved.
 * Sources at https://github.com/Memba
 */

/* jshint node: true */

'use strict';

var request = require('request'),
    config = require('../config'),
    version = require('../../package.json').version,

    github = 'https://api.github.com',
    /*
    authentication = {
        user: process.env.USERNAME,
        pass: process.env.PASSWORD
    },
    */
    //Set a personal access token at https://github.com/settings/tokens
    headers = {
        'Authorization': 'token ' + process.env.TOKEN,
        'user-agent': 'Memba.Blog/' + version
    },
    repo = config.get('github:repository'),
    branch = config.get('github:branch');

module.exports = {

    /**
     * Get content from github
     * @see https://developer.github.com/v3/repos/contents/#get-contents
     * @param path
     * @param callback
     */
    getContent: function(path, callback) {
        var uri = github + '/repos/' + repo + '/contents/' + path,
            qs = { ref: branch };
        request({ method: 'GET', uri: uri, headers: headers, /*auth: authentication,*/ json: true, qs: qs }, function(error, response, body) {
            if(!error && response.statusCode === 200) {
                callback(null, body); //json: true in request options ensures that body is parsed to return an object
            } else {
                callback(error || new Error('Getting Github content returned status ' + response.statusCode + (body && body.message ? ': ' + body.message : '')));
            }
        });
    },

    /**
     * Create content into github
     * @see https://developer.github.com/v3/repos/contents/#create-a-file
     * @param path
     * @param content
     * @param callback
     */
    createContent: function(path, content, callback) {
        var uri = github + '/repos/' + repo + '/contents/' + path,
            data = {
                branch: branch,
                content: new Buffer(content).toString('base64'),
                message: 'System creation'
            };
        //Note content creation requires PUT instead of POST
        request({ method: 'PUT', uri: uri, headers: headers, /*auth: authentication,*/ json: true, body: data }, function(error, response, body) {
            if(!error && response.statusCode === 201) {
                callback(null, body);
            } else {
                callback(error || new Error('Creating Github content returned status ' + response.statusCode + (body && body.message ? ': ' + body.message : '')));
            }
        });
    },

    /**
     * Update content into github
     * @see https://developer.github.com/v3/repos/contents/#update-a-file
     * @param path
     * @param content
     * @param sha
     * @param callback
     */
    updateContent: function(path, content, sha, callback) {
        var uri = github + '/repos/' + repo + '/contents/' + path,
            data = {
                branch: branch,
                content: new Buffer(content).toString('base64'),
                message: 'System update',
                sha: sha
            };
        request({ method: 'PUT', uri: uri, headers: headers, /*auth: authentication,*/ json: true, body: data }, function(error, response, body) {
            if(!error && (response.statusCode === 200 || response.statusCode === 201)) {
                //updating content returns 200, except when updating deleted content which return 201 (like creation)
                callback(null, body);
            } else {
                callback(error || new Error('Updating Github content returned status ' + response.statusCode + (body && body.message ? ': ' + body.message : '')));
            }
        });
    },

    /**
     * Delete content from github
     * @see https://developer.github.com/v3/repos/contents/#delete-a-file
     * @param path
     * @param sha
     * @param callback
     */
    deleteContent: function(path, sha, callback) {
        var uri = github + '/repos/' + repo + '/contents/' + path,
            data = {
                branch: branch,
                message: 'System deletion',
                sha: sha
            };
        request({ method: 'DELETE', uri: uri, headers: headers, /*auth: authentication,*/ json: true, body: data }, function(error, response, body) {
            if(!error && response.statusCode === 200) {
                callback(null, body);
            } else {
                callback(error || new Error('Deleting Github content returned status ' + response.statusCode + (body && body.message ? ': ' + body.message : '')));
            }
        });
    },

    /**
     * Gets commits (especially to find author and date)
     * @see https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository
     * @param path
     * @param callback
     */
    getCommits: function(path, callback) {
        var uri = github + '/repos/' + repo + '/commits',
            qs = { path: path, sha: branch };
        request({ method: 'GET', uri: uri, headers: headers, /*auth: authentication,*/ json: true, qs: qs }, function(error, response, body) {
            if(!error && response.statusCode === 200) {
                callback(null, body);
            } else {
                callback(error || new Error('Getting Github commits returned status ' + response.statusCode + (body && body.message ? ': ' + body.message : '')));
            }
        });
    }

};
