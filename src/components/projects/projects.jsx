import React from 'react'
import "./projects.css"
import { PROJECTS } from '../../data/data'
import Projectcard from './projectcard/projectcard'
import { useRef } from 'react'
import Slider from "react-slick"

const Projects = () => {

  const sliderRef = useRef();

const settings = {
  dots:false,
  Infinity: true,
  speed:500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1,
      },
    },
  ],
};

const slideRight = () =>{
  sliderRef.current.slickNext();
};

const slideleft = () => {
  sliderRef.current.slickPrev();
};

  return (
    <section className="project-container">
        <h5>Projects</h5>

        <div className="project-content">

          <div className="arrow-right" onClick= {slideRight}>
            <span className="material-symbols-outlined">chevron_right</span>
          </div>

          <div className="arrow-left" onClick={slideleft}>
            <span className="material-symbols-outlined">chevron_left</span>
          </div>

          <Slider ref={sliderRef} {...settings}>
           {PROJECTS.map((item) => (
            <Projectcard key = {item.title} details = {item} />
           ))} 
           </Slider>
        </div>
    </section>
  )
}

export default Projects