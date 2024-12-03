import React from 'react'
import "./Educationcard.css"

const EducationCard = ({details}) => {
  return (
    <div className="education-card">
        <h6>{details.title}</h6>
        <div className="project-content">
            <a href={details.link} target='_blank' rel='noopener noreferrer'>{details.college}</a> 
    
            <ul>
                {details.properties.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default EducationCard