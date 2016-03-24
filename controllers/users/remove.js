/**
 * Created by Ludovic on 23/03/2016.
 */
module.exports = function(server) {
    return function(req, res, next) {
        var User = server.models.User;
        User.findOne({_id: req.auth.userId}, function (err, users) {
            if(users.status) {
                User.remove({_id: req.body._id}, function (err, data) {
                    if (err) {
                        return res.status(500).send(err);
                    }
                });
                res.status(200).send('ok');
            }else {
                return res.status(401).send("unauthorized for this action");
            }
        });
    }
};