import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

class SingleActivity extends React.Component {

handleDayClick = (dayIndex) => {
  this.props.handleDayClick(dayIndex)
}

render() {
  const days = [0, 0, 0, 0, 0, 0, 0]
  return (
    <tr>
      <td>{this.props.name}</td>
      {days.map((day, index) => {
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
