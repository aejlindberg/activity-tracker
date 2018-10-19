import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import SingleActivity from "../SingleActivity/singleActivity.js"
import "./activityGrid.scss"


class ActivityGrid extends React.Component {
state = {
  activities: [
    {
      name: "Gick",
      dailyPoints: [0, 2, 0, 1, 0, 1, 0]
    },
    {
      name: "Sprang",
      dailyPoints: [3, 0, 0, 0, 0, 2, 0]
    },
    {
      name: "Cyklade",
      dailyPoints: [0, 0, 1, 0, 0, 0, 0]
    }
  ]
}



render() {
  console.log(this.state.activities)
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
          {this.state.activities.map((activity, actIndex) => {
            return <SingleActivity
                key = {actIndex}
                id = {actIndex}
                name = {activity.name}
                days = {activity.dailyPoints}
              />
          })}
        </tbody>
      </table>

    </div>
  )
}

}

export default ActivityGrid
