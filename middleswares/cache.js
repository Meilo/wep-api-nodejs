/**
 * Created by Ludovic on 24/03/2016.
 */
module.exports =  function (server) {
    return function (req, res, next) {
        server.cache.redis.get(req.body, function (err, data) {
            if(data != null)
                return res.json(data);
            next();
        });
    }
};