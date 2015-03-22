var express = require('express');
var cors = require('cors');
var app = express();
var routes = require('./mods.js')

app.use(cors());

app.get('/dev', routes.devSal);

app.get('/pm', routes.pmSal);

app.get('/des', routes.desSal);

app.listen('3000', routes.listening);
