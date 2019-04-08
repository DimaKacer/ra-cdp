import React from 'react'

// onChooseItemMovie = () => {

// }

import './itemMovieStyles.scss'

// <article className="item-movie" onClick={() => props.selectMovie(props.id)}>
// <article className="item-movie tile is-3" onClick={el => console.log(el)}>
const ItemMovie = props => {
  return (
    <div className="item-movie-inner box is-paddingless">
      <div className="item-movie-image">
        <img src={props.poster_path} alt={props.title} />
      </div>
      <div className="item-movie-description">
        <div>
          <h2 className="item-movie-title">{props.title}</h2>
          <p className="item-movie-category">{props.genres[0]}</p>
        </div>
        <p className="item-movie-release-year">{props.release_date}</p>
      </div>
    </div>
  )
}

export default ItemMovie
