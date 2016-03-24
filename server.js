var express = require('express');
var server = express();

require('./settings')(server);
require('./cache')(server);
require('./models')(server);
require('./middleswares')(server);
require('./controllers')(server);
require('./routers')(server);

console.log(server.settings.port);
server.listen(server.settings.port);