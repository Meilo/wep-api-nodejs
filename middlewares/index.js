/**
 * Created by Ludovic on 25/03/2016.
 */
module.exports =  function (server) {
    server.middlewares = {
        ensureAuthenticated: require('./ensureAuthenticated')(server)
    }
};