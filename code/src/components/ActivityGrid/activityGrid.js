import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import "./activityGrid.scss"

class ActivityGrid extends React.Component {

  render() {
    return (
      <div className="tempGridPageContainer">

        <div className="activity-grid">
          <header className="grid-header">
            <h1>Weekly activites</h1>
          </header>

          <ul class="weekdays">
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

          <ul class="day-grid">

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

            <li className="day-grid__activity">Other</li>
            <li>C1</li>
            <li>C2</li>
            <li>C3</li>
            <li>C4</li>
            <li>C5</li>
            <li>C6</li>
            <li>C7</li>
          </ul>
        </div>

      </div>
    )
  }

}

export default ActivityGrid
