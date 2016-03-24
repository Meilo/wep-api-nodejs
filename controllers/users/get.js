/**
 * Created by Ludovic on 23/03/2016.
 */
module.exports =  function(server){
    return function(req, res, next){
        var User = server.models.User;
        User.findOne({_id: req.auth.userId},function (err, users) {
            if(err){
                return console.error(err);
            }
            if(users.status){
                User.find(function (err, data) {
                    if(err){
                        return console.error(err);
                    }
                    res.json(data);
                });
            }else{
                return res.status(401).send("unauthorized for this action");
            }

        });
    }
};