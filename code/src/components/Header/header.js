import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import "./header.scss"

class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <nav>
          <Link to="/">TeamPage</Link>
          <Link to="/mypage">MyPage</Link>
          <Link to="/stats">StatsPage</Link>
          <Link to="/temp">Grid</Link>
        </nav>
      </header>
    )
  }

}

export default Header
