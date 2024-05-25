import "../style/card.css";
import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'
import Github from '../Assets/img/github-mark-white.png';

// const images ={}

// // Perbaikan pada loop untuk menamai file gambar dengan benar
// const jumlah_foto = 2;
// for (let i = 1; i <= jumlah_foto; i++) {
//   images[`frame${i}`] = require(`./Assets/img/frame${i}.png`);
// }

export function Card(props) {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, [])

    return (
        <div className="pembungkus" >
            {props.data.map((item, index) => (
                <div className='card' key={index} data-aos="fade-up">
                    <img src={item.image} className='card-image' alt={`Image ${index}`}/>
                    <div className='card-body'>
                        <h3 className='card-title' >{item.title}</h3>
                        <p className='card-subtitle'>{item.subtitle}</p>
                        <p className='card-info'>{item.info}</p>
                        <a className='card-button' href={item.link}> <img src={Github} /> View Source</a>
                    </div>
                </div>
            ))}
        </div>
    )
}
