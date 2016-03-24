var sha1 = require("sha1");
module.exports = function(server){
  return function(req, res, next){
    var Todo = server.models.Todo;
    if (Array.isArray(req.body))
    {
      for(var i=0; i<req.body.length; i++)
      {
        var todo =  new Todo(req.body[i]);

        todo.save(function (err, data) {
          if(err) {
            return res.status(500).send(err);
          }
        });
      }
    }else {
      var todo = new Todo(req.body);
      todo.save(function (err, data) {
        if (err) {
          return res.status(500).send(err);
        }
      });
    }
    res.status(200).send('Create ok');
  }
};