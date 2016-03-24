/**
 * Created by Ludovic on 24/03/2016.
 */
var Redis = require('ioredis');
module.exports = function (server) {
    server.cache.redis = new Redis(server.settings.db.cache)
};