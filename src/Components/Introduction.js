import React from "react";
import "../style/intro.css";
import profileImage from '../Assets/img/Group 12.svg';
import CV from '../Assets/CV_Muhammad Wildan_6706223151_D3RPLA.pdf';
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
              words={['Muhammad Wildan Dhiya', 'Software Engineer', 'Web & App Desainer', 'Game Developer']}
              loop={0}
              cursor
              
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            /></span></h2>
          <p className='role'>UI / UX Designer || Front End Developer || Game Developer</p>
          <p className='aboutMe'>Saya adalah mahasiswa di Universitas Telkom, saat ini sedang mengejar gelar di bidang 
          Rekayasa Perangkat Lunak Aplikasi. Saya memiliki minat yang kuat dalam mempelajari lebih lanjut 
          tentang pemrograman dan desain. Saya telah menyelesaikan banyak kursus dan sertifikasi untuk 
          meningkatkan keterampilan saya. Saya telah menghabiskan dua tahun untuk mempelajari rekayasa 
          perangkat lunak, termasuk pengembangan web dan aplikasi. Pengalaman saya sebagai asisten 
          praktikum membantu saya memahami lebih lanjut tentang desain dan pemrograman. </p>

          <div className="button-body">
          <a href={CV} className="button-download" download>Download CV</a>
            <button className="button-more">More</button>
          </div>
        </div>
        <img src={profileImage} alt="Profile" className='profile' />
        <div className="role-container">
          
            <div className="role-body">
              <h3 className="role-title">Game Developer</h3>
              <p className="role-info">Developer yang merancang, mengembangkan, dan menguji video game menggunakan 
                berbagai bahasa pemrograman dan teknologi untuk menciptakan pengalaman bermain yang menarik</p>
            </div>
            <div className="role-body">
              <h3 className="role-title">Front End Developer</h3>
              <p className="role-info">Pengembang web yang fokus pada antarmuka pengguna, memastikan situs web atau 
                aplikasi terlihat menarik dan fungsional di berbagai perangkat dan browser menggunakan HTML, CSS, dan 
                JavaScript.</p>
            </div>
            <div className="role-body">
              <h3 className="role-title">UI/UX Design</h3>
              <p className="role-info">Desainer yang menciptakan antarmuka pengguna yang estetis (UI) dan pengalaman pengguna yang intuitif (UX), memastikan tampilan yang menarik serta interaksi yang efisien dan memuaskan.</p>
            </div>

        </div>
      </div>
    </section>
  );
}

export default Introduction;
