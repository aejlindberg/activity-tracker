import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import "./myPage.scss"
import ActivityGrid from "../ActivityGrid/activityGrid.js"
class MyPage extends React.Component {

state = {
  myTeam: "",
  showModal: false
}

getChosenTeam = () => {
  console.log("My team: ", localStorage.getItem("chosenTeam"))
  if (localStorage.getItem("chosenTeam")) {
    this.setState({
      myTeam: localStorage.getItem("chosenTeam")
    })
  }
}

showModal = () => {
  this.setState({ showModal: true })
}

hideModal = () => {
  this.setState({ showModal: false })
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
        <ActivityGrid />
      </div>
      <div className="activity-popup">
        <h1>React Modal</h1>
          <Modal show={this.state.showModal} handleClose={this.hideModal} >
            <p>Modal</p>
            <p>Data</p>
          </Modal>
          <button type='button' onClick={this.showModal}>Open</button>
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
