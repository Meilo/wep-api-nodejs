/**
 * Created by Ludovic on 23/03/2016.
 */
var jwt = require('jsonwebtoken');

module.exports =  function (server) {
    return function (req, res, next) {
        var Token = server.models.Token;
        if(!req.headers.authorization)
            return res.status(401).send('unauthorized');

        jwt.verify(req.headers.authorization, "secret_foobar", function (err, verified) {
            Token.findById(verified.accessToken, function (err, data) {
                if(err)
                    return res.status(500).send(err);
                if(!data)
                    return res.status(401).send('invalid token');
                
                req.auth = req.auth || {};
                req.auth.userId = data.userId;

                next();
            });
        });
    }
};