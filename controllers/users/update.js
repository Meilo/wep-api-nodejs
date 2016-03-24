/**
 * Created by Ludovic on 23/03/2016.
 */
module.exports = function (server) {
    return function (req, res, next) {
        var User = server.models.User;
        User.findOne({_id: req.auth.userId}, function (err, users) {
            if (req.body.password || req.body.status) {
                return res.status(401).send("Vous pouvez uniquement modifier le username et l'email")
            }
            else {
                if(users.status){
                    User.update({_id: req.body._id}, {$set: req.body}, {multi: true}, function (err, data) {
                        if (err) {
                            return res.status(500).send(err);
                        }
                    });
                }else{
                    User.update({_id: req.auth.userId}, {$set: req.body}, {multi: true}, function (err, data) {
                        if (err) {
                            return res.status(500).send(err);
                        }
                    });
                }
            }
            if (err) {
                return console.error(err);
            }
            res.status(200).send('ok');
        });
    }
};