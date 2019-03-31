import React from 'react'
import ReactDOM from 'react-dom'

import AppRouter from './routes'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<AppRouter />, document.getElementById('root'))
