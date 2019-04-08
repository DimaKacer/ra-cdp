import React from 'react'

import ItemMovie from './ItemMovie'

// import { selectMovieById } from './helpers'

import { MOVIES_LIST_ENDPOINT } from 'helpers/endpoints'

const LOADING = 'Loading...'

class SearchComponent extends React.Component {
  state = {
    listMovies: [],
    isLoaded: false,
    error: null,
  }

  componentDidMount() {
    fetch(MOVIES_LIST_ENDPOINT)
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            listMovies: result.data,
          })
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          })
        }
      )
  }

  // backToSearch = () => {
  //   this.setState({
  //     isSelectedMovie: false,
  //     selectedMovieId: null,
  //   })
  // }

  // selectMovie = id => {
  //   this.setState({
  //     isSelectedMovie: true,
  //     selectedMovieId: id,
  //   })
  // }

  render() {
    const { listMovies, error, isLoaded } = this.state
    const { classNames } = this.props

    if (error) {
      return <section className={classNames}>Error: {error.message}</section>
    } else if (!isLoaded) {
      return <section className={classNames}>{LOADING}</section>
    } else {
      return (
        <section className={classNames}>
          <div className="item-movie-holder columns is-multiline is-mobile">
            {listMovies.map(itemMovie => {
              return (
                <div className="column is-4" key={itemMovie.id}>
                  <ItemMovie {...itemMovie} />
                </div>
              )
            })}
          </div>
        </section>
      )
    }
  }
}

export default SearchComponent
