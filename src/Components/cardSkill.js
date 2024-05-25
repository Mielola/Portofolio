
import React from 'react'
import "../style/cardSkill.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


export default function CardSkill(props) {
    useEffect(() => {
        Aos.init({ duration: 800,
                     });
      }, []);

  return (
        <div className="e-card playing" data-aos ="fade-up">
            <div className="image"></div>
            
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            

                <div className="infotop">

                
                    <img src={props.image} className='icon'></img>
                <br></br>    
            {props.role}
            <br></br>
            <div className="name-in-skill">Muhammad Wildan Dhiya Ulhaq</div>
  </div>
</div>



  )
}