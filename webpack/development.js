const path = require('path');
const config = require('./base');
const basePath = path.join(__dirname, '..');

config.devServer = {
  contentBase: path.join(basePath, '/build'),
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
};

module.exports = config;

