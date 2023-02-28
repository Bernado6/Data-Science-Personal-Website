import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import { SiUpwork } from 'react-icons/si';

const HomeSocials = () => {
  return (
    <span className='social-icons'>
        <a href='https://linkedin.com' target="_blank"><BsLinkedin size={30}/></a>
        <a href='https://github.com' target="_blank"><BsGithub size={30}/></a>
        <a href='https://upwork.com' target="_blank"><SiUpwork size={30}/></a>
    </span>
  )
}

export default HomeSocials