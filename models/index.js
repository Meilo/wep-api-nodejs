var mongoose = require('mongoose');

module.exports = function(server) {
  server.mongoose = mongoose.connect(server.settings.db.mongo);
  server.models = {
    Todo: require('./todos')(server),
    User: require('./users')(server),
    Token: require('./token')(server),
    Role: require('./roles')(server)
  };
};