/**
 * Created by Ludovic on 23/03/2016.
 */
module.exports = function(server) {
    return {
        create: require('./create')(server),
        update: require('./update')(server),
        remove: require('./remove')(server),
        get: require('./get')(server),
        me: require('./me')(server)
    }
};