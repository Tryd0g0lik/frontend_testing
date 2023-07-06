// Generated using webpack-cli https://github.com/webpack/webpack-cli
process.traceDeprecation = true;
const path = require("path");
const TsconfigPathPlugin = require("tsconfig-paths-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin"); // https://webpack.js.org/plugins/copy-webpack-plugin/
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const isProduction = process.env.NODE_ENV; // == "production";

const config = {
	mode: "none",
	target: "web",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
	},
	devServer: {
		open: true,
		host: "localhost",
		compress: true,
		historyApiFallback: true,
		// static: {
		// 	directtory: path.json(__dirname, "./dist"),
		// }

	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
			minify: {
				collapseWhitespace: false,
			}
		}),

		new MiniCssExtractPlugin(),
		new TsconfigPathPlugin({
			configFile: "./tsconfig-for-webpack-config.json"
		}),
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: "ts-loader",
				exclude: ["/node_modules/"],
			},
			{
				test: /\.js$/i,
				exclude: ["/node_modules/"],
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
				exclude: /node_modules/,
				sideEffects: true,
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
					},
				]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
	},
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
		],
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = "production";
	} else {
		config.mode = "development";
	}
	return config;
};
