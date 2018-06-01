const merge = require('webpack-merge');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./common');
const basePath = path.join(__dirname, '..');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(basePath, '/src/index.html'),
  filename: 'index.html',
  inject: 'body',
});

module.exports = merge(common, {
  mode: 'production',
  entry: {
    app: path.join(basePath, '/src/dev.js'),
  },
  output: {
    path: path.resolve(basePath, 'demo'),
    filename: '[name].bundle.js'
  },
  plugins: [HTMLWebpackPluginConfig],
});
