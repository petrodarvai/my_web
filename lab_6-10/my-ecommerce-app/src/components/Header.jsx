import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-placeholder">
        <h1>[LOGO]</h1>
      </div>
      
      {}
      <nav className="header-main-nav">
        <Navigation />
        {}
        <a href="#" className="nav-link" disabled>Cart</a> 
      </nav>
      
      {}
      <div className="spacer"></div>
    </header>
  );
};

export default Header;