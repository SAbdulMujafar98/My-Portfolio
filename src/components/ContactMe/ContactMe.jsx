import React from 'react'
import "./ContactMe.css"
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'


const ContactMe = () => {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex: 1}}>
            <ContactInfoCard
            iconUrl="./assets/images/email.png"
            link ="abdulmujafar.1998@gmail.com"
            url ="abdulmujafar.1998@gmail.com"
            />

            <ContactInfoCard
            iconUrl="./assets/images/github.png"
            link ="https://github.com/SAbdulMujafar98"
            url= "https://github.com/SAbdulMujafar98"
            />
            </div>

            <div style={{flex: 1}}>
              <ContactForm />
            </div>
            
        </div>
    </section>
  )
}

export default ContactMe