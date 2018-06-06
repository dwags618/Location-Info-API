var webpack = require('webpack');
var path = require('path');
var plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.NoErrorsPlugin()
];
if (process.env.MINIFY) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

var filename = (process.env.MINIFY)
  ? 'Component.min.js'
  : 'Component.js';

module.exports = {
  entry: {
    Component: './lib/index.js',
  },
  output: {
    library: 'Component',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: filename,
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
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
    {
      'react-router': {
        root: 'Router',
        commonjs2: 'react-router',
        commonjs: 'react-router',
        amd: 'react-router',
      },
    },
  ],
  node: {
    Buffer: false,
    process: false,
    setImmediate: false,
  },
  plugins: plugins,
};
