import React from "react"

class SearchListItem extends React.Component {
  state = {
    chosen: false
  }
  
  handleClick = () => {
    this.setState({
      chosen: !this.state.chosen
    }, () => {
      this.props.handleTeamChoice(this.props.name, this.props.city)
    })
  }

  render() {
    return (
      <li>
        <div onClick={this.handleClick}>
          {this.props.name}<br />
          {this.props.city}
        </div>
      </li>
    )
  }

}

export default SearchListItem
