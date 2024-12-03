import React from 'react'
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import Skills from './skills/skills';
import Projects from './projects/projects';
import ContactMe from './ContactMe/ContactMe';
import Footer from './Footer/Footer';
import Education from './Education/Education';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills />
        <Education />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
   </>
  )
}

export default Home