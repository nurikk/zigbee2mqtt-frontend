const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = (env, args) => {
	let production = false;

	if (args && args.mode === 'production') {
		production = true;
		console.log('== Production mode');
	} else {
		console.log('== Development mode');
	}


	return {
		entry: {
			'scripts/main': './src/index.ts',
		},
		output: {
			path: path.resolve('./dist'),
		},
		target: 'web',
		devtool: production ? false : 'source-map',
		optimization: {
			splitChunks: {
				// always create vendor.js
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'scripts/vendor',
						chunks: 'initial',
						enforce: true,
					},
				},
			},
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.html', '.txt'],
		},
		module: {
			rules: [{
					test: /\.tsx?$/,
					exclude: /node_modules/,
					use: [{
						loader: 'ts-loader'
					}],
				},
				{
					test: /\.css$/,
					include: path.join(__dirname, 'src'),
					use: [
					  'style-loader',
					  {
						loader: 'typings-for-css-modules-loader',
						options: {
						  modules: true,
						  namedExport: true
						}
					  }
					]
				  }
				// {
				// 	test: /\.css$/,
				// 	loader: 'typings-for-css-modules-loader?modules&namedExport&camelCase'
				// },
				// {
				// 	test: /\.scss$/,
				// 	loader: 'typings-for-css-modules-loader?modules&sass&namedExport&camelCase'
				// }
			],
		},
		devServer: {
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			contentBase: './dist',
			compress: true,
			port: 3030,
		},
		plugins: [
			new ForkTsCheckerWebpackPlugin(),
			new CopyWebpackPlugin([{
				from: '**/*',
				context: './api-mocks/'
			}, ]),
			new HtmlWebpackPlugin({
				template: 'src/index.ejs'
			}),
			new HtmlWebpackPlugin({
				template: 'src/static/map.html',
				filename: 'map.html'
			})
		],
	};
};