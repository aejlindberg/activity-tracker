import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import SingleActivity from "../SingleActivity/singleActivity.js"
import "./activityGrid.scss"

class ActivityGrid extends React.Component {

constructor(props) {
  super(props)

  this.state = {
    ...props,
    dailyTotal: [0, 0, 0, 0, 0, 0, 0]
  }
}

handleClick = (actName, day) => {
  const { handleGridClick } = this.props
  handleGridClick(actName, day)
}

countTotal = () => {
  console.log("WHEEO", this.state.weekPoints)
  let { dailyTotal } = this.state
  let { weekPoints } = this.state
  for (let actIndex = 0; actIndex < weekPoints.length; actIndex++) {
    weekPoints.forEach((todayPoints, index) => {
      for (var dayIndex = 0; dayIndex < 7; dayIndex++) {
        dailyTotal[dayIndex] = dailyTotal[dayIndex] + todayPoints[dayIndex]
        console.log("todayPoints: ", todayPoints[dayIndex])        
      }
    })
  }
  console.table(weekPoints)
}

componentDidMount() {
  console.log(this.props.weekPoints)
  this.countTotal()
}

componentDidUpdate(prevState) {
  if (prevState.weekPoints != this.state.weekPoints){
    this.countTotal()
  }
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
              name={activity}
              activityPoints={this.props.weekPoints[actIndex]}
              handleDayClick={day => this.handleClick(activity, day)}
            />
          })}
          <tr>
            <td>TOT</td>
              {this.state.dailyTotal.map(dayTotal => {
                {console.log("TEST", dayTotal)}
                return <td>{dayTotal}</td>
              })}
          </tr>
        </tbody>
      </table>

    </div>
  )
}

}

export default ActivityGrid
