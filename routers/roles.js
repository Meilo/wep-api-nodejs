/**
 * Created by Ludovic on 24/03/2016.
 */
var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function (server) {
    router.get('/', bodyparser, server.middleswares.ensureAuthenticated, server.controllers.roles.get);
    router.post('/', bodyparser, server.middleswares.ensureAuthenticated, server.controllers.roles.create);
    router.put('/', bodyparser, server.middleswares.ensureAuthenticated, server.controllers.roles.update);
    router.delete('/', bodyparser, server.middleswares.ensureAuthenticated, server.controllers.roles.remove);

    return router;
};