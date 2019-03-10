import React, { PureComponent } from 'react'

const VIEW_LESS_BTN_TEXT = 'View less'
const VIEW_MORE_BTN_TEXT = 'View more'

class ShowingContent extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      shortContent: true,
    }

    this.onToggleVisibleContent = this.onToggleVisibleContent.bind(this)
  }
  // TODO
  // state = {
  //   shortContent: true,
  // }

  // TODO
  // onToggleVisibleContent = () => {
  onToggleVisibleContent() {
    this.setState(prevState => ({
      shortContent: !prevState.shortContent,
    }))
  }

  render() {
    const currentConetnt = this.state.shortContent
      ? this.props.children.shortDesc
      : this.props.children.fullDesc

    const btnText = !this.state.shortContent
      ? VIEW_LESS_BTN_TEXT
      : VIEW_MORE_BTN_TEXT

    return (
      <div>
        <p>{currentConetnt}</p>
        <button type="button" onClick={this.onToggleVisibleContent}>
          {btnText}
        </button>
      </div>
    )
  }
}

export default ShowingContent
