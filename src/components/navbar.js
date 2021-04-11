import React, { Component } from 'react'
import './navbar.css'

export default class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <ul className="nav-list">
            <li>
              <a href="/">About ME</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Books</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
