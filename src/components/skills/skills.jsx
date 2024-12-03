import React from 'react'
import "./skills.css"
import {SKILLS} from "../../data/data.js"
import SkillCard from './skillcard/skillcard'
import { useState } from 'react'
import SkillCardInfo from './skillinfocard/skillinfocard.jsx'

const Skills = () => {

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className="skills-container">
        <h5>Technical Proficiency</h5>

        <div className="skills-content">
            <div className="skills">
              {SKILLS.map((item) => (
                <SkillCard
                key = {item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={() => {
                  handleSelectSkill(item)
                }}
                />
              ))}
            </div>
            
            <div className="skills-info">
              <SkillCardInfo
              heading={selectedSkill.title}
              skills={selectedSkill.skills}
              />
            </div>
        </div>
    </section>
  )
}

export default Skills