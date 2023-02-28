import React from 'react';
import Benard_CV from '../../assets/Benard-CV.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Benard_CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA