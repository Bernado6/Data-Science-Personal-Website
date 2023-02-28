import React from 'react';
import './about.css';
import ME from '../../assets/me.jpg';
import {GiAchievement} from 'react-icons/gi';
import {FcBriefcase} from 'react-icons/fc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <GiAchievement size = {50} className='about_icon'/>
              <h3>3+ year of Experience</h3>

            </article>
            <article className='about_card'>
              <GiAchievement size = {50} className='about_icon'/>
              <h3>Core Competencies</h3>

            </article>
            <article className='about_card'>
              <FcBriefcase size = {50} className='about_icon'/>
              <h3>Projects 50+</h3>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui asperiores praesentium deserunt provident nesciunt deleniti consectetur, magni, vero numquam vel rem excepturi nobis omnis reprehenderit ducimus saepe, minus ipsam.
          </p>
          <a href='#Contact'className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About