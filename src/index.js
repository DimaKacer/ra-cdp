import React from 'react'
import ReactDOM from 'react-dom'

// import AppRouter from './routes'

const Logo = () => <div className="logo">netflixroulette</div>

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<Logo />, document.getElementById('root'))
