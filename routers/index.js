/**
 * Created by Ludovic on 21/03/2016.
 */
module.exports =  function (server) {
    server.use('/todos', require('./todos')(server));
    server.use('/users', require('./users')(server));
    server.use('/auth', require('./auth')(server));
    server.use('/roles', require('./roles')(server));
};