var express = require('express');
var app = express();

var routes = require('./mods.js')

app.get('/dev', routes.devSal);

app.get('/pm', routes.pmSal);

app.get('/des', routes.desSal);

app.listen('3000', routes.listening);
