import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import SingleActivityTitle from "../SingleActivityTitle"
import SingleActivityDayBox from "../SingleActivityDayBox"
import "./activityGrid.scss"


class ActivityGrid extends React.Component {
state = {
  activities: [
    {
      name: "Gick",
      dailyPoints: [0, 0, 0, 0, 0, 0, 0]
    },
    {
      name: "Sprang",
      dayilyPoints: [0, 0, 0, 0, 0, 0, 0]
    }
  ]
}

clickedDayBox = (day, row) => {
  console.log(day, row)
}

render() {
  const days = [1, 2, 3, 4, 5, 6, 7]
  return (


    <div className="tempGridPageContainer">
      <div className="grid-container">
        <div className="activity-grid">
          <header className="grid-header">
            <h1>Weekly activites</h1>
          </header>

          <ul className="weekdays">
            <li className="day-grid__activity">
              <abbr title="Act.">ACTIVITY</abbr>
            </li>
            <li>
              <abbr title="S">Sunday</abbr>
            </li>
            <li>
              <abbr title="M">Monday</abbr>
            </li>
            <li>
              <abbr title="T">Tuesday</abbr>
            </li>
            <li>
              <abbr title="W">Wednesday</abbr>
            </li>
            <li>
              <abbr title="T">Thursday</abbr>
            </li>
            <li>
              <abbr title="F">Friday</abbr>
            </li>
            <li>
              <abbr title="S">Saturday</abbr>
            </li>
          </ul>

          <ul className="day-grid">

            <li className="day-grid__activity">Walking</li>
            <li>A1</li>
            <li>A2</li>
            <li>A3</li>
            <li>A4</li>
            <li>A5</li>
            <li>A6</li>
            <li>A7</li>

            <li className="day-grid__activity">Running</li>
            <li>B1</li>
            <li>B2</li>
            <li>B3</li>
            <li>B4</li>
            <li>B5</li>
            <li>B6</li>
            <li>B7</li>

            <SingleActivityTitle activityName="Run" />
            {days.map(day => (
              <SingleActivityDayBox
                key={day}
                day={day}
                activityNr={this.state.activityCounter}
                clickBoxHandler={() => this.clickedDayBox(day, 1)}  />))}
            <SingleActivityTitle activityName="Walk" />
            {days.map(day => (
              <SingleActivityDayBox
                key={day}
                day={day}
                activityNr={this.state.activityCounter}
                clickBoxHandler={() => this.clickedDayBox(day, 2)}  />))}

          </ul>
        </div>
      </div>

    </div>
  )
}

}

export default ActivityGrid
