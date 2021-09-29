const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  devServer: {
    port: 8081,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
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
