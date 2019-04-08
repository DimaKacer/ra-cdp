const path = require('path')
const webpack = require('webpack')
const devConfig = require('./webpack.development.config')
const prodConfig = require('./webpack.production.config')

const baseConfig = {
  context: __dirname + '/src',
  // context: path.join(__dirname, './../src'),
  entry: './index.js',
  resolve: {
    // modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    // modules: [path.resolve(__dirname, root, 'src'), 'node_modules'],
    alias: {
      // server: path.resolve(__dirname, root, './server/'),
      // webpack: path.resolve(__dirname, root, './webpack/'),
      components: path.resolve(__dirname, root, 'src/components/'),
      modules: path.resolve(__dirname, './src/modules/'),
      containers: path.resolve(__dirname, './src/containers/'),
    },
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
  },
}

module.exports = (env, argv) => {
  let config = null

  console.log('current mode >>> ', argv.mode)
  if (argv.mode === 'production') {
    config = Object.assign({}, baseConfig, prodConfig)
  } else {
    config = Object.assign({}, baseConfig, devConfig)
  }

  return config
}
