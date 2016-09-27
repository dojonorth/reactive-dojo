var express = require('express');
var app = express();
var nunjucks = require('nunjucks');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.use('/npm', express.static('node_modules'));
app.use('/test', express.static('test'));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.get('/fundamentals', function (req, res) {
  res.render('testrunner.html');
});

if (!require("piping")()) { return; }

app.listen(3000, function () {
  console.log('LET THE DOJO BEGIN! (go to http://localhost:3000/ )');
});
