const path = require('path')
const webpack = require('webpack')
const CaseSensitivePlugin = require('case-sensitive-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'none',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'publick'),
    // path: path.join(__dirname, 'prod'),
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)?$/,
        // use: ['style-loader', 'css-loader'],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(ttf|eot|svg|woff|png)$/,
        loader: 'file-loader',
        options: {
          name: '[name][hash].[ext]',
        },
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'all',
          minSize: 0,
          minChunks: 2,
        },
        vendors: {
          test: /node_modules/,
          name: 'common',
          chunks: 'all',
          minSize: 0,
          minChunks: 2,
        },
      },
    },
  },

  plugins: [
    new CaseSensitivePlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: 'production',
    }),
    new HtmlWebpackPlugin({
      title: 'React CDP production',
      hash: true,
      template: './index.html',
    }),
    new ExtractTextPlugin('[name].css'),
  ],
}

// const path = require('path')
// const HtmlWebPackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.join(__dirname, '/public'),
//     filename: 'index_bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-react'],
//           },
//         },
//       },
//       {
//         test: /\.css$/,
//         use: ExtractTextPlugin.extract({
//           fallback: 'style-loader',
//           use: ['css-loader'],
//         }),
//       },
//       {
//         test: /\.(png|jpg|gif)$/,
//         use: [
//           {
//             loader: 'file-loader',
//           },
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebPackPlugin({
//       hash: true,
//       filename: 'index.html', //target html
//       template: 'src/index.html', //source html
//     }),
//     new ExtractTextPlugin({ filename: 'css/style.css' }),
//   ],
// }
