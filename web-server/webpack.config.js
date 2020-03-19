var path = require('path');
var webpack = require('webpack');
// window.env="https://image.timespoints.iimg.in/static/public/js/";
module.exports = {
	mode: "development",
  	entry: {
      centralLogin:"./src/scripts/centralLogin.js",
      main:"./src/scripts/main.js",
    },
    
  	output: {
  		path: path.join(__dirname, "./dist/"),
  		publicPath: '/dist/',
      // filename: "./centralLogin.bundle.js"//path relative to this file
      filename: "[name].bundle.js"//path relative to this file
    },
    plugins:[
      new webpack.EnvironmentPlugin({
        NODE_ENV: process.env.NODE_ENV,
      })

    ],

  devServer: {
  	//host: "jssostg.indiatimes.com/",
  	host: '127.0.0.1',
    //contentBase: path.join(__dirname, 'dist'),
    //compress: true,
    port: 9008,
  },
  
}
