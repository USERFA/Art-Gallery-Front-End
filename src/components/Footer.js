import React from 'react';
import './Footer.css';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>  
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <p><AiIcons.AiFillFacebook/> blblbl</p>
            <p> <AiIcons.AiFillInstagram/> blblblb</p>
            <p><FaIcons.FaSnapchatGhost/> blblblbl</p>
            <p><AiIcons.AiFillLinkedin/> nlnlnlnl</p>          
          </div>
          <div className="footer-link-items">
            <h2>Contact us</h2>
            <p><AiIcons.AiFillPhone/> 088888</p>
            <p><FaIcons.FaLocationArrow/> Rabat Al Irfane</p>
            <p><AiIcons.AiTwotoneMail/> ARTLIFE@gmail.com</p>            
          </div>         
        </div>
      </div>
    <section className="social-media">
      <div className="social-media-wrap">
       <small className="website-rights">ARTLIFE <AiIcons.AiFillCopyrightCircle/> 2021</small>
      <div className="social-icons">

      </div>
      </div>
    </section>
    </div>
  );
}

export default Footer;