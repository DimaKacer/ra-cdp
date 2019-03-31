import React from 'react'

import contentHomePage from './contentHomePage.json'

import ShowingContent from '../../components/showingContent'

function Homepage() {
  return (
    <React.Fragment>
      {React.createElement(
        'h1',
        { style: { color: 'red' }, className: 'title' },
        contentHomePage.title
      )}
      {React.createElement(
        'div',
        { style: { color: 'green' }, className: 'sub-title' },
        contentHomePage.subTitle
      )}
      <ShowingContent>{contentHomePage.description}</ShowingContent>
    </React.Fragment>
  )
}

export default Homepage
