// https://webpack.js.org/guides/production/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const basePath = path.join(__dirname, '..');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(basePath, '/src/index.html'),
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: [
    path.join(basePath, '/src/index.js'),
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2016', 'react', "stage-0"],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  plugins: [HTMLWebpackPluginConfig],
};

