import React from 'react'

const MovieFounded = props => {
  console.log(props)
  return (
    <div className="movie-founded">
      <img
        src={props.selectedMovie.poster_path}
        alt=""
        className="movie-founded__image"
      />
      <div className="movie-founded__description">
        <div className="movie-founded__title">
          <h1>{props.selectedMovie.title}</h1>
          <span className="movie-founded__rating">
            {props.selectedMovie.vote_average}
          </span>
        </div>
        <p className="movie-founded__category">
          {props.selectedMovie.genres.join(', ')}
        </p>
        <div className="movie-founded__info">
          <p className="movie-founded__year">
            {props.selectedMovie.release_date.slice(0, 4)}
          </p>
          <p className="movie-founded__duration">
            {props.selectedMovie.runtime}
          </p>
        </div>
        <p className="movie-founded__about">{props.selectedMovie.overview}</p>
      </div>
    </div>
  )
}

export default MovieFounded
