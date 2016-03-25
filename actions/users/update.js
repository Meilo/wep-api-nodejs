/**
 * Created by Ludovic on 25/03/2016.
 */
module.exports = function(server) {
    return function(req, res, next) {
        var User = server.models.User;
        User.find(function (err, users) {
            for(var i=0; i<users.length; i++)
            {
                if(JSON.stringify(req.params.id) === JSON.stringify(users[i]._id))
                {
                    User.update({_id: users[i]._id}, { $set: req.body }, { multi:true }, function (err, data) {
                        if(err) {
                            return res.status(500).send(err);
                        }
                    });
                }
            }
            if(err) {
                return console.error(err);
            }
            res.status(200).send('update ok');
        });
    }
};