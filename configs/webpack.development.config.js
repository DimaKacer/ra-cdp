const path = require('path')
const webpack = require('webpack')
// const CaseSensitivePlugin = require('case-sensitive-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const root = path.resolve(__dirname, './../')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: 'source-map', // 'inline-source-map',
  // context: path.join(__dirname, './../'),
  // entry: path.resolve('./src/index.js'),
  // entry: ['webpack-hot-middleware/client'],
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '/public'),
  },
  devServer: {
    port: 3310,
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
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
    new webpack.DefinePlugin({
      NODE_ENV: 'development',
    }),
    new HtmlWebpackPlugin({
      title: 'React CDP development',
      // filename: './index.html',
      hash: true,
      template: path.join(root, 'src/', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  resolve: {
    modules: [path.resolve(root, 'src/'), 'node_modules'],
    alias: {
      components: path.resolve(root, 'src/', 'components/'),
      containers: path.resolve(root, 'src/', 'containers/'),
      helpers: path.resolve(root, 'src/', 'helpers/'),
    },
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
}
