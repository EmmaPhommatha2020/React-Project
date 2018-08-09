const path = require('path');
const webpack = require('webpack');
const HtmlWEbpackPlugin = require('html-webpack-plugin');


module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filenname: '/bundle.js'
  },
  module:{
    rules: [
      {
        test:/\.js$/,
        loader: 'bable-loader'
      }
    ]
  },
  Plugin: [
    new HtmlWEbpackPlugin({
      template: './index.html',
      inject:'body'
    })
  ]
}; 
