const Webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index : './src/index.js'
  },
  output: {
    path: path.join(__dirname,'dist'),
    filename: '[name].js'
  },
  module: {
      loaders: [
          { test: /\.(js?)$/, exclude: /node_modules/, loader: require.resolve('babel-loader'), query: {cacheDirectory: true, presets: ['es2015', 'react', 'stage-2']} }
      ]
  },
  devtool : 'eval'
};
