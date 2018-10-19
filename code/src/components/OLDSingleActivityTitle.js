import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

class SingleActivityTitle extends React.Component {

  render() {
    return (
      <li className="day-grid__activity">{this.props.activityName}</li>
    )
  }

}

export default SingleActivityTitle
