import React, { Component } from 'react'
import logo from '../svg/name.svg'
import logoWhite from '../svg/nameWhite.svg'

import './navbar.css'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({
        hasScrolled: true,
      })
    } else {
      this.setState({
        hasScrolled: false,
      })
    }
  }
  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'navbar HeaderScrolled' : 'navbar'}
      >
        {/* below i am going to put my logo */}
        <img src={this.state.hasScrolled ? logoWhite : logo} alt="logo" />
        <nav>
          <ul className="nav-list">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Books</a>
            </li>
            <li>
              <a href="/">Resume</a>
              <li>
                <a href="/">About me</a>
              </li>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
