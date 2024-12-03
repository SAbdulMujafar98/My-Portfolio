import React from 'react'
import "./hero.css"

const Hero = () => {
    
    const imgSize = {
        width : "3rem",
        height : "auto",
    };


  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2><b>Santhapeta Abdul Mujafar</b></h2>
            <p>
               <b style={{fontSize:'1.2rem'}}> Passionate Frontend Developer</b> <br/>
                 Transforming Ideas into Seamless and
                Visually Stunning Web Solutions
            </p>
        </div>

        <div className="hero-img">
            <div>
                <img src='./assets/images/myphoto.png' alt='MyPhoto' />
            </div>

            <div>
                <div className="tech-icon">
                    <img src='./assets/images/react.png' alt='React' style={imgSize} />
                </div>
                <div className="tech-icon">
                    <img src='./assets/images/html.png' alt='HTML' style={imgSize} />
                </div>
                <div className="tech-icon">
                    <img src='./assets/images/css.png' alt='CSS' style={imgSize} />
                </div>
                <div className="tech-icon">
                    <img src='./assets/images/javascript.png' alt='JavaScript' style={imgSize} />
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Hero