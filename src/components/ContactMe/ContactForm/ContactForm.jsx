import React from 'react'
import "./ContactForm.css"

const ContactForm = () => {
  return (
    <div className="contact-form-content">
        <form>
            <div className="name-container">
                <input type='text' name='firstname' placeholder='FirstName' autoComplete='on' />
                <input type='text' name='Lastname' placeholder='LastName' autoComplete='on' />
            </div>
            <input type='text' name='email' placeholder='Email' autoComplete='on' />
            <textarea type="text" name='message' placeholder='Message' autoComplete='on' rows={3} />

            <button>SEND</button>
        </form>
    </div>
  )
}

export default ContactForm