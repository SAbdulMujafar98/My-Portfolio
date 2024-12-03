import React from 'react'
import "./skillinfocard.css"

const SkillCardInfo = ({heading, skills}) => {
  return (
    <div className='skill-info-card'>
        <h6>{heading}</h6>

        <div className="skill-info-content">
            {skills.map((item, index) => (
                <React.Fragment key={`skill_${index}`}>
                     <div className="skill-info">
                        <p>{item.skills}</p>
                        <p className="percentage">{item.percentage}</p>
                     </div>

                     <div className="skill-progress-bg">
                        <div className="skill-progress" style={{width: item.percentage}} />
                     </div>
                </React.Fragment>
            ))}
        </div>
    </div>

    
    
  )
}

export default SkillCardInfo