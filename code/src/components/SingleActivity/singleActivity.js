import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

class SingleActivity extends React.Component {

handleDayClick = (dayIndex) => {
  this.props.handleDayClick(dayIndex)
}

render() {
  let days = []
  if (this.props.activityPoints) {
    days = this.props.activityPoints
  } else {
    days = [0, 0, 0, 0, 0, 0, 0]
  }

  return (
    <tr>
      <td className="table-activity-name">{this.props.name}</td>
      {days.map((day, index) => {
        return <td className="table-clickable"
          key={index}
          onClick={() => this.handleDayClick(index)}
          >{day}</td>
      })}
    </tr>
  )
}

}

export default SingleActivity
