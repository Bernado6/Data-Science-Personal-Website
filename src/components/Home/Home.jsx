import React from 'react'
import './home.css';
import CTA from './CTA';
import ME from '../../assets/me.jpg';
import HomeSocial from './HomeSocials';
import Typewriter from 'typewriter-effect';
// import {HiArrowDownCircle} from 'react-icons/hi';
import Greeting from './Greetings';
import Fade from 'react-reveal/Fade';


const Home = () => {
  return (
    <header id = "home">
      <Fade right delay= {20} duration ={600}>
      <div className="container-fluid home">
        <div className="container header_container">
        
          <h3 className="text_h3"><Greeting/></h3>
          <h1 className='text_h1'>I'm Benard Kipngeno</h1>

          <h3 className="text_light"><Typewriter
            options={{
              strings: [
                'Data Scientist',
                'Machine Learning Engineer'], 
              autoStart: true,
              loop: true,
              delay: 2,
              pauseFor: 1500
            }}></Typewriter>
          </h3>
          <p>
          As a data scientist, I have hands-on experience with a range of mathematical, statistical, and machine learning techniques used to gather, process, analyze, and interpret large and complex datasets.
          I am passionate about data science and constantly keep up with the most recent developments in both technology and data science approaches. I'm interested about the opportunity to use my knowledge and expertise to support businesses in achieving their goals by using data-driven decisions.        
          </p>
          <CTA/>

          <HomeSocial/>
          <a href='#contact' className='scroll_down'>Click to Scroll Down</a>
        </div>
        <div className='about_me-home'>
          <div className='me'>
              <img src={ME} alt="me" /> 
        </div>
        </div>
      </div>
      </Fade>
    </header>
  )
}

export default Home