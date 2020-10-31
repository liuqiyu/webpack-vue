const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  entry: {
    main: './src/main.js',
    app: './src/app.js',
    vendors: [
      'lodash'
    ]
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.resolve(__dirname, './../dist')
  },
  plugins: [
    new CleanWebpackPlugin(), // 删除dist
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
}