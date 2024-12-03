import React from 'react'
import "./projectcard.css"

const Projectcard = ({details}) => {
  return (
    <div className="project-card">
        <h6>{details.title}</h6>
        <div className="project-content">
            <a href={details.link} target='_blank' rel='noopener noreferrer'>{details.link}</a> 
    
            <ul>
                {details.properties.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Projectcard