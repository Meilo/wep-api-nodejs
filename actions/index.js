/**
 * Created by Ludovic on 25/03/2016.
 */
module.exports = function(server){
    server.actions = {
        users: require('./users')(server),
        events: require('./events')(server),
        categories: require('./categories')(server),
        auth: require('./auth')(server)
    }
};