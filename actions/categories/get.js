/**
 * Created by Ludovic on 25/03/2016.
 */
module.exports =  function(server){
    return function(req, res, next){
        var Categories = server.models.Category;
        Categories.find(function (err, categories) {
            if (err) {
                return console.error(err);
            }
            res.json(categories);
        });
    }
};