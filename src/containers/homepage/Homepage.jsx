import React from 'react'
import Header from 'components/header'
import Footer from 'components/footer'
import SearchComponent from 'components/search'

class Homepage extends React.Component {
  onTriggerOptions = () => {
    return <p>hendler trigger action</p>
  }
  render() {
    return (
      <React.Fragment>
        <Header
        // selectedMovie={selectedMovie}
        // isSelectedMovie={isSelectedMovie}
        // backToSearch={this.backToSearch}
        />
        <SearchComponent classNames="middle-content container" />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Homepage
