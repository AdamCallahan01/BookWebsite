import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>Email Link</Link>
            <Link to='/'>Github or something</Link>
            <Link to='/'>Other Link</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Twitter</Link>
            <Link to='/'>Youtube</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Back to Top
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>AdamsBookCorner © 2023</small>
          </div>
      </section>
    </div>
  );
}

export default Footer;