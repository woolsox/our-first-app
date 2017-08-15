const express = require('express');
const path = require('path');
const mustache = require('mustache-express');
const app = express();
const port = 3000;

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use('/our-first-app', express.static('our-first-app'));

app.get('/', function(req, res){
  res.render('index', { name: 'Colin' });
});

app.get('/:something', function(req, res){
  console.log(req.params);
  res.send(`The thing you typed is poo`)
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.mustache'));
});

app.listen(port, function () {
  console.log('Successfully started application!');
});
