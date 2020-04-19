const path = require('path');

const rules = require('./webpack.rules');

module.exports = {
  mode: "production",
  entry: path.join(__dirname, '/../src/client/index.js'),

  output: {
    filename: 'static/bundle.js',
    path: path.join(__dirname, '/../dist'),
    publicPath: '/'
  },

  devtool: 'source-map',

  module: {
    rules,
  },
  optimization: {
    minimize: true
  }
};
