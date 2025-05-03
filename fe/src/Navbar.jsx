import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-icon-left">
          {/* Dummy left icon */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png" alt="icon" className="icon-left" />
        </div>
        <div className="navbar-logo-center">
          <span className="logo-text">LOGO</span>
        </div>
        <div className="navbar-icons-right">
          {/* Search icon */}
          <span className="icon-btn">
            <svg width="20" height="20" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </span>
          {/* Heart icon */}
          <span className="icon-btn">
            <svg width="20" height="20" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z"/></svg>
          </span>
          {/* Bag icon */}
          <span className="icon-btn">
            <svg width="20" height="20" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z"/><path d="M16 10C16 12.21 14.21 14 12 14C9.79 14 8 12.21 8 10"/></svg>
          </span>
          {/* User icon */}
          <span className="icon-btn">
            <svg width="20" height="20" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M2 20C2 16 8 14 12 14C16 14 22 16 22 20"/></svg>
          </span>
          {/* Language dropdown */}
          <span className="icon-btn lang-btn">
            ENG <svg width="12" height="12" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
          </span>
        </div>
      </div>
      <div className="navbar-bottom">
        <Link to="/shop" className="nav-link">SHOP</Link>
        <Link to="/skills" className="nav-link">SKILLS</Link>
        <Link to="/stories" className="nav-link">STORIES</Link>
        <Link to="/about" className="nav-link">ABOUT</Link>
        <Link to="/contact" className="nav-link">CONTACT US</Link>
      </div>
    </nav>
  );
}

export default Navbar; 