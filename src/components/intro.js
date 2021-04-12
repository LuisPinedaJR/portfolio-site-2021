import React, { Component } from 'react'
import './intro.css'

export default class intro extends Component {
  render() {
    return (
      <div className="intro">
        {/* <div className="wrapper">
         
          <div className="static-txt">I am a</div>
          <ul className="dynamic-txt">
            <li>
              <span>Front end</span>
            </li>
            <li>
              <span>Software engineer</span>
            </li>
            <li>
              <span>Web developer</span>
            </li>
            <li>
              <span>Creator</span>
            </li>
          </ul>
        </div> */}
        <h1>
          Hello, My name is <br />
          Luis Pineda
        </h1>

        <p>
          I am a <a href="/">Front-end developer.</a>
        </p>
      </div>
    )
  }
}
