import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

class SingleActivity extends React.Component {

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        {this.props.days.map((day, index) => <td key={index}>{day}</td>)}
      </tr>
    )
  }

}

export default SingleActivity
