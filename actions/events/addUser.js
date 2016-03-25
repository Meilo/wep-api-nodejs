/**
 * Created by Ludovic on 25/03/2016.
 */
module.exports = function(server) {
    return function(req, res, next) {
        var Event = server.models.Event;
        var User =  server.models.User;
        Event.findOne({title:req.params.name},function (err, events) {
            if(err) {
                return console.error(err);
            }
            if(JSON.stringify(req.params.name) === JSON.stringify(events.title))
            {
                if(err) {
                    return res.status(500).send(err);
                }
                Event.update({_id: events._id}, { $set: {events:events.users.push(req.auth.userId)} }, function (err, data) {
                    if(err) {
                        return res.status(500).send(err);
                    }
                });

                User.update({_id: req.auth.userId}, { $set: {events:[events._id]} }, function (err, data) {
                    if(err) {
                        return res.status(500).send(err);
                    }
                });
            }
            res.status(200).send('add ok');
        });
    }
};