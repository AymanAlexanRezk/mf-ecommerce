const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      //   {
      //     test: /\.(png|jpg)$/,
      //     use: 'file-loader',
      //   },
      //   {
      //     test: /\.css$/,
      //     use: ['style-loader', 'css-loader'],
      //   },
    ],
  },
};
