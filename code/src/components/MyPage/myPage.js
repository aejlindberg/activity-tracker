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
    "Cyklade"
  ],
  workouts: [],
  currentText: "",
  placeHolderText: "Lägg till aktivitet",
  modalActivity: "Gick",
  modalDay: 0,
  chosenIntensity: 2,
  weekPoints: []
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
    }, () => console.log(this.state.workouts))
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
  this.hideModal()
  const newWorkout = {
    name: this.state.modalActivity,
    day: this.state.modalDay,
    intensity: Number(this.state.chosenIntensity)
  }
  this.setState({
    workouts: this.state.workouts.concat(newWorkout)
  }, () => {
    const workoutData = JSON.stringify(this.state.workouts)
    localStorage.setItem("workouts", workoutData)
    this.updateGrid()
  })
}

updateGrid = () => {
  const numberOfActivities = this.state.activities.length
  const updateToGrid = []
  for (let i = 0; i < numberOfActivities; i++) {
    updateToGrid.push([0, 0, 0, 0, 0, 0, 0])
  }
  console.log("AllMyWorkouts: ", this.state.workouts)
  this.state.workouts.map(workout => {
      const activityIndex = this.state.activities.indexOf(workout.name)
      const activityWeek = updateToGrid[activityIndex]
      const newPoints = activityWeek[workout.day] += workout.intensity
      activityWeek[workout.day] = newPoints
      updateToGrid[activityIndex] = activityWeek
  })
  console.table(updateToGrid)
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
        <div className="mp-header-section-team">
          <p>Mitt lag: {this.state.myTeam}</p>
          <Link to="/">
            <button className="mp-header-section-button">Byt förening</button>
          </Link>
        </div>
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
          <button type="submit">&#43;</button>
        </form>
      </div>
        <Modal show={this.state.showModal} handleClose={this.hideModal}>
          <div className="mp-modal-content">
            <h1>{selectedDay}</h1>
            <label htmlFor="intensity-select">
              <p>
                Nedan kan du välja hur intensivt ditt pass var när du <strong>{(this.state.modalActivity).toLowerCase()}</strong> den här dagen.
              </p>
            </label>
          <form onSubmit={this.addWorkout}>
            <div className="mp-modal-workout-form">
              <select id="intensity-select" onChange={this.handleWorkoutIntensity}>
                <option value="1">Lätt</option>
                <option value="2" selected="selected">Normalt</option>
                <option value="3">Intensivt</option>
              </select>
            </div>
            <button className="choose" type="submit">Lägg till</button>
          </form>
          </div>
        </Modal>
    </div>
  )
}

}

const Modal = ({ handleClose, show, children }) => {

  return (
    <div className={show ? "mp-modal display-block" : "mp-modal display-none"}>
      <section className="mp-modal-main">
        {children}
        <button className="close" onClick={handleClose}>&times;</button>
      </section>
    </div>
  )
}

export default MyPage
