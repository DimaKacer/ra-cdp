import React from 'react'
import { Link } from 'react-router-dom'

import './headerNav.scss'

class HeaderNavigation extends React.Component {
  render() {
    return (
      <header className="header-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/about-app">About App</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default HeaderNavigation
