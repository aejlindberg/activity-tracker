import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

class SingleActivity extends React.Component {

  render() {
    console.log('hello')
    console.log(this.props.days)
    return (
      <tr>
        <td>{this.props.name}</td>
        {this.props.days.map(day => <td>{day}</td>)}
      </tr>
    )
  }

}

export default SingleActivity
