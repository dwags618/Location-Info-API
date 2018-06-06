var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    demo: './demo/src/main.js'
  },
  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'demo-bundle.js'
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components|public)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }],
    preLoaders: [{
      test: /\.(js|jsx)$/,
      loader: 'eslint',
      exclude: /node_modules/
    }]
  }
};
