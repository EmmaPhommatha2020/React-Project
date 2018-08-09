const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: '__dirname',
    filenname: '/bundle.js'
  },
  module:{
    rules: [
      {
        test:/\.js$/,
        loader: 'bable-loader'
      }
    ]
  }
}; 
