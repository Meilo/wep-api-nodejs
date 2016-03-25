/**
 * Created by Ludovic on 25/03/2016.
 */
var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function (server) {
    router.get('/', server.middlewares.ensureAuthenticated, server.actions.users.get);
    //router.get('/me', server.actions.users.me);
    router.post('/', bodyparser, server.actions.users.create);
    router.put('/:id', bodyparser, server.middlewares.ensureAuthenticated, server.actions.users.update);
    router.delete('/:id', server.middlewares.ensureAuthenticated, server.actions.users.remove);

    return router;
};