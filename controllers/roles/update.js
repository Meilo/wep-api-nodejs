module.exports = function(server) {
  return function(req, res, next) {
    var Role = server.models.Role;
    Role.find(function (err, roles) {
      for(var i=0; i<roles.length; i++)
      {
        if(req.body.name === roles[i].name)
        {
          console.log(roles[i].name);
          Role.update({name: roles[i].name}, { $set: {test: req.body.test} }, { multi:true }, function (err, data) {
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