import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import "./myPage.scss"

class MyPage extends React.Component {

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
          A-Games Grid
        </div>
        <div className="activity-popup">
          <div className="activity-popup-inner">
            <h2>Aktivitet</h2>
            <button className="activity-popup-button">X</button>
          </div>
        </div>
        <div className="activity-section-log">
        LOG
        </div>
      </div>
    )
  }

}

export default MyPage
