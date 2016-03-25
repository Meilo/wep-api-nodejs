/**
 * Created by Ludovic on 25/03/2016.
 */
var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function (server) {
    router.get('/', server.actions.categories.get);
    router.post('/', bodyparser, server.actions.categories.create);

    return router;
};