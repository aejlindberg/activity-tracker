import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { LineChart, Line, Tooltip, Legend, ResponsiveContainer, YAxis, XAxis, CartesianGrid } from "recharts"
import "./graph.scss"

class Graph extends React.Component {

  render() {

    let dailyPoints = this.props.dailyTotal
    let graphData = [0, 0, 0, 0, 0, 0, 0]
    const dayNames = [
      "M",
      "T",
      "O",
      "T",
      "F",
      "L",
      "S"
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
          <LineChart className="graph" width={300} height={250} data={graphData}>
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis type="number" domain={[0, 4]}  />
            <Line type="monotone" dataKey="dailyPoints" stroke={"#e60000"} activeDot={{ r: 8 }} />
          </LineChart>
      </section>
    )
  }

}

export default Graph
