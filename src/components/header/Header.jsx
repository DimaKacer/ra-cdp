import React from 'react'
// import { Link } from 'react-router-dom'
// import MovieFounded from './MovieFounded'
// import MovieSearch from './MovieSearch'
import HeaderBar from './HeaderBar'

// import './headerNav.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="header">
        <div className="wrapper">
          <HeaderBar
            isMovieSelected={this.props.isMovieSelected}
            backToSearch={this.props.backToSearch}
          />
          {/* {this.props.isMovieSelected ? (
            <MovieFounded selectedMovie={this.props.selectedMovie} />
          ) : (
            <MovieSearch />
          )} */}
        </div>
      </header>
    )
  }
}

export default Header
