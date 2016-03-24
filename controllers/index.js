module.exports = function(server){
  server.controllers = {
    todos: require('./todos')(server),
    users: require('./users')(server),
    auth: require('./auth')(server),
    roles: require('./roles')(server)
  }
};