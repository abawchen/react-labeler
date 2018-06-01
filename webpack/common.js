// https://webpack.js.org/guides/production/
const path = require('path');
const basePath = path.join(__dirname, '..');

module.exports = {
  entry: {
    app: path.join(basePath, '/src/index.js')
  },
  output: {
    path: path.resolve(basePath, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2016', 'react', 'stage-0'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  }
};

