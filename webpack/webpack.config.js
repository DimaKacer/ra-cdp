const path = require('path')
const devConfig = require('./webpack.development.config.js')
const prodConfig = require('./webpack.production.config.js')

const baseConfig = {
  // entry: path.join(__dirname, 'src', 'index.js'),
  entry: './../index.js',

  context: path.join(__dirname, 'src'),
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}

module.exports = (env, argv) => {
  let config = null

  if (argv.mode === 'production') {
    config = Object.assign({}, baseConfig, prodConfig)
  } else  {
    config = Object.assign({}, baseConfig, devConfig)
  }

  return config
}
