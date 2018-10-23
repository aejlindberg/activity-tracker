import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import "./myPage.scss"
import ActivityGrid from "../ActivityGrid/activityGrid.js"
class MyPage extends React.Component {

state = {
  activities: [
    {
      name: "Gick",
      dailyPoints: [9, 2, 0, 1, 0, 1, 0]
    },
    {
      name: "Sprang",
      dailyPoints: [9, 0, 0, 0, 0, 2, 0]
    },
    {
      name: "Cyklade",
      dailyPoints: [9, 0, 1, 0, 0, 0, 0]
    }
  ],
  currentText: "",
  placeHolderText: "Lägg till aktivitet",
  myTeam: "",
  test: {}
}

getChosenTeam = () => {
  console.log("My team: ", localStorage.getItem("chosenTeam"))
  if (localStorage.getItem("chosenTeam")) {
    this.setState({
      myTeam: localStorage.getItem("chosenTeam")
    })
  }
}

getActivities = () => {
  if (localStorage.getItem("activities")) {
    console.log("found localStorage")
    const dataFromStorage = JSON.parse(localStorage.getItem("activities"))
    console.log(dataFromStorage)
    this.setState({
      activities: dataFromStorage
    }, () => console.log(this.state.test))
  } else {
    console.log("nothing in storage")
  }
}

handleGridClick = (activity, day) => {
  console.log("MYPAGE says GRID-CLICK!", activity, day)
}

handleNewText = e => this.setState({
  currentText: e.target.value
})

handleSubmitNew = e => {
  e.preventDefault()
  const { currentText } = this.state
  if (!this.state.currentText.length) {
    this.setState({ placeHolderText: "Namnge din aktivitet" })
  } else {
    const newActivity = {
      name: this.state.currentText,
      dailyPoints: [0, 0, 0, 0, 0, 0, 0]
    }
    this.setState({
      activities: this.state.activities.concat(newActivity),
      currentText: "",
      placeHolderText: "Lägg till aktivitet"
    }, () => {
      const dataToStorage = JSON.stringify(this.state.activities)
      localStorage.setItem("activities", dataToStorage)
    })
  }
}

componentDidMount() {
  this.getChosenTeam()
  this.getActivities()
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
          activities={this.state.activities}
          handleGridClick={(activity, day) => this.handleGridClick(activity, day)} />
        <form onSubmit={this.handleSubmitNew}>
          <input
            type="text"
            value={this.state.currentText}
            placeholder={this.state.placeHolderText}
            onChange={this.handleNewText} />
          <input type="submit" value="+" />
        </form>
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
