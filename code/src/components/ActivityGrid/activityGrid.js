import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import SingleActivity from "../SingleActivity/singleActivity.js"
import "./activityGrid.scss"

class ActivityGrid extends React.Component {

handleClick = (actName, day) => {
  const { handleGridClick } = this.props
  handleGridClick(actName, day)
}

render() {
  return (
    <div className="grid-container">
      <h2>Min vecka:</h2>
      <table>
        <thead>
          <tr>
            <th>Aktivitet</th>
            <th>M</th>
            <th>T</th>
            <th>O</th>
            <th>T</th>
            <th>F</th>
            <th>L</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>
          {this.props.activities.map((activity, actIndex) => {
            return <SingleActivity
              key={actIndex}
              id={actIndex}
              name={activity.name}
              days={activity.dailyPoints}
              handleDayClick={day => this.handleClick(activity.name, day)}
            />
          })}
        </tbody>
      </table>

    </div>
  )
}

}

export default ActivityGrid
