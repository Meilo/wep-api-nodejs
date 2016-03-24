module.exports =  function(server){
  return function(req, res, next){
    var Role = server.models.Role;
      Role.find(function (err, roles) {
        if (err) {
          return console.error(err);
        }
        res.send(roles);
      });
  }
};