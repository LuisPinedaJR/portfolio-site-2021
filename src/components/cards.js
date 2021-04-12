import React, { Component } from 'react'
import Card from './card'

import './cards.css'

export default class cards extends Component {
  render() {
    return (
      <div id="projects" className="cards">
        <h1>Projects</h1>
        <div className="card-group">
          <Card
            title="Bobo, Llc"
            text="Agency Website"
            image={'https://cl.ly/8414645535bd/download/DarkP0008.png'}
            note="Made with GatsbyJS"
            url="https://thinkbobo.com/"
          />
          <Card
            title="Bobo, Llc"
            text="Agency Website"
            image={'https://cl.ly/8414645535bd/download/DarkP0008.png'}
            note="Made with GatsbyJS"
            url="https://thinkbobo.com/"
          />
        </div>
      </div>
    )
  }
}
