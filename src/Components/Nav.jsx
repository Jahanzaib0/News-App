import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
        <nav className="navbar bg-light ">
        <div className="container-fluid d-flex justify-content-center">
          <Link className="navbar-brand text-danger" to="/"><strong>Saudi Arab News Update </strong></Link>
        </div>
      </nav>
    )
  }
}
