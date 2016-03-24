/**
 * Created by Ludovic on 21/03/2016.
 */
var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function (server) {
    router.get('/', bodyparser, server.middleswares.ensureAuthenticated, server.middleswares.cache, server.controllers.todos.get, server.middleswares.cacheSetter);
    router.post('/', bodyparser, server.middleswares.ensureAuthenticated, server.controllers.todos.create);
    router.put('/', bodyparser, server.middleswares.ensureAuthenticated, server.controllers.todos.update);
    router.delete('/', bodyparser, server.middleswares.ensureAuthenticated, server.controllers.todos.remove);

    return router;
};