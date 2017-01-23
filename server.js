var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

// new WebpackDevServer(webpack(config), {
// 	publicPath: config.output.publicPath,
// 	hot: true,
// 	historyApiFallback: true
// }).listen(3000, 'localhost', function (err, result) {
// 	if(err) {
// 		return console.log(err);
// 	}
// 	console.log('Listening at http://localhost:3000/');
// });

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: false,
	historyApiFallback: false
}).listen(8080, '10.132.30.39', function (err, result) {
	if(err) {
		return console.log(err);
	}
	console.log('Listening at http://10.132.30.39:8080/');
});

// var express = require('express');
// var app = express();
//
// app.get('/', function (req, res) {
// 	res.send('Hello World!');
// });
//
// app.listen(3000, function () {
// 	console.log('Example app listening on port 3000!');
// });
