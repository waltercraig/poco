const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development", //'none' | 'development' | 'production'
	context: path.resolve(__dirname, "assets"),
	output: {
		filename: "main.bundle.js",
		path: path.resolve(__dirname, "assets/dist/js"),
		sourceMapFilename: "[file].map",
	},
	devtool: "source-map",
	watch: true,
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "../css/[name].min.css",
			chunkFilename: "[id].css",
		}),
	],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},

			{
				test: /\.s[ac]ss$/i,
				// Runs from bottom to top. Breaks my head
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"resolve-url-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(png|svg|jp(e*)g|gif)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "../images",
						},
					},
				],
			},
		],
	},
};
