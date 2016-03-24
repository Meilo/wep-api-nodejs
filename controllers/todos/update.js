module.exports = function(server) {
  return function(req, res, next) {
    var Todo = server.models.Todo;
    Todo.find(function (err, todos) {
      for(var i=0; i<todos.length; i++)
      {
        if(req.body.name === todos[i].name)
        {
          console.log(todos[i].name);
          Todo.update({name: todos[i].name}, { $set: {test: req.body.test} }, { multi:true }, function (err, data) {
            if(err) {
              return res.status(500).send(err);
            }
          })
        }
      }
      if(err) {
        return console.error(err);
      }
      res.status(200).send('ok');
    });
  }
};