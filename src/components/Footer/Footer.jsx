import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {FaTwitterSquare, FaGithubSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
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
        <a href="https://linkedin.com/in/benard-kipngeno" target='_blank'><BsLinkedin size={30}/></a>
        <a href="https://github.com/Bernado6" target='_blank'><FaGithubSquare size={30}/></a>
        <a href="https://twitter.com/Benn_Yegon" target='_blank'><FaTwitterSquare size={30}/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Bernard. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer