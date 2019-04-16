import React from 'react'
import classnames from 'classnames'

import Logo from 'components/logo'

import {
  LABEL_SEARCH_BY,
  LABEL_TITLE,
  LABEL_GENRE,
  ACTIVE_CLASSNAME,
  LABEL_SORT_BY,
  LABEL_RELEASE_DATE,
  LABEL_RATING,
} from './types'

import './header.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isActiveSort: true,
      isActiveSearch: true,
      countMovis: 0,
    }
  }

  // TODO: Method for feature 'search: title/genre'
  toggleActiveSortingOption = el => {
    if (el.target.className.match(ACTIVE_CLASSNAME)) {
      return null
    }

    return this.setState({
      isActiveSort: !this.state.isActiveSort,
    })
  }

  // TODO: Method for feature 'sort: release date/rating'
  toggleActiveSearchingOption = el => {
    if (el.target.className.match(ACTIVE_CLASSNAME)) {
      return null
    }

    return this.setState({
      isActiveSearch: !this.state.isActiveSearch,
    })
  }

  render() {
    const { isActiveSort, isActiveSearch } = this.state

    return (
      <header className="header-wrapper">
        <section className="header-bar">
          <section className="section header-bar-inner">
            <div className="container">
              <div className="level">
                <Logo className="level-left" />
                <button className="level-right">search</button>
              </div>
              <div className="level">
                <h3 className="title is-3 has-text-light is-uppercase">
                  find your movie
                </h3>
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
                <div className="level-left filter-options search-panel is-uppercase is-size-7">
                  <span className="has-text-light is-size-6">
                    {LABEL_SEARCH_BY}:
                  </span>
                  <span
                    className={classnames(
                      'tag',
                      isActiveSearch && 'is-success'
                    )}
                    onClick={this.toggleActiveSearchingOption}
                  >
                    {LABEL_TITLE}
                  </span>
                  <span
                    className={classnames(
                      'tag',
                      !isActiveSearch && 'is-success'
                    )}
                    onClick={this.toggleActiveSearchingOption}
                  >
                    {LABEL_GENRE}
                  </span>
                </div>
                <div className="level-right">
                  <button>search</button>
                </div>
              </div>
            </div>
          </section>
          <section className="summarise-results-panel">
            <div className="container">
              <div className="level">
                <div className="level-left">
                  <span className="tag">7 movies found</span>
                </div>
                <div className="level-right filter-options display-results">
                  <span className="item-option">{LABEL_SORT_BY}:</span>
                  <span
                    className={classnames('tag', isActiveSort && 'is-success')}
                    onClick={this.toggleActiveSortingOption}
                  >
                    {LABEL_RELEASE_DATE}
                  </span>
                  <span
                    className={classnames('tag', !isActiveSort && 'is-success')}
                    onClick={this.toggleActiveSortingOption}
                  >
                    {LABEL_RATING}
                  </span>
                </div>
              </div>
            </div>
          </section>
        </section>
      </header>
    )
  }
}

export default Header
