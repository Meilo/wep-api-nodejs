/**
 * Created by Ludovic on 25/03/2016.
 */
module.exports = function(server) {
    return function (req, res, next) {
        var Events = server.models.Event;
        var Categories = server.models.Category;
        var categories = new Categories({"label": req.body.Categorie});
        categories.save(function (err, cat) {
            if (err) {
                return res.status(500).send(err);
            }
            delete req.body.Categorie;
            
            req.body.userId = req.auth.userId;
            var events = new Events(req.body);
            events.save(function (err, ev) {
                if (err) {
                    return res.status(500).send(err);
                }
                Categories.update({_id: cat._id}, { $set: {events: [ev._id]} }, { multi:true }, function (err, data) {
                    if(err) {
                        return res.status(500).send(err);
                    }
                });
                Events.update({_id: ev._id}, { $set: {categoryId:cat._id, users:[req.auth.userId]} }, { multi:true }, function (err, data) {
                    if(err) {
                        return res.status(500).send(err);
                    }
                });
            });
            //res.json('create ok');
        });

    }
};