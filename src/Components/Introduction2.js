import React from 'react'
import "../style/introduction2.css";
import { Typewriter } from 'react-simple-typewriter'
import profileImage from '../Assets/img/Group 12.svg';


export default function Introduction2() {
  return (
    <section className='section-container'>
        <div className='intro-container'>
        <div className='intro-card'>
          <h2>Hello Friends</h2>
          <h2 >I am <span className="name">{' '}
          <Typewriter
              words={['Wisnu Kresnohadi', 'Software Engineer', 'Backend Developer']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            /></span></h2>
                 <p>Backend Developer || Project Manager</p>
                <p>I'm a person who has a keen interest in the design layout. I think presenting an attractive design is a matter of concern in developing a branding of products. To creates a good design, I focus on proper composition and visual decoration details in order to make it more professional. For the time being, I’m developing the skill for acquiring the UI/UX design for dynamic application and web development.</p>
          </div>
          <div className='intro-image'>
            
          </div>
        {/* <img src={profileImage} alt="Profile"/> */}

        </div>
    </section>
  )
}
