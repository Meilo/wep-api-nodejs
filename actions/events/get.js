/**
 * Created by Ludovic on 25/03/2016.
 */
module.exports =  function(server){
    return function(req, res, next){
        var Event = server.models.Event;
        Event.find(function (err, events) {
            if (err) {
                return console.error(err);
            }
            res.json(events);
        });
    }
};