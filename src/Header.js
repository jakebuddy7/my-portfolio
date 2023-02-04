import React from 'react';
import './Header.css';
import portfolioImage1 from './portfolioImage1.jpg';
import portfolioImage2 from './portfolioImage2.jpg';

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">My Portfolio</h1>
      <nav>
        <ul className="header-nav-list">
          <li className="header-nav-item">Home</li>
          <li className="header-nav-item">About</li>
          <li className="header-nav-item">Portfolio</li>
          <li className="header-nav-item">Contact</li>
        </ul>
      </nav>
      <div className="header-images-container">
        <img src={portfolioImage1} className="header-image" alt="Portfolio Image 1" />
        <img src={portfolioImage2} className="header-image" alt="Portfolio Image 2" />
      </div>
    </header>
  );
};

export default Header;