import React from 'react';
import './about.css';
import ME from '../../assets/me.jpg';
import {GiAchievement} from 'react-icons/gi';
import {FcBriefcase} from 'react-icons/fc';
import { MdReviews} from 'react-icons/md';
import Zoom from 'react-reveal/Zoom';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <Zoom duration = {500} delay= {20}>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <a href="#portfolio">
            <article className='about_card'>
              <GiAchievement color='#ff3300' size = {50} className='about_icon'/>
              <h3>4+ year of Experience</h3>

            </article>
            </a>
            <a href='#reviews'>
            <article className='about_card'>
              <MdReviews color='#FF6F00' size = {50} className='about_icon'/>
              <h3>Clients Reviews 20+</h3>

            </article>
            </a>
            <a href="#portfolio">
            <article className='about_card'>
              <FcBriefcase size = {50} className='about_icon'/>
              <h3>Completed Projects 50+</h3>
            </article>
            </a>
          </div>
          <p>
          I have completed 50 data science projects and have gained over three years of valuable experience in the field. Throughout my career, I have received 22 reviews from clients and colleagues, which is a testament to my dedication to delivering high-quality work and meeting the needs of stakeholders. I continue to build on this experience and expertise to provide data-driven solutions that help organizations achieve their objectives.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
      </Zoom>

    </section>
  )
}

export default About