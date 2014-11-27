var express = require('express');

var app = express();

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use('/', express.static( './'));

app.listen(8033);	