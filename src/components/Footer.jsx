import React from 'react';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-branding">
        <h4>Branding stuff</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo.</p>
      </div>

      <div className="footer-center">
         <div className="logo">
            <h1>[LOGO]</h1>
         </div>
      </div>

      <div className="footer-socials">
        {}
        <div className="social-icon">f</div>
        <div className="social-icon">t</div>
        <div className="social-icon">in</div>
        <div className="social-icon">G+</div>
      </div>
      
      <div className="footer-copyright">
        <p>2020 lof | Copyright all rights reserved, bla bla</p>
      </div>
    </footer>
  );
};

export default Footer;