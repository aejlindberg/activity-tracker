import React from "react"

class SearchListItem extends React.Component {

  render() {
    return (
      <li>
        {this.props.name}<br />
        {this.props.city}
      </li>
    )
  }

}

export default SearchListItem
