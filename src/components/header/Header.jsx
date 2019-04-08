import React from 'react'
// import { Link } from 'react-router-dom'
// import MovieFounded from './MovieFounded'
// import MovieSearch from './MovieSearch'
// import HeaderBar from './HeaderBar'
import Logo from 'components/logo'

import './header.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="header-wrapper">
        <section className="container">
          <section className="header-bar">
            <div className="section header-bar-wrapper">
              <div className="level">
                <Logo className="level-left" />
                <button className="level-right">search</button>
                {/* {props.isSelectedMovie && (
              <button
                className="button button_reverse"
                onClick={() => props.backToSearch()}
                // {props.isSelectedMovie && <button className="button button_reverse" onClick={() => props.backToSearch()}>Search</button>}
              >
                Search
              </button>
            )} */}
              </div>
              <div className="level">
                <h3>find your movie</h3>
              </div>
              <div className="level">
                <div className="field full-screen">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Text input"
                    />
                  </div>
                </div>
              </div>
              <div className="level">
                <div className="level-left filter-options">
                  <span>search by</span>
                  <span className="tag">title</span>
                  <span className="tag">genre</span>
                </div>
                <div className="level-right">
                  <button>search</button>
                </div>
              </div>
            </div>
          </section>
          <section className="section summarise-results-panel">
            <div className="level">
              <div className="level-left">
                <span className="tag">7 movies found</span>
              </div>
              <div className="level-right">
                <span className="item-option">Sort by</span>
                <span className="item-option">Release date</span>
                <span className="item-option">Rating</span>
              </div>
            </div>
          </section>
        </section>
      </header>
    )
  }
}

export default Header
