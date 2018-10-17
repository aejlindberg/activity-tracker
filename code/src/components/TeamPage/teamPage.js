import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

class TeamPage extends React.Component {

  render() {
    return (
      <main>
        <h1>Välkommen</h1>
        <h2>Välj ett lag att stödja</h2>
        <input type="text" placeholder="Sök din förening" />
      </main>
    )
  }

}

export default TeamPage
