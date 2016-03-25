/**
 * Created by Ludovic on 25/03/2016.
 */
var jwt = require('jsonwebtoken');
var sha1 = require('sha1');

module.exports =  function(server){
    return function(req, res, next) {
        var User = server.models.User;
        var Token = server.models.Token;

        if (!req.body.Email || !req.body.Password)
            return res.status(400).send('missign data');
        User.findOne({
            Email: req.body.Email,
            Password: req.body.Password
        }, function (err, user) {
            if (err)
                return res.status(500).send(err);
            if (!user)
                return res.status(422).send("error");

            new Token({
                userId: user._id
            }).save(function (err, token) {
                if(err)
                    return res.status(500).send(err);

                var accessToken = jwt.sign({
                    accessToken: token
                }, server.settings.TOKEN_SECRET);
                res.send(accessToken);
            });
        });
    }
};