import React from 'react';
import './services.css';
import {BsFillCheckCircleFill} from 'react-icons/bs';

const Services = () => {;
 
  return (
    <section id='services'>
      <h5>Offered Services</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className='service_title'>
            <h3>AWS Cloud Services</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsFillCheckCircleFill className='service_list-icon' />
              <p>Web Hosting</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service_list-icon' />
              <p>Cloud Architect Service</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service_list-icon' />
              <p>Cloud Consultant</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service_list-icon' />
              <p>Cloud DevOps</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service_list-icon' />
              <p>Cloud Formation</p>
            </li>
          </ul>

        </article>
        {/* End of Cloud Services */}
        {/*  */}
        <article className='service'>
          <div className='service_title'>
            <h3>Data Science</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsFillCheckCircleFill className='service_list-icon' />
              <p>Data Cleaning</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service_list-icon' />
              <p>Statistical Analysis</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service_list-icon' />
              <p>Data Visualization</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service_list-icon' />
              <p>Machine Learning</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service_list-icon' />
              <p>Time Series</p>
            </li>
          </ul>

        </article>

        <article className='service'>
          <div className='service_title'>
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsFillCheckCircleFill className='service_list-icon' />
              <p>Personalized Website Portfolio</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service_list-icon' />
              <p>Organizational/College/Institutional Website</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service_list-icon' />
              <p>E-Commerce/Business Website</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service_list-icon' />
              <p>Gym Websites</p>
            </li>
          </ul>

        </article>
      </div>
    </section>
  )
};

export default Services