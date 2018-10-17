import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Select from "react-select"

class TeamPage extends React.Component {

  state = {
    teamSearch: [],
    selectedTeam: null
  }
 componentDidMount(){
   const teamsUrl = `https://api.www.svenskaspel.se/player/sponsorship/autocomplete?search=stockholm&numResponses=10`

   fetch(teamsUrl)
     .then(response => response.json())
     .then(teams => {
       this.setState({
         teamSearch: teams.data.map(option => ({ label: option.name, value: option.name }))
       })
       console.log(this.state.teamSearch)
     })

 }
  componentDidUpdate(prevState) {
    if (this.state.selectedTeam !== prevState.selectedTeam) {
      //const searchString = this.state.selectedTeam
      //const teamsUrl = `https://api.www.svenskaspel.se/player/sponsorship/autocomplete?search=${searchString}&numResponses=10`
      const teamsUrl = `https://api.www.svenskaspel.se/player/sponsorship/autocomplete?search=stockholm&numResponses=10`

      fetch(teamsUrl)
        .then(response => response.json())
        .then(teams => {
          this.setState({
            teamSearch: teams.data.map(option => ({ label: option.name, value: option.name }))
          })
          console.log(this.state.teamSearch)
        })
    }
  }

  handleTeamSearch = selectedTeam => {
    this.setState({ selectedTeam })
    console.log("selectedTeam", selectedTeam)
  }

  render() {
    const { selectedTeam, teamSearch } = this.state

    return (
      <main>
        <h1>Välkommen</h1>
        <h2>Välj ett lag att stödja</h2>
        <Select
          value={selectedTeam}
          onChange={this.handleTeamSearch}
          options={teamSearch}
          name="teams"
          placeholder="Sök din förening" />
        <button type="button">Gå till min sida</button>
      </main>
    )
  }

}

export default TeamPage
