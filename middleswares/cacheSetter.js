/**
 * Created by Ludovic on 24/03/2016.
 */
module.exports =  function (server) {
    return function (req, res, next) {
        server.cache.redis.set(req.body, req.body.todos);
        console.log(req.originalUrl);
        res.json(req.body.todos);
    }
};