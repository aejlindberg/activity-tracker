import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

class SingleActivityDayBox extends React.Component {

  render() {
    return (
      <li className="day-grid__daybox" onClick={this.props.clickBoxHandler}>{this.props.activityNr},{this.props.day}</li>
    )
  }

}

export default SingleActivityDayBox
