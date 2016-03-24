var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function (server) {
    router.get('/', server.middleswares.ensureAuthenticated, server.controllers.users.get);
    router.get('/me', server.middleswares.ensureAuthenticated, server.controllers.users.me);
    router.post('/', bodyparser, server.middleswares.ensureBodyFields(['username', 'email', 'password']), server.controllers.users.create);
    router.put('/', bodyparser, server.middleswares.ensureAuthenticated, server.controllers.users.update);
    router.delete('/', bodyparser, server.middleswares.ensureAuthenticated, server.controllers.users.remove);

    return router;
};