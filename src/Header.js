import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">Logo</div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header-section">
        <img src="path/to/banner-image.jpg" alt="Portfolio Banner Image" />
      </div>
    </header>
  );
}

export default Header;