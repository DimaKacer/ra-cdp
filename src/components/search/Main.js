import React from 'react'

import SortLine from './SortLine'
import MoviesList from './MoviesList'
import NoResults from './NoResults'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSort: 'Date',
    }
    this.toogleSorting = this.toogleSorting.bind(this)
  }

  toogleSorting(value) {
    if (value !== this.state.activeSort) {
      this.setState({
        activeSort: value,
      })
    }
  }

  render() {
    return (
      <main>
        {this.props.moviesNum > 0 && (
          <SortLine
            moviesNum={this.props.moviesNum}
            activeSort={this.state.activeSort}
            toogleSorting={this.toogleSorting}
          />
        )}
        <div className="wrapper">
          {this.props.moviesNum > 0 ? (
            <MoviesList
              movies={this.props.moviesList}
              activeSort={this.state.activeSort}
              selectMovie={this.props.selectMovie}
            />
          ) : (
            <NoResults />
          )}
        </div>
      </main>
    )
  }
}

export default Main
