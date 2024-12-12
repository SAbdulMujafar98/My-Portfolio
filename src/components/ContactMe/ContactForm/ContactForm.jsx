import React, {useState} from 'react'
import "./ContactForm.css"
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
        'service_joosrck',    // Replace with your EmailJS service ID
        'template_pkbajak',   // Replace with your EmailJS template ID
        formData,             // Form data object
        'jy_2DObB0uC0OTy6-'     // Replace with your EmailJS public key
    )
    .then((result) => {
        alert('Message sent successfully!');
        setFormData({ firstName: '', lastName:'', email: '', message: '' }); // Reset form
    })
    .catch((error) => {
        alert('Failed to send the message. Try again later.');
    });
};


  return (
    <div className="contact-form-content">
        <form onSubmit ={handleSubmit}>
            <div className="name-container">
                <input type='text' 
                name='firstName' 
                placeholder='FirstName' 
                value={formData.firstName}
                onChange={handleChange}
                autoComplete='on' 
                required
                />
                <input 
                type='text' 
                name='lastName' 
                placeholder='LastName' 
                value={formData.lastName}
                onChange={handleChange}
                autoComplete='on' 
                />
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              name='email' 
              value={formData.email}
              onChange={handleChange}
              autoComplete='on'
              required
            />
            <textarea
              placeholder="Enter your message"
              name='message' 
              value={formData.message}
              onChange={handleChange}
              autoComplete='on'
              required
            />


            <button type="submit">SEND</button>
        </form>
    </div>
  )
}

export default ContactForm