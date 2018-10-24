import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./Header/header.js"
import TeamPage from "./TeamPage/teamPage.js"
import MyPage from "./MyPage/myPage.js"
import StatsPage from "./StatsPage/statsPage.js"
import ActivityGrid from "./ActivityGrid/activityGrid.js"


class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={TeamPage} />
            <Route exact path="/mypage" component={MyPage} />
            <Route exact path="/stats" component={StatsPage} />
          </Switch>
        </div>
      </Router>
    )
  }

}

export default App
