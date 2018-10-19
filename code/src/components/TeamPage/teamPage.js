import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import SearchListItem from "../SearchListItem/searchListItem.js"

class TeamPage extends React.Component {

  state = {
    teamSearch: [],
    query: ""
  }

handleTeamSearch = event => {
  const query = event.target.value
  this.setState({ query }, () => {
    const teamsUrl = `https://api.www.svenskaspel.se/player/sponsorship/autocomplete?search=${query}&numResponses=10`
    fetch(teamsUrl)
      .then(response => response.json())
      .then(teams => {
        this.setState({
          teamSearch: teams.data
        })
      })
  })
}

render() {
  const { query, teamSearch } = this.state

  return (
    <main>
      <h1>Välkommen</h1>
      <h2>Välj ett lag att stödja</h2>
      <input
        type="text"
        value={query}
        onChange={this.handleTeamSearch}
        placeholder="Sök din förening" />
      <ul>
        {teamSearch.map(team => (
          <SearchListItem
            key={team.id}
            name={team.name}
            city={team.city} />
        ))}
      </ul>
      <button type="button">Gå till min sida</button>
    </main>
  )
}

}

export default TeamPage
