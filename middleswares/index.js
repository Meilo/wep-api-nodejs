/**
 * Created by Ludovic on 23/03/2016.
 */
module.exports =  function (server) {
    server.middleswares = {
        ensureAuthenticated: require('./ensureAuthenticated')(server),
        ensureBodyFields: require('./ensureBodyFields')(server),
        cache: require('./cache')(server),
        cacheSetter: require('./cacheSetter')(server)
    }
};