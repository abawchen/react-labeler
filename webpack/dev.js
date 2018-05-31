const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./common');
const basePath = path.join(__dirname, '..');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(basePath, '/src/index.html'),
  filename: 'index.html',
  inject: 'body',
});

module.exports = merge(common, {
  mode: 'development',
  entry: [
    path.join(basePath, '/src/index.dev.js'),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(basePath, '/dist'),
    inline: true,
    noInfo: false,
    host: '0.0.0.0',
    port: 8008,
    stats: {
      historyApiFallback: true,
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: true,
      chunks: true,
      chunkModules: false,
      children: false
    },
    historyApiFallback: true
  },
  plugins: [HTMLWebpackPluginConfig],
});
