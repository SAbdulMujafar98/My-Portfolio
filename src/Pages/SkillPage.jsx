import React from 'react'
import Navbar from '../components/navbar/navbar'
import Skills from '../components/skills/skills'
import Footer from '../components/Footer/Footer'

const SkillPage = () => {
  return (
    <div>
        <Navbar />
        <div className="container">
          <Skills />
        </div>
        <Footer />
    </div>
  )
}

export default SkillPage