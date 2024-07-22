import React from 'react'
import "../style/skill.css"
import CardSkill from '../Components/cardSkill';
import UiUx from '../Assets/img/ux-design (1).png';
import FrontEnd from '../Assets/img/front-end.png';
import GraphicDesign from '../Assets/img/computer-graphic.png';
import Motion from '../Assets/img/motion-graphics.png';


export default function Skill() {
  return (
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
  )
}
