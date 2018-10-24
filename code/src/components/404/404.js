import React from "react"
import { Link } from "react-router-dom"

class NotFound extends React.Component {

  render() {
    return (
      <div>
        <h1>Sorry... page not found.</h1>
        <Link to="/">
          <h2>Tillbaka till Min Sida</h2>
        </Link>
      </div>
    )
  }
}

export default NotFound
