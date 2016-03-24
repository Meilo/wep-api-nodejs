/**
 * Created by Ludovic on 23/03/2016.
 */
module.exports =  function(server){
    return function(req, res, next){
        var query = server.models.User
            .findOne({_id: req.auth.userId})
            .populate('todos')
            .populate('role');
        
        query.exec(function (err, users) {
            if(err){
                return console.error(err);
            }
            res.json(users);
        });
    }
};