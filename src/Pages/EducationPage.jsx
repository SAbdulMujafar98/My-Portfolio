import React from 'react'
import Navbar from '../components/navbar/navbar'
import Education from '../components/Education/Education'
import Footer from '../components/Footer/Footer'

const EducationPage = () => {
  return (
    <div>
        <Navbar />
        <div className="container">
          <div className="page">
            <Education />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default EducationPage