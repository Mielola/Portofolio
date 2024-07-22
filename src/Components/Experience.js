import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react'
import "../style/experience.css"
import Skripsify from "../Assets/img/Skripsify.svg";
import Tzens from "../Assets/img/tzens.png";
import Schedulify from "../Assets/img/Schedulify.png";

export default function Experience() {
  return (
    <section>
        <div className='experience'>
            <h1>My Experince</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et excepturi, culpa adipisci sapiente reiciendis nemo numquam enim omnis, sit fuga sequi doloremque nam. Repellat ullam ea non cumque. Mollitia, necessitatibus</p>
        </div>
<VerticalTimeline>
    
    {/* Tzens Deskripsi */}
  <VerticalTimelineElement
  className="vertical-timeline-element"
  contentStyle={{ background: 'tomato', color: '#fff' }}
  contentArrowStyle={{ borderRight: '10px solid  tomato' }}
  date="Juni 2023 - September 2023" iconStyle={{ background: 'white', color: '#fff' }}
  icon={<img src={Skripsify} alt='Skripsify' width='75%'></img>}>
    
    <h3 className="vertical-timeline-element-title">Tel-u zens</h3>
    <h4 className="vertical-timeline-element-subtitle">FrontEnd Developer & UI/UX Desainer</h4>
    <p>

    Sebagai Front End Developer dan UI & UX Designer untuk website tzens, saya merancang dan mengembangkan 
    antarmuka pengguna yang intuitif dan responsif. Menggunakan HTML, CSS, JavaScript, dan framework Laravel.
    Tugas saya meliputi pengoptimalan performa, implementasi desain ramah pengguna, dan memastikan pengalaman pengguna
    yang mulus.
    </p>
  </VerticalTimelineElement>

  {/* Schedulify Deskripsi */}
  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
  date="2011 - present"
  iconStyle={{ background: 'white', color: '#fff' }}
  icon={<img src={Schedulify} alt='Skripsify' width='100%'></img>}>
    
    <h3 className="vertical-timeline-element-title">Schedulify</h3>
    <h4 className="vertical-timeline-element-subtitle">FrontEnd Developer & UI/UX Desainer</h4>
    <p>
    Sebagai Front End Developer dan UI & UX Designer untuk website Schedulify, tugas saya mencakup merancang dan 
    mengembangkan antarmuka yang intuitif dan responsif. Kami menggunakan HTML, CSS, JavaScript, dan framework Laravel, 
    serta memanfaatkan Tailwind untuk desain responsif.
    </p>

  </VerticalTimelineElement>

  {/* Healthyfy Deskripsi */}
  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'tomato', color: '#fff' }}
  contentArrowStyle={{ borderRight: '10px solid  tomato' }}
  date="Juni 2023 - September 2023" 
  iconStyle={{ background: 'white', color: '#fff' }}
  icon={<img src={Tzens} alt='Skripsify' width='100%'></img>}>
    
    <h3 className="vertical-timeline-element-title">Healthyfy</h3>
    <h4 className="vertical-timeline-element-subtitle">UI/UX Desainer</h4>
    <p>
    Sebagai UI & UX Designer di Schedulify, saya merancang antarmuka pengguna yang intuitif dan estetis, 
    mengembangkan wireframes dan desain high-fidelity, serta memastikan pengalaman pengguna yang optimal 
    dengan prinsip desain responsif.
    </p>

  </VerticalTimelineElement>
</VerticalTimeline>
</section>
  )
}
