import React from 'react'
import "./Education.css"
import { EDUCATION } from '../../data/data'
import { useRef } from 'react'
import Slider from "react-slick"
import EducationCard from './educationcard/EducationCard'

const Education = () => {

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
        <h5>Education</h5>

        <div className="project-content">

          <div className="arrow-right" onClick= {slideRight}>
            <span className="material-symbols-outlined">chevron_right</span>
          </div>

          <div className="arrow-left" onClick={slideleft}>
            <span className="material-symbols-outlined">chevron_left</span>
          </div>

          <Slider ref={sliderRef} {...settings}>
           {EDUCATION.map((item) => (
            <EducationCard key = {item.title} details = {item} />
           ))} 
           </Slider>
        </div>
    </section>
  )
}

export default Education