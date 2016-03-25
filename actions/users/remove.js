/**
 * Created by Ludovic on 25/03/2016.
 */
module.exports = function(server) {
    return function(req, res, next) {
        var User = server.models.User;
        User.remove({_id: req.params.id}, function (err, data) {
            if(err){
                return res.status(500).send(err);
            }
        });
        res.status(200).send('remove ok');
    }
};