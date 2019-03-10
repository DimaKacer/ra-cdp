const webpack = require('webpack')
const path = require('path')

const paths = {
  outputPath: path.resolve(__dirname, 'dist'),
}

const config = {
  entry: './src/index.js',
  output: {
    path: paths.outputPath,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devServer: {
    contentBase: paths.outputPath,
    inline: true,
    host: 'localhost',
    port: 8033,
    open: true,
    hot: true,
  },
}

module.exports = config
