/**
 * Created by Ludovic on 25/03/2016.
 */
module.exports = function(server) {
    return {
        get: require('./get')(server),
        create: require('./create')(server)
        //me: require('./me')(server)
    }
};