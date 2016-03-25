/**
 * Created by Ludovic on 25/03/2016.
 */
module.exports = function(server) {
    return function (req, res, next) {
        var Categories = server.models.Category;
        var categories = new Categories(req.body);
        categories.save(function (err, data) {
            if (err) {
                return res.status(500).send(err);
            }
            res.json(data);
        });
    }
};