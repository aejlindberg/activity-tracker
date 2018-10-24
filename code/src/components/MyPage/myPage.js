import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import "./myPage.scss"
import ActivityGrid from "../ActivityGrid/activityGrid.js"
class MyPage extends React.Component {

state = {
  myTeam: "",
  showModal: false,
  activities: [
    "Gick",
    "Sprang",
    "Cyklade",
    "Nya Arrayen"
  ],
  workouts: [],
  currentText: "",
  placeHolderText: "Lägg till aktivitet",
  modalActivity: "Gick",
  modalDay: 0,
  chosenIntensity: 2
}

getChosenTeam = () => {
  if (localStorage.getItem("chosenTeam")) {
    this.setState({
      myTeam: localStorage.getItem("chosenTeam")
    })
  }
}

getActivities = () => {
  if (localStorage.getItem("activities")) {
    const dataFromStorage = JSON.parse(localStorage.getItem("activities"))
    this.setState({
      activities: dataFromStorage
    })
  }
}

getWorkouts = () => {
  if (localStorage.getItem("workouts")) {
    const dataFromStorage = JSON.parse(localStorage.getItem("workouts"))
    this.setState({
      workouts: dataFromStorage
    })
  }
}

handleGridClick = (activity, day) => {
  this.showModal(activity, day)
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
    const newActivity = [
      this.state.currentText
    ]
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

showModal = (activity, day) => {
  this.setState({
    showModal: true,
    modalActivity: activity,
    modalDay: day
  })
}

hideModal = () => {
  this.setState({ showModal: false })
}

handleWorkoutIntensity = e => {
  this.setState({
    chosenIntensity: e.target.value
  })
}

addWorkout = e => {
  e.preventDefault()
  const newWorkout = {
    name: this.state.modalActivity,
    day: this.state.modalDay,
    intensity: Number(this.state.chosenIntensity)
  }
  this.setState({
    workouts: this.state.workouts.concat(newWorkout)
  }, () => {
    const workoutData = JSON.stringify(this.state.workouts)
    localStorage.setItem("workouts", workoutData)})
}

componentDidMount() {
  this.getChosenTeam()
  this.getActivities()
  this.getWorkouts()
}

render() {
  let selectedDay = ""
  switch (this.state.modalDay) {
    case 0:
      selectedDay = "Måndag"
      break
    case 1:
      selectedDay = "Tisdag"
      break
    case 2:
      selectedDay = "Onsdag"
      break
    case 3:
      selectedDay = "Torsdag"
      break
    case 4:
      selectedDay = "Fredag"
      break
    case 5:
      selectedDay = "Lördag"
      break
    case 6:
      selectedDay = "Söndag"
      break
    default:
      selectedDay = "Ingen dag vald"
  }
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
        <Modal show={this.state.showModal} handleClose={this.hideModal}>
          <p>{this.state.modalActivity}</p>
          <p>{selectedDay}</p>
          <form onSubmit={this.addWorkout}>
            <select onChange={this.handleWorkoutIntensity}>
              <option value="1">Lätt</option>
              <option value="2" selected="selected">Normal</option>
              <option value="3">Intensiv</option>
            </select>
            <button type="submit">Välj</button>
          </form>
        </Modal>
      </div>
      <h1>MITT LAG: {this.state.myTeam}</h1>
    </div>
  )
}

}

const Modal = ({ handleClose, show, children }) => {

  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  )
}

export default MyPage
