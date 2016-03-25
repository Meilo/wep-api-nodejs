/**
 * Created by Ludovic on 25/03/2016.
 */
module.exports = function(server) {
    return function(req, res, next) {
        var Event = server.models.Event;
        Event.find(function (err, events) {
            for(var i=0; i<events.length; i++)
            {
                if(JSON.stringify(req.params.id) === JSON.stringify(events[i]._id))
                {
                    Event.update({_id: events[i]._id}, { $set: req.body }, { multi:true }, function (err, data) {
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