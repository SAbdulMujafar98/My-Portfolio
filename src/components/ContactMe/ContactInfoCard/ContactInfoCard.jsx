import React from 'react'
import "./ContactInfoCard.css"

const ContactInfoCard = ({ iconUrl, link, url}) => {
  return (
    <section>
      <a href= {url}>
        <div className="contact-details-card">
          <div className="icon">
            <img src={iconUrl} alt={link} />
          </div>
          <p>{link}</p>
        </div>
      </a>
    </section>
  )
}

export default ContactInfoCard