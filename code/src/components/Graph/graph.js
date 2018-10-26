import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { LineChart, Line, Tooltip, Legend, YAxis, XAxis, CartesianGrid } from "recharts"

class Graph extends React.Component {

  render() {

    let dailyPoints = this.props.dailyTotal
    let graphData = [0, 0, 0, 0, 0, 0, 0]
    const dayNames = [
      "Mån",
      "Tis",
      "Ons",
      "Tor",
      "Fre",
      "Lör",
      "Sön"
    ]
    for (let i = 0; i < graphData.length; i++) {
      console.log("Number:", i)
      graphData[i] = {
        dailyPoints: dailyPoints[i],
        name: dayNames[i]
      }
    }
    console.log("GRAPH_DATA: ", graphData)


    return (
      <section className="graph-container">
        <h2 className="graph-container__header">Min vecka:</h2>
        <LineChart className="graph" width={400} height={200} data={graphData}>
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 4]}  />
          <Line type="monotone" dataKey="dailyPoints" stroke={"green"} activeDot={{ r: 8 }} />
        </LineChart>
      </section>
    )
  }

}

export default Graph
