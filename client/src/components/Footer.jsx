import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosCall } from "react-icons/io";
import { FaTwitter, FaInstagramSquare, FaLinkedin, FaPlusCircle } from "react-icons/fa";
import './footer.css';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <section className='container-footer'>
      <div className='footer'>
        <div className='sb_footer-section_padding'>
          <div className='sb_footer-links'>
            <div className="sb_footer-links_div">
              <div className='footer-image'>
                <img src={logo} alt="logo" height='50px' />
                <p>Find Your Home ...</p>
              </div>
            </div>

            <div className='sb_footer-links_div'>
              <h4>uses links</h4>
              <Link to="/Home">
                <p>Home</p>
              </Link>
              <Link to="/About">
                <p>About us</p>
              </Link>
              <Link to="/contact">
                <p>Contact us</p>
              </Link>
              <Link to="/AddProperty">
                <p className='add-new-propert'>Add New Property <FaPlusCircle size={18} color='yellow' /></p>
              </Link>
            </div>

            <div className="sb_footer-links_div">
              <h4>Social</h4>
              <Link to="/Twitter">
                <p>Twitter</p>
              </Link>
              <Link to="/Linkedin">
                <p>Linkedin</p>
              </Link>
              <Link to="/Instagram">
                <p>Instagram</p>
              </Link>
            </div>

            <div className="sb_footer-links_div">
              <h4>Legal</h4>
              <Link to="/Terms">
                <p>Terms</p>
              </Link>
              <Link to="/Privacy">
                <p>Privacy</p>
              </Link>
              <Link to="/Cookies">
                <p>Cookies</p>
              </Link>
              <Link to="/Contact">
                <p>Contact</p>
              </Link>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
      <div className="sb_footer-copyright">
        <p>@{new Date().getFullYear()} SpiltSpace.Co All right reserved.</p>
        <div className="sb_footer-bellow-links">
          <Link to="call"><IoIosCall /></Link>
          <Link to="twitter"> <FaTwitter /></Link>
          <Link to="instagram"><FaInstagramSquare /></Link>
          <Link to="linkedin"><FaLinkedin /></Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;
