var sha1 = require("sha1");
module.exports = function(server){
    return function(req, res, next){
        req.body.password = sha1(req.body.password);
        var User = server.models.User;
        if (Array.isArray(req.body))
        {
            for(var i=0; i<req.body.length; i++)
            {
                var user =  new User(req.body[i]);
                user.save(function (err, data) {
                    if(err) {
                        return res.status(500).send(err);
                    }
                });
            }
        }else {
            var user = new User(req.body);
            user.save(function (err, data) {
                if (err) {
                    return res.status(500).send(err);
                }
            });
        }
        res.status(200).send('Create ok');
    }
};