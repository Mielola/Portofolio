import React from "react";
import "../style/intro.css";
import profileImage from '../Assets/img/Group 12.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from 'react-simple-typewriter'

function Introduction() {

  return (
    <section id="intro" className="myBg">
      <div className="container">
        <div className="intro">
          <h2 className='PrimaryJudul'>Hello Friends</h2>
          <h2 className='PrimaryJudul' >I am <span className="name">{' '}
          <Typewriter
              words={['Muhammad Wildan Dhiya', 'Software Engineer', 'Web & App Desainer']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            /></span></h2>
          <p className='role'>UI / UX Designer || Front End Developer</p>
          <p className='aboutMe'>I'm a person who has a keen interest in the design layout. I think presenting an attractive design is a matter of concern in developing a branding of products. To creates a good design, I focus on proper composition and visual decoration details in order to make it more professional. For the time being, I’m developing the skill for acquiring the UI/UX design for dynamic application and web development.</p>

          <div className="button-body">
            <button className="button-download">Download CV</button>
            <button className="button-more">More</button>
          </div>
        </div>
        <img src={profileImage} alt="Profile" className='profile' />
        <div className="role-container">
          
            <div className="role-body">
              <h3 className="role-title">Graphic Design</h3>
              <p className="role-info">Graphic design is an applied art and profession that uses text and graphics to communicate visually.</p>
            </div>
            <div className="role-body">
              <h3 className="role-title">Front End Developer</h3>
              <p className="role-info">Product design describes the process of imagining, creating, and iterating products that solve users' problems or address specific needs in a given market..</p>
            </div>
            <div className="role-body">
              <h3 className="role-title">UI/UX Design</h3>
              <p className="role-info">UI/UX is the process of defining the experience a user would go through when interacting with a digital</p>
            </div>

        </div>
      </div>
    </section>
  );
}

export default Introduction;
