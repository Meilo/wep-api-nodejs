/**
 * Created by Ludovic on 23/03/2016.
 */
var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function (server) {
    router.post('/login', bodyparser, server.controllers.auth.login);
    router.post('/logout', bodyparser, server.middleswares.ensureAuthenticated, server.controllers.auth.logout);
    return router;
};