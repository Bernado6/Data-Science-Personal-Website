import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import { SiUpwork } from 'react-icons/si';

const HomeSocials = () => {
  return (
    <>
    <span className='social_icons'>
      <a href='https://linkedin.com/in/benard-kipngeno' target="_blank"><BsLinkedin size={30}/></a>
      <a href='https://github.com/Bernado6' target="_blank"><BsGithub size={30}/></a>
      <a href='https:/www.upwork.com/freelancers/~01746ddd947022a12b' target="_blank"><SiUpwork size={30}/></a>
    </span>
    </>
    
  )
}

export default HomeSocials