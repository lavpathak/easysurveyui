var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../src');
var contentBase = path.join(__dirname, '../public')
module.exports = {
    entry: [
        path.join(parentDir, 'index.js')
    ],
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},{
				test: /\.less$/,
				loaders: ["style-loader", "css-loader", "less-loader"]
			}
		]
	},
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        contentBase: contentBase,
        historyApiFallback: true,
        port: 8888
    },
}
