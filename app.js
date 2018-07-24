var express = require('express'), path = require('path')
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var index = require('./routes/index');
var user = require('./routes/user');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static('public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

app.use('/', index)
app.use('/user', user)

module.exports = app;
