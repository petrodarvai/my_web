import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/catalog" className="nav-link">Movie Library</Link>
    </nav>
  );
};

export default Navigation;