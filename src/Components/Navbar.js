import React, { useState } from 'react';
import "../style/navbar.css";

const Nav = () => {

  const [isMenuopen, setMenuOpen] = useState(false)
  const [isButtonClick, setButtonClick] = useState(false);


  const handleMenuToggle = () => {
    setMenuOpen(!isMenuopen)
    setButtonClick(!isButtonClick)
  }

  
  const handleMenuItemClick = () => {
    setMenuOpen(false); // Menutup navbar
    setButtonClick(false); // Mengembalikan state isButtonClick menjadi false
  };

  return (
    <nav>
      <div className="logo">
        <h3>Mie<span>Creative</span></h3>
      </div>

      <ul className={isMenuopen ? "slide" : ""}>
        <li><a href="#intro" onClick={handleMenuItemClick}>About</a></li>
        <li><a href="#project" onClick={handleMenuItemClick}>Projects</a></li>
        <li><a href="#skill" onClick={handleMenuItemClick}>Skill</a></li>
        {/* <li><a href="" onClick={handleMenuItemClick}>Experience</a></li> */}
      </ul>

      <div className="menu-toogle" onClick={handleMenuToggle}>
        <input type="checkbox" checked={isButtonClick}></input> {/* Set properti checked ke nilai isButtonClick */}
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Nav;
