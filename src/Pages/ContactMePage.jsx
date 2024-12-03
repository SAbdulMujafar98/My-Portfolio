import React from 'react'
import Navbar from '../components/navbar/navbar'
import ContactMe from '../components/ContactMe/ContactMe'
import Footer from '../components/Footer/Footer'

const ContactMePage = () => {
  return (
    <div>
        <Navbar />
        <div className="container">
          <ContactMe />
        </div>
        <Footer />
    </div>
  )
}

export default ContactMePage