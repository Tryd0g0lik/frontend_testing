
// Generated using webpack-cli https://github.com/webpack/webpack-cli
process.traceDeprecation = true;
const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
// const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin'); // https://webpack.js.org/plugins/copy-webpack-plugin/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const loader = require('mini-css-extract-plugin/types/loader');
const isProduction = process.env.NODE_ENV; // == 'production';

module.exports = {

	mode: 'none',
	target: 'web',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
	},
	devServer: {
		open: true,
		host: 'localhost',
		compress: true,
		historyApiFallback: true,
		// static: {
		// 	directtory: path.json(__dirname, './dist'),
		// }

	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html',
			minify: {
				collapseWhitespace: false,
			}
		}),

		new MiniCssExtractPlugin(),
	],
	module: {
		rules: [
			{
				test: /(\.ts)|(\.js)$/,
				include: [
					path.resolve(__dirname, './src/jts'),
					path.join(__dirname, './src/jts/mocks')],
				loader: "ts-loader",
			},
			// {
			// 	test: /\.js$/i,
			// 	include: [
			// 		path.resolve(__dirname, './src/jsf'),

			// 	],
			// 	use: [{
			// 		loader: 'babel-loader',
			// 	},],
			// },
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
				include: [path.resolve(__dirname, './src')],
				sideEffects: true,
			},
			{
				test: /\.html$/i,
				use: [
					{
						loader: 'html-loader',
					},
				]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset/ressource",
			},

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],

		plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json', }),]

	},
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
		],
	},
	stats: {
		errorDetails: true,
	}
};

// module.exports = () => {
// 	if (isProduction) {
// 		config.mode = 'production';
// 	} else {
// 		config.mode = 'development';
// 	}
// 	return config;
// };
