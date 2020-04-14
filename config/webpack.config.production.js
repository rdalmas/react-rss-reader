var path = require('path');

module.exports = {
  mode: "production",
  entry: path.join(__dirname, '/../src/index.js'),

  output: {
    filename: 'static/bundle.js',
    path: path.join(__dirname, '/../dist'),
    publicPath: '/'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [path.join(__dirname, '/../src/assets/scss')],
            },
          },
        ],
      }
    ]
  },
  optimization: {
    minimize: true
  }
};
