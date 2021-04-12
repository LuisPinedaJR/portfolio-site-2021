import React from 'react'
import './card.css'

const Card = props => (
  <div className="card">
    <a href={props.url}>
      <img src={props.image} alt="project-card" />
      <h3>{props.title}</h3>
    </a>
    <p>{props.text}</p>
    <p className="note">{props.note}</p>
  </div>
)
export default Card
