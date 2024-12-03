import React from 'react'
import Navbar from '../components/navbar/navbar'
import Projects from '../components/projects/projects'
import Footer from '../components/Footer/Footer'

const ProjectsPage = () => {
  return (
    <div>
        <Navbar />
        <div className="container">
          <div className="page">
            <Projects />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default ProjectsPage