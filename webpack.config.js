const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Http2ServerRequest } = require('http2');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'Todo List',
        inject: 'head',
        scriptLoading: 'defer',
    }),
  ]
};
