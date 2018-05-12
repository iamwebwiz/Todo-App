var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

// set up template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire controller
todoController(app);

app.listen(3000, function(){
	console.log('App running on http://127.0.0.1:3000');
});
