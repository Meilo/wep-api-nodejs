/**
 * Created by Ludovic on 25/03/2016.
 */
var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function (server) {
    router.get('/', server.middlewares.ensureAuthenticated, server.actions.events.get);
    router.get('/list-user/:name', server.middlewares.ensureAuthenticated, server.actions.events.getUsersEvents);
    //router.get('/me', server.actions.users.me);
    router.post('/', bodyparser, server.middlewares.ensureAuthenticated, server.actions.events.create);
    router.put('/:id', bodyparser, server.middlewares.ensureAuthenticated, server.actions.events.update);
    router.put('/userAdd/:name', bodyparser, server.middlewares.ensureAuthenticated, server.actions.events.addUser);
    router.delete('/:id', server.middlewares.ensureAuthenticated, server.actions.events.remove);

    return router;
};