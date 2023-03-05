import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {FaTwitterSquare, FaGithubSquare, FaInstagramSquare} from 'react-icons/fa';
import Zoom from 'react-reveal/Zoom';

const Footer = () => {
  return (
    <footer>
      <Zoom duration={1000} delay= {100}>
      <a href="#" className='footer_logo'>Benard Kipngeno</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
      <div className="footer_socials">
        <a href="https://linkedin.com/in/benard-kipngeno" target='_blank' className='linkedin'><BsLinkedin color='#0e76a8' size={30}/></a>
        <a href="https://github.com/Bernado6" color='#4078c0' target='_blank'><FaGithubSquare size={30}/></a>
        <a href="https://twitter.com/Benn_Yegon" target='_blank'><FaTwitterSquare color='#1da1f2' className='twitter' size={30}/></a>
        <a href="https://instagram.com/ben.yegon.927" target='_blank'><FaInstagramSquare color='#E4405F' className='insta' size={30}/></a>
      </div>
      

      <div className="footer_copyright">
        <small>&copy; 2023 Bernard, All rights reserved</small>
      </div>
      </Zoom>
    </footer>
  )
}

export default Footer