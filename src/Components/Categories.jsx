import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class 
 extends Component {
  render() {
    return (
      <div>
        <ul className="nav ">
  <li className="nav-item">
    <Link className="nav-link active text-danger" aria-current="page" to="/business">Business</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-dark" to="/Sports">Sports</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-success" to="/entertainment">Entertainment</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-warning" to="/technology">Technology</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-primary" to="/science">Science</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-info" to="/health">Health</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-secondary" to="/">General</Link>
  </li>
</ul>
      </div>
    )
  }
}
