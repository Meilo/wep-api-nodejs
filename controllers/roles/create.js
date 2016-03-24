var sha1 = require("sha1");
module.exports = function(server){
  return function(req, res, next){
    var Role = server.models.Role;
    if (Array.isArray(req.body))
    {
      for(var i=0; i<req.body.length; i++)
      {
        var role =  new Role(req.body[i]);

        role.save(function (err, data) {
          if(err) {
            return res.status(500).send(err);
          }
        });
      }
    }else {
      var role = new Role(req.body);
      role.save(function (err, data) {
        if (err) {
          return res.status(500).send(err);
        }
      });
    }
    res.status(200).send('Create ok');
  }
};