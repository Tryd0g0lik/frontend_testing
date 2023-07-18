const common = require("./webpack.config");

const ESLintPlugin = require("eslint-webpack-plugin");
const path = require('path');
const { merge } = require("webpack-merge");
// const { SourceMapDevToolPlugin } = require("source-map-loader");
module.exports = merge(common,
	{
		mode: "development",
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
			// new webpack.HotModuleReplacementPlugin(),
			new ESLintPlugin({
				files: path.resolve(__dirname, "./src/jts"),
			}),

		]
	}
);