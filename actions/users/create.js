/**
 * Created by Ludovic on 25/03/2016.
 */
module.exports = function(server) {
    return function (req, res, next) {
        var User = server.models.User;
        var user = new User(req.body);
        user.save(function (err, data) {
            console.log(data);
            if (err) {
                return res.status(500).send(err);
            }
            res.json(data);
        });
    }
};