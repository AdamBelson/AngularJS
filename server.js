// server.js (Express 4.0)
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();

app.use('/', express.static( './'));

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use(express.static(__dirname + '/')); 	
app.use(morgan('dev')); 											// log every request to the console
app.use(bodyParser.urlencoded({ extended: true }));					// pull information from html in POST
app.use(bodyParser.json());

var router = express.Router();

//app.use('/api', router);

app.listen(8000);
console.log('Open http://localhost:8000 to access the files now'); 			// shoutout to the user