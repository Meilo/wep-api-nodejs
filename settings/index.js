/**
 * Created by Ludovic on 24/03/2016.
 */
module.exports = function (server) {
    var configFile = "./config.[env].json"
        .replace('[env]', process.env.NODE_ENV);
    console.log('settings Path: ', configFile);
    server.settings = require(configFile);
};
