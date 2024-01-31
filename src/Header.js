import React, { useState, useEffect } from 'react';
import './style.css';
import logo from "./assets/images/logo.svg";
import iconMenu from "./assets/images/icon-menu.svg";
import iconMenuClose from "./assets/images/icon-menu-close.svg";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    updateScreenWidth();

    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      {screenWidth >= 640 ? (
        <div>
          <nav className="desktop-menu">
            <ul>
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className='hamburger-menu'>
          <div className="hamburger-icon" onClick={toggleMenu}>
            <img
              src={isMenuOpen ? iconMenuClose : iconMenu}
              alt={isMenuOpen ? 'iconMenuClose' : 'iconMenu'}
            />
          </div>
        </div>
      )}

      {isModalOpen && screenWidth < 640 && (
        <div className="modal-overlay">
            <ul className='model-content'>
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
