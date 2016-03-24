module.exports = function(server) {
  return function(req, res, next) {
    var Role = server.models.Role;
    Role.remove({name: req.body.name}, function (err, data) {
      if(err){
        return res.status(500).send(err);
      }
    });
    res.status(200).send('ok');
  }
};