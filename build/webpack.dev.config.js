const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: {
		client: './client/index.js',
		service: './service/index.js',

	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, '../dist')
	},
	devServer: {
		contentBase: '../dist',
		hot: true
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			},
			{
				test: /.(css)$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "CodeDrive"
		})
	],
	optimization: {
		moduleIds: 'hashed',
		runtimeChunk: 'single',
		usedExports: true,
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	}
};
