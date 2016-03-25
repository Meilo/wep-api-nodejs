/**
 * Created by Ludovic on 25/03/2016.
 */
module.exports = function(server) {
    return {
        create: require('./create')(server),
        update: require('./update')(server),
        remove: require('./remove')(server),
        get: require('./get')(server),
        addUser: require('./addUser')(server),
        getUsersEvents: require('./getUsersEvents')(server)
        //me: require('./me')(server)
    }
};