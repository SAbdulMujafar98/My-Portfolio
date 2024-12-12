import React from 'react'
import axios from 'axios'
import "./ContactMe.css"
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'


const ContactMe = () => {

  const handleSendMail = async () =>{
    try{
      const responce = await axios.post("http//localhost:5000/send-email",{
        mail:"recipient-email@gmail.com",
        subject: "Hello",
        message: "this is mail",
      });
      alert(responce.data);
    } catch(error)  {
      console.error("Error sending Mail:", error);
      alert("Failed to send Mail");
    }
  };

  return (
    <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex: 1}}>
              <div onClick={handleSendMail}>
              <ContactInfoCard
              iconUrl="./assets/images/email.png"
              link ="abdulmujafar.1998@gmail.com"
              url ="abdulmujafar.1998@gmail.com"
              />
              </div>

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