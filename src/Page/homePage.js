import Project from '../Components/project';
import Experience from '../Components/Experience';
import Skill from '../Components/skill';
import Introduction from '../Components/Introduction';
import Nav from '../Components/Navbar';
import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css'

export default function () {
        useEffect(() => {
        Aos.init({ duration: 800,
                     });
      }, []);   
  return (
    <div className='main'>  
        <Nav onClick="{changePage}" />
        <Introduction/>
        <Project/> 
        <Skill />
        <Experience />
        {/* <section className='miniProject' >
        <div data-aos ="fade-up">
        <div className='swiper-desc'>
            <h4 >My Skills</h4>
            <h1 className='swiper-text' data-aos ="fade-up">Creates Professional Design That’s Oriented Towards Client Needs</h1>
        </div>
            <Slider/>
        </div>
        </section> */}
  </div>
  )
}
