var path = require('path')

module.exports = {
	// entry: path.resolve(__dirname, 'app/main.js'),
	entry: [
		// 设置浏览器自动刷新
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		path.resolve(__dirname, 'app/main.js')
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.less$/, loaders: ['style', 'css', 'less']},
			{test: /\.css$/, loaders: ['style', 'css']},
			{
				test: /\.(png|jpg)$/,
      	loader: 'file?name=./img/[name]-[hash:5].[ext]'
			},
			// {test: /\.css$/, loaders: 'style!css'},
			{
				test: /\.jsx?$/, // 用正则来匹配文件路径， 这段意思是匹配js或者jsx
				loader: 'babel?cacheDirectory=.cache', // 加载模块   "babel" 是 "babel-loader"的缩写
				// loader: 'babel-loader' ,
				exclude: /node_modules/
			}
		]
	}
}