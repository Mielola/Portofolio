import { Card } from "../Components/card";
import cardData from "../Components/cardData";
import "../style/project.css";
import React from "react";

// Import Swiper styles
import 'swiper/css';

export default function Project() {
  return (
    <div id="project" className="container-project">
      <div className="myProject">
        <div className="subJudul" data-aos="fade-up">
          <h4 className="project-title">My Project</h4>
        </div>
        <Card data={cardData} />
      </div>
    </div>
    
  );
}
