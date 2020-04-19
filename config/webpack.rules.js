const path = require('path');

module.exports = [
  {
    test: /\.(js|jsx)$/,
    use: [
      'babel-loader',
    ],
    exclude: /node_modules/,
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
          includePaths: [path.join(__dirname, '/../src/client/styles')],
        },
      },
    ],
  }
];
