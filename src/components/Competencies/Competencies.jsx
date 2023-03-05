import React from 'react';
import './competencies.css';
import {HiShieldCheck} from 'react-icons/hi';
import Fade  from "react-reveal/Fade";

const Competencies = () => {
  return (
    <section id='competencies'>
      <h5>My Core Competencies</h5>
      <Fade left  duration = {600} delay = {20}>
      <h2>Data Science</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          
          <h3>Data Science Tools</h3>
          <div className="experience_content">

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Python & R</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Power BI</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Git & GitHub</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>SPSS & STATA</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Excel</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          
          </div>
        </div>
        {/* </Fade  >
        <Fade right  duration = {6000} delay = {1500}> */}
        <div className="experience_backend">
        <h3>Data Science Skills</h3>
          <div className="experience_content">

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Data Cleaning</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Data Visualization</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Machine Learning</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Time Series</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Hypothesis Testing</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article> 

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Data Story Telling</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>
        {/* </Fade> */}
      </div>
      {/* End of Data Science  */}
      

      <h2>Web Development</h2>
      <div className="container experience_container">
      {/* <Fade left  duration = {2000} delay = {300}> */}
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>
        {/* </Fade>
        <Fade left  duration = {2000} delay = {300}> */}
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Django</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Postgres</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>NodeJs</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Postman</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Docker</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article> 

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>      
        </div>
        {/* </Fade> */}
      </div>
      {/* End of Web Dev */}

      <h2>AWS Cloud Computing</h2>
      <div className="container experience_container">
      {/* <Fade left duration= {3000} delay={500}> */}
        <div className="experience_frontend">
          <h3>What i can do</h3>
          <div className="experience_content">

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Hosting Websites</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Cloud Formation</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Operationalize ML at a scale</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Auto Scaling with ELB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>AWS Architect Consultant</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Serverless Applications</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>
        {/* </Fade>
        <Fade right duration= {6000} delay={1500}> */}
        <div className="experience_backend">
        <h3>Skilled On</h3>
          <div className="experience_content">

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Elastic Cloud Compute(EC2)</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Simple Storage Service(S3)</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>AWS RDS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Elastic Load Balance(ELB)</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Cloud9</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article> 

            <article className='experience_details'>
              <HiShieldCheck className = "experience_details-icons" />
              <div>
                <h4>Elastic BeanStalk</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>      
        </div>
      </div>
      </Fade>
      

    </section>
  )
}

export default Competencies;