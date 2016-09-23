var express = require('express');
var app = express();
var nunjucks = require('nunjucks');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', function (req, res) {
  res.render('index.html');
});

if (!require("piping")()) { return; }

app.listen(3000, function () {
  console.log('LET THE DOJO BEGIN! (go to http://localhost:3000/ )');
});
