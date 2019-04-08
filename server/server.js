const path = require('path')
const express = require('express')
const app = express()
const port = 3310

console.log('process.env.NODE_ENV = ' + process.env.NODE_ENV)

app.use('/', express.static(path.join(__dirname, './../public')));

app.listen(process.env.PORT || 3310, () => {
  console.log('Server started: http://localhost:' + app.get('port') + '')
})
