import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import "./myPage.scss"
import ActivityGrid from "../ActivityGrid/activityGrid.js"
class MyPage extends React.Component {

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
  ],
  myTeam: ""
}

getChosenTeam = () => {
  console.log("My team: ", localStorage.getItem("chosenTeam"))
  if (localStorage.getItem("chosenTeam")) {
    this.setState({
      myTeam: localStorage.getItem("chosenTeam")
    })
  }
}
handleGridClick = (activity, day) => {
  console.log("MYPAGE says GRID-CLICK!", activity, day)
}

componentDidMount() {
  this.getChosenTeam()
}

render() {
  return (
    <div className="wrapper">
      <div className="mp-header-section">
        <h1>Min sida</h1>
        <Link to="/">
          <button className="mp-header-section-button">Byt förening</button>
        </Link>
      </div>
      <div className="activity-section-grid">
        <ActivityGrid
          handleGridClick={(activity, day) => this.handleGridClick(activity, day)} />
      </div>
      <div className="activity-popup">
      Popup
      </div>
      <h1>MITT LAG: {this.state.myTeam}</h1>
    </div>
  )
}

}

export default MyPage
