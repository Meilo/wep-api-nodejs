module.exports = function(server) {
  return function(req, res, next) {
    var Todo = server.models.Todo;
    Todo.remove({name: req.body.name}, function (err, data) {
      if(err){
        return res.status(500).send(err);
      }
    });
    res.status(200).send('ok');
  }
};