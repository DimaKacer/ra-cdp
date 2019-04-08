import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Homepage from 'containers/homepage'
// import AboutApp from './containers/aboutApp'
// import ErrorPage from './containers/errorPage'
// import SearchPage from './containers/searchPage'

import './app.scss'

export default () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Homepage} />
      {/* <Route path="/search" component={SearchPage} /> */}
      {/* <Route path="/about-app" component={AboutApp} /> */}
      {/* <Route path="/error" component={ErrorPage} /> */}
    </React.Fragment>
  </Router>
)
