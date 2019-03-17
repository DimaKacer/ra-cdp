import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import HeaderNav from './component/HeaderNav'

import Homepage from './containers/homepage'
import AboutUsPage from './containers/AboutUsPage'
import ErrorPage from './containers/ErrorPage'

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        {/* <HeaderNav /> */}
        <Route path="/" component={Homepage} />
        {/* <Route path="/" component={AboutUsPage} /> */}
        {/* <Route path="/" component={ErrorPage} /> */}
      </div>
    </BrowserRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.node.isRequired,
}

export default Root
