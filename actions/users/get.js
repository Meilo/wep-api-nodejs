/**
 * Created by Ludovic on 25/03/2016.
 */
module.exports =  function(server){
    return function(req, res, next){
        var User = server.models.User;
        User.find(function (err, users) {
            if (err) {
                return console.error(err);
            }
            res.json(users);
        });
    }
};