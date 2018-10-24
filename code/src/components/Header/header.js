import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import "./header.scss"

class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <h1>Gräsroten</h1>
      </header>
    )
  }

}

export default Header
