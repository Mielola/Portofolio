import { Card } from "../Components/card";
import cardData from "../Components/cardData";
import "../style/project.css";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Project() {
  return (
    <div id="project" className="container-project">
      <div className="myProject">
        <div className="subJudul" data-aos="fade-up">
          <h4 className="project-title">My Project</h4>
          <p className="project-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            excepturi, culpa adipisci sapiente reiciendis nemo numquam enim
            omnis, sit fuga sequi doloremque nam. Repellat ullam ea non cumque.
            Mollitia, necessitatibus.
          </p>
          
        </div>
        

        <Card data={cardData} />
      </div>
    </div>
    
  );
}
