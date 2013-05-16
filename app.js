
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , partials = require('express-partials')
  , counter = require('./routes/counter');



var app = express();

// all environments
app.set('port', process.env.PORT || 3000); // Escucha en el puerto 3000 o en el indicado en la variable PORT
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(partials());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());	// Parsea el body de los html
app.use(express.methodOverride()); // Permite cambiar el metodo de HTTP especificado
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', counter.count, routes.index); // Si la direccion pedida es / entonces se ejecuta el metodo routes.index(req,resp);
app.get('/users', user.list);
app.get('/info', function(req,res){
	res.redirect('info.html');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
