const path = require('path')
// const webpack = require('webpack')
// const CaseSensitivePlugin = require('case-sensitive-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: 'source-map', // 'inline-source-map',
  entry: path.join(__dirname, './../src', 'index.js'),
  // entry: ['webpack-hot-middleware/client'],
  output: {
    // path: path.join(__dirname, 'dist'),
    path: path.join(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        // use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /.(jpg|jpeg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otff|png)$/,
        use: ['file-loader'],
        // options: {
        //   name: '[name][hash].[ext]',
        // },
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      title: 'React CDP development',
      filename: 'index.html',
      hash: true,
      template: path.join(__dirname, './../src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
    modules: [path.resolve(__dirname, './../src'), 'node_modules'],
  },
}
