const webpack = require('webpack')

module.exports = {
	entry: {
		app: [
			'./app/index.js'
		]
	},
	output: {
		path: "./build",
		filename: "index.js"
	}
}