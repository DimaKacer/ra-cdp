import React from 'react'
import SearchByButton from './SearchByButton'

class MovieSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchBySelected: 'Title',
      searchValue: '',
    }
    this.toggleButtonsState = this.toggleButtonsState.bind(this)
    this.searchMovieBy = this.searchMovieBy.bind(this)
  }

  toggleButtonsState(value) {
    if (value !== this.searchBySelected) {
      this.setState({
        searchBySelected: value,
      })
    }
  }

  searchMovieBy() {
    const inputValue = this.input.value
    if (inputValue.length > 0) {
      this.setState({
        searchValue: inputValue,
      })
      console.log('Search ' + inputValue)
    }
  }

  render() {
    return (
      <div className="movie-search">
        <h1>Find your movie</h1>
        <input
          type="text"
          name="movie"
          className="movie-search__input"
          ref={input => (this.input = input)}
        />
        <div className="movie-search__buttons-line">
          <div className="movie-search__buttons">
            <span>Search by</span>
            <SearchByButton
              isActive={this.state.searchBySelected == 'Title'}
              value="Title"
              toggleButtonsState={this.toggleButtonsState}
            />
            <SearchByButton
              isActive={this.state.searchBySelected == 'Genre'}
              value="Genre"
              toggleButtonsState={this.toggleButtonsState}
            />
          </div>
          <button className="button button_search" onClick={this.searchMovieBy}>
            Search
          </button>
        </div>
      </div>
    )
  }
}

export default MovieSearch
