var express = require('express');
var app = express();
var nunjucks = require('nunjucks');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

/* Yeah, if you're ever writing real life node, don't do this. I'm lazy: */
app.use('/npm', express.static('node_modules'));
app.use('/test', express.static('test'));
app.use('/lib', express.static('lib'));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.get('/fundamentals', function (req, res) {
  res.render('testrunner.html');
});

app.get('/bacon-intro', function (req, res) {
  res.render('bacon-intro.html');
});

app.get('/form-workshop', function (req, res) {
  res.render('form-workshop.html');
});

app.use('/static', express.static('static'));

if (!require("piping")()) { return; }

app.listen(3000, function () {
  console.log('LET THE DOJO BEGIN! (go to http://localhost:3000/ )');
});
