import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import SearchListItem from "../SearchListItem/searchListItem.js"

class TeamPage extends React.Component {

  state = {
    teamSearch: [],
    query: "",
    chosenTeam: ""
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

handleTeamChoice = (teamName, teamCity) => {
  this.setState({ chosenTeam: `${teamName} (${teamCity})` })
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
            city={team.city}
            handleTeamChoice={this.handleTeamChoice} />
        ))}
      </ul>
      <div className="chosen-team">{this.state.chosenTeam}</div>
      <Link to="/mypage">
        <button type="button">Gå till min sida</button>
      </Link>
    </main>
  )
}

}

export default TeamPage
