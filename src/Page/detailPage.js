import React from 'react';
import { useParams } from 'react-router-dom';
import cardData from '../Components/cardData';
import "../style/detailPage.css"
import Github from '../Assets/img/github-mark.png';


export default function DetailPage() {
    const { id } = useParams();
    const project = cardData[id];

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <section className='container-detailpage'>
          {/* Image */}
          <img src={project.banner} className='card-banner'/>

          <div className='container-detail'>

            {/* Deskripsi Project */}
            <div className='container-header'>
              <h1>Deskripsi Project</h1> 
              <br />
              <p>{project.info}</p>
            </div>

            {/* Fitur Utama */}
            <div className='container-header'>
              <h1>Fitur Utama </h1> 
              <br />
              <p>{project.info}</p>
            </div>

            {/* Teknologi Project */}
            <div className='container-header'>
              <h1>Teknlogi Yang Digunakan </h1> 
              <br />
              <p>{project.info}</p>
            </div>

            {/* Job Desk Project */}
            <div className='container-header'>
              <h1>Job Desk </h1> 
              <br />
              <p>{project.info}</p>
            </div>

          </div>
          
          <div className='container-button'>
            <button><img src={Github}/>Lihat Kode di Github</button>
            <button style={{backgroundColor: '#5C5470', color: 'white',}}> Lihat Desain di Figma </button>

          </div>
        </section>
    );
}
