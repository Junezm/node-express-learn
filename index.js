var express = require('express');
var app = express();
var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});

var fortune = require('./lib/fortune.js');

app.set('port', process.env.PORT || 3001);
//中间件 创建静态文件路由
app.use(express.static(__dirname + '/public'));
//设置 express-handlebar引擎
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');



app.get('/', function (req, res) {
	res.render('home');
});
app.get('/about', function (req, res) {
	
	res.render('about',{
		fortune: fortune.getFortune()
	});
})

//定制404页面
app.use(function (req, res, next) {
	res.status(404);
	res.render('404');
});

//定制 500 页面
app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function () {
	console.log('Express started on http://localhost:' + 
		app.get('port') + '; press Ctrl + C to terminate.');
})