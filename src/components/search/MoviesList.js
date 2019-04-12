import React from 'react'
import ItemMovie from './ItemMovie'

class MoviesList extends React.Component {
  constructor(props) {
    super(props)
    this.sortMoviesList = this.sortMoviesList.bind(this)
  }

  sortMoviesList() {
    if (this.props.activeSort === 'Date') {
      this.props.movies.sort((a, b) => {
        if (a.release_date < b.release_date) {
          return 1
        }
        if (a.release_date > b.release_date) {
          return -1
        }
        return 0
      })
    } else {
      this.props.movies.sort((a, b) => {
        if (a.vote_average < b.vote_average) {
          return 1
        }
        if (a.vote_average > b.vote_average) {
          return -1
        }
        return 0
      })
    }
    return this.props.movies
  }

  render() {
    return (
      <div className="movies-list">
        {this.sortMoviesList().map(movieProps => (
          <ItemMovie
            src={movieProps.poster_path}
            title={movieProps.title}
            genre={movieProps.genres.join(', ')}
            year={movieProps.release_date.slice(0, 4)}
            id={movieProps.id}
            selectMovie={this.props.selectMovie}
            key={movieProps.id}
          />
        ))}
      </div>
    )
  }
}

export default MoviesList
