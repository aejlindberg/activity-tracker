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
      <h2>Aktiviteter:</h2>
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
              name={activity}
              activityPoints={this.props.weekPoints[actIndex]}
              handleDayClick={day => this.handleClick(activity, day)}
            />
          })}
          <tr>
            <td className="table-total">Poäng:</td>
            {this.props.dailyTotal.map(dayTotal => {
              return (
                <td className={(dayTotal >= 3) ? "table-dayIsDone" : "table-dayNotDone"}>
                  {dayTotal}
                </td>
              )
            })}
          </tr>
        </tbody>
      </table>

    </div>
  )
}

}

export default ActivityGrid
