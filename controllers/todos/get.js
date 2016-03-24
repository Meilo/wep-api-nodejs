module.exports =  function(server){
  return function(req, res, next){
    var Todo = server.models.Todo;
    var User = server.models.User;
    User.findOne({_id: req.auth.userId},function (err, users) {
      if (err) {
        return console.error(err);
      }
      Todo.find(function (err, todos) {
        if (err) {
          return console.error(err);
        }
        req.body.todos = todos;

        next();
      });
    });
  }
};