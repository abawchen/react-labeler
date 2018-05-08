// 這邊使用 HtmlWebpackPlugin，將 bundle 好的 <script> 插入到 body。${__dirname} 為 ES6 語法對應到 __dirname  
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  // 檔案起始點從 entry 進入，因為是陣列所以也可以是多個檔案
  entry: [
    './app/index.js',
  ],
  // output 是放入產生出來的結果的相關參數
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
  },
  module: {
  	// loaders 則是放欲使用的 loaders，在這邊是使用 babel-loader 將所有 .js（這邊用到正則式）相關檔案（排除了 npm 安裝的套件位置 node_modules）轉譯成瀏覽器可以閱讀的 JavaScript。preset 則是使用的 babel 轉譯規則，這邊使用 react、es2015。若是已經單獨使用 .babelrc 作為 presets 設定的話，則可以省略 query
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  // devServer 則是 webpack-dev-server 設定
  devServer: {
    inline: true,
    port: 8008,
  },
  // plugins 放置所使用的外掛
  plugins: [HTMLWebpackPluginConfig],
};

