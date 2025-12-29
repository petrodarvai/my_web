import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navigation from "./Navigation";

const Header = () => {
  const cartCount = useSelector(state => state.cart.length);

  return (
    <header className="app-header">
      <div className="logo-placeholder">
        <h1>[LOGO]</h1>
      </div>

      <nav className="header-main-nav">
        <Navigation />

        {/* Cart link */}
        <Link to="/cart" className="nav-link">
          Cart ({cartCount})
        </Link>
      </nav>

      <div className="spacer"></div>
    </header>
  );
};

export default Header;
