import "../style/card.css";
import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'
import Github from '../Assets/img/github-mark-white.png';
import { useNavigate } from "react-router-dom";


export function Card(props) {
    const navigate = useNavigate();

    const handleViewSource = (index) =>{
        navigate(`/project/${index}`);
    }
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
                        <button className='card-button' onClick={() => handleViewSource(index)}> <img src={Github} /> View Source</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
