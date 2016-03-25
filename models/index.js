/**
 * Created by Ludovic on 25/03/2016.
 */
var mongoose = require('mongoose');

module.exports = function(server) {
    server.mongoose = mongoose.connect(server.settings.db.mongo);
    server.models = {
        Event: require('./events')(server),
        Category: require('./categories')(server),
        User: require('./users')(server),
        Token: require('./token')(server)
    }
};