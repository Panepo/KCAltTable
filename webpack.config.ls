require! {
	"path": path
	"webpack": webpack
}

module.exports = {
	devtool: "sourcemap"
	entry: [
		#'webpack-hot-middleware/client'
		"./src/app.ls"
	]
	output: {
		path: path.join(__dirname, 'build')
		filename: 'bundle.js'
	}
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin()
		new webpack.HotModuleReplacementPlugin()
		new webpack.NoErrorsPlugin()
	]
	module: {
		loaders: [
			{
				test: /\.js$/
				loaders: [ "react-hot", "babel" ]
				include: path.join(__dirname, 'src')
			}
			{
				test: /\.ls$/
				loaders: [ "react-hot", "livescript" ]
				include: path.join(__dirname, 'src')
			}
			{
				test: /\.json/
				loaders: [ "json" ]
				include: path.join(__dirname, 'raw')
			}
		]
	}
	node: {
		fs: "empty"
	}
}
