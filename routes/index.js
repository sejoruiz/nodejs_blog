
/*
 * GET home page.
 */

exports.index = function(req, res){
  //res.render('index', { title: 'Express' }); 	renderiza index con la etiqueta title = 'Express'
  res.redirect('/index.html');	// Las peticiones a / las redirigimos a index.html
};