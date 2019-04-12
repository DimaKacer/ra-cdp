import React from 'react'

class SortLine extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="sort-line">
        <div className="wrapper">
          <p className="sort-line__movies-num">
            {this.props.moviesNum} movies found
          </p>
          {this.props.moviesNum > 1 && (
            <div className="sort-line__selectors">
              Sort by
              <span
                className={`button_minimal ${
                  this.props.activeSort === 'Date'
                    ? 'button_minimal_active'
                    : ''
                }`}
                onClick={() => this.props.toogleSorting('Date')}
              >
                release date
              </span>
              <span
                className={`button_minimal ${
                  this.props.activeSort === 'Rating'
                    ? 'button_minimal_active'
                    : ''
                }`}
                onClick={() => this.props.toogleSorting('Rating')}
              >
                raiting
              </span>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default SortLine
