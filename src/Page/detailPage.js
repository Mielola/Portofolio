import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import cardData from '../Components/cardData';
import "../style/detailPage.css"
import Github from '../Assets/img/github-mark.png';
import Figma from '../Assets/img/figma-Icon.png';


export default function DetailPage() {
    const { id } = useParams();
    const project = cardData[id];
    const nav = useNavigate()

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <section className='container-detailpage'>
          <button onClick={() => nav("/")}><h2>Kembali</h2></button>
          {/* Image */}
          <img src={project.image} className='card-banner'/>

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
              <p>{project.job}</p>
            </div>

          </div>
          <div className='container-button'>
            <button><img src={Github}/>Lihat Kode di Github</button>
            <button 
            onClick={project.linkfigma}
            style={{
              backgroundColor: '#5C5470', 
              color: 'white'
              }}> <img src={Figma}/> Lihat Desain di Figma 
            </button>
          </div>
          
        </section>
    );
}
