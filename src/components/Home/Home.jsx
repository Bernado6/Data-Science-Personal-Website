import React from 'react'
import './home.css';
import CTA from './CTA';
// import ME from '../../assets/me.jpg';
import HomeSocial from './HomeSocials';
import Typewriter from 'typewriter-effect';
// import {HiArrowDownCircle} from 'react-icons/hi';

const Home = () => {
  return (
    <header>
      <div className="container-fluid home">
      <div className="container header_container" id = "home">
        <h5>Hello  I'm</h5>
        <h1>Benard Kipngeno</h1>

        <h3 className="text_light"><Typewriter
           options={{
            strings: [
              'Data Scientist',
              'Cloud Devops Engineer',
              'AWS Cloud Expert',
              'Data Analyst'], 
            autoStart: true,
            loop: true,
            delay: 2,
            pauseFor: 1500
           }}></Typewriter>
        </h3>
        <p>
                
          I am a highly motivated, adaptable, and meticulous Data Scientist/Analyst with 3+ years of experience executing data-driven solutions to increase efficiency, accuracy, and utility of internal data processing.  I am experienced in data analytics, creating statistical models, using predictive data modelling, and analysing data to deliver insights and implement action-oriented solutions to complex business problems.</p>
        <CTA/>

        <HomeSocial/>
        <a href='#contact' className='scroll_down'>Click to Scroll Down</a>
      </div>
      <div className='me'>
          {/* <img src={ME} alt="me" /> */}

      </div>
      </div>
    </header>
  )
}

export default Home