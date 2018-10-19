import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

class SingleActivity extends React.Component {

handleDayClick = (dayIndex) => {
  this.props.handleDayClick(dayIndex)
}

render() {
  return (
    <tr>
      <td>{this.props.name}</td>
      {this.props.days.map((day, index) => {
        return <td
          key={index}
          onClick={() => this.handleDayClick(index)}
          >{day}</td>
      })}
    </tr>
  )
}

}

export default SingleActivity
