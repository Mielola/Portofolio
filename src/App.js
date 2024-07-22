import Introduction from '../src/Components/Introduction';
import React, { useEffect, useState } from 'react';
import Nav from '../src/Components/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Project from './Components/project';
import "./style/skill.css"
import CardSkill from './Components/cardSkill';
import UiUx from './Assets/img/ux-design (1).png';
import FrontEnd from './Assets/img/front-end.png';
import GraphicDesign from './Assets/img/computer-graphic.png';
import Motion from './Assets/img/motion-graphics.png';
import Experience from './Components/Experience';
import Slider from './Components/Swiper';
import Introduction2 from './Components/Introduction2';


function App() {
  // const [getPage, setPage] = useState("");

  // const changePage = () => {
  //   setPage("Project")
  // };

    useEffect(() => {
        Aos.init({ duration: 800,
                     });
      }, []);
  return (
    <div className='main'>  
      <Nav onClick="{changePage}" />
      <Introduction/>
      <Project/> 
      <section className='skill-section' id='skill' >
        <div className='skill-container'>
        <div className='skill-desc'>
          <h4 data-aos ="fade-up" >My Skills</h4>
        </div>

          <div className='skill-body'>
            <CardSkill role="UI / UX Desainer" image={UiUx} />
            <CardSkill role="Front End Developer" image={FrontEnd}/>
            <CardSkill role="Game Developerr" image={GraphicDesign}/>
            <CardSkill role="Video Editor" image={Motion}/>
          </div>
        <div>
        </div>
        </div>
      </section>
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
    
  );
}

export default App;
