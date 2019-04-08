import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { LOGOTIP_APP } from './types'

import './logo.scss'

function Logo(props) {
  const { className } = props
  return (
    <a href="/" className={classnames('logo', className)}>
      {LOGOTIP_APP}
    </a>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
}

Logo.defaultProps = {
  className: '',
}

export default Logo
