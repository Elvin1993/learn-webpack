var webpack = require('webpack')
var path = require('path')
// var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: ['./entry'],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.json'],
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.jsx?$/, loader: 'babel?cacheDirectory=.cache', exclude: /node_modules/},
      {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel',
              query: {presets:[ 'es2015', 'react', 'stage-0' ]}
            },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    }),
  ]
}