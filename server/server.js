// app.set('port', process.env.PORT || port)

// app.use('/', express.static(path.join(__dirname, 'public')))

// app.listen(app.get('port'), () => {
//   console.log('Server started: http://localhost:' + app.get('port') + '')
// })

const path = require('path')
const express = require('express')
const webpack = require('webpack')
// const webpackConfig = require('./../webpack/webpack.config.dev.js')
// const webpackConfig = require('./../webpack/webpack.config.js')
const webpackConfig = require('./../webpack/webpack.development.config.js')

const app = express()
const port = 3310
console.log(11, process.env.NODE_ENV)

// node ./server/server.js && webpack --mode=development --open --hot
console.log('process.env.NODE_ENV = ' + process.env.NODE_ENV);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')))

  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })
} else {
  const webpackDevMiddleware = require('webpack-dev-middleware') // eslint-disable-line global-require
  const webpackHotMiddleware = require('webpack-hot-middleware') // eslint-disable-line global-require

  const compiler = webpack(webpackConfig)

  // Tell express to use the webpack-dev-middleware and use the webpack.config.js
  // configuration file as a base.

  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
    })
  )

  app.use(webpackHotMiddleware(compiler))
  // Serve the files on port 3310.

  app.use('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, '/index.html')

    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)

      return res.end()
    })
  })
}

app.listen(process.env.PORT || port, () => {
  console.log('Example app listening on port 3310!\n')
})
