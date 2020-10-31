const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main.js',
    vendor: [
      'lodash'
    ]
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: ['babel-loader'],
      //   exclude: path.resolve(__dirname, 'node_modules')
      // },
      {
        test: /\.css$/,
        use: ['css-loader']
        // use: ExtractTextPlugin.ectract({
        //   use: ['css-loader?minimize'] // 压缩css代码
        // })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // 删除dist
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor", // 对应上面的 vender
          chunks: "all"
        }
      }
    }
  }
}