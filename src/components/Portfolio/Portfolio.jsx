import React from 'react';
import './portfolio.css';
import Portfolio1 from '../../assets/portfolio1.png';
import Portfolio2 from '../../assets/portfolio2.png';
import Portfolio02 from '../../assets/portfolio02.png';
import Portfolio03 from '../../assets/portfolio03.png';
import Portfolio4 from '../../assets/portfolio4.png';
import Portfolio101 from '../../assets/portfolio101.png';
import Portfolio102 from '../../assets/portfolio102.png';
import Portfolio104 from '../../assets/portfolio104.png';
import Portfolio105 from '../../assets/portfolio105.png';
import Portfolio106 from '../../assets/portfolio106.png';
import Portfolio107 from '../../assets/portfolio107.jpg';
import Fade from 'react-reveal/Fade';


const data = [
  {
    id: 1,
    image: Portfolio1,
    title: "Company Portfolio using React",
    github: "https://github.com/Bernado6/React-Company",
    demo: "https://asili-consultancy.netlify.app/"
  },

  {
    id: 2,
    image: Portfolio02,
    title: "Personal Portfolio using React",
    github: "https://github.com/Bernado6/React-Company",
    demo: "https://benard-kipngeno.netlify.app/"
  },

  {
    id: 3,
    image: Portfolio03,
    title: "Django and Javascript Car Website",
    github: "https://github.com/Bernado6/carzone-website-Django-project-",
    // demo: ""
  },

  {
    id: 4,
    image: Portfolio4,
    title: "Django Inastagram clone",
    github: "https://github.com/Bernado6/Social_App-Project",
    // demo: ""
  },

  {
    id: 7,
    image: Portfolio2,
    title: "E-Commerce website using React",
    github: "https://github.com/Bernado6/React-Company",
    demo: "https://ketfashion.netlify.app//"
  }
  
]

const data_cloud = [
  {
    id_cloud: 1,
    image_cloud: Portfolio101,
    title_cloud: "Hosting Static Website in S3 using Cloudfront for CDN Purpose ",
    github_cloud: "https://github.com/Bernado6/Final-Personal-Website",
    demo_cloud: "https://d1p6it4a5vwn4.cloudfront.net/"
  },

  {
    id_cloud: 2,
    image_cloud: Portfolio102,
    title_cloud: "Deploying Udagram-Filter App using Elastic BeanStalk ",
    github_cloud: "https://github.com/Bernado6/udacity-udagram-image-filter",
    // demo_cloud: "https://bernado6.github.io/Nodemo/"
  },

  {
    id_cloud: 3,
    image_cloud: Portfolio104,
    title_cloud: "Serverless framework and AWS Lambda",
    github_cloud: "https://github.com/Bernado6/React-Serverless-App",
    // demo_cloud: "https://bernado6.github.io/Nodemo/"
  },

  {
    id_cloud: 4,
    image_cloud: Portfolio105,
    title_cloud: "Deploying highly-available web app using CloudFormation",
    github_cloud: "https://github.com/Bernado6/Udacity-DevOps-Project2",
    // demo_cloud: "https://bernado6.github.io/Nodemo/"
  },

  {
    id_cloud: 5,
    image_cloud: Portfolio106,
    title_cloud: "Building CI-CD Pipeline to Give your Application Auto-Deploy Superpowers",
    github_cloud: "https://github.com/Bernado6/Practice-cicd",
    // demo_cloud: "https://d1p6it4a5vwn4.cloudfront.net/"
  },

  {
    id_cloud: 6,
    image_cloud: Portfolio107,
    title_cloud: "Operationalize a Machine Learning Microservice API using Cloud9, Kubernetes, and Docker",
    github_cloud: "https://github.com/Bernado6/Udacity-Project4-DevOps",
    // demo_cloud: "https://d1p6it4a5vwn4.cloudfront.net/"
  }
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <Fade left duration={600} delay={20}>
      <h2>Web Development Projects</h2>
      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo }) => {
            return(
              // portfolio 1
              <article key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
              
            )
          })
        }
      </div>
        {/* End of Web DEV Projects */}

        <h2>Cloud DevOps Projects</h2>
      <div className="container portfolio_container">
        {
          data_cloud.map(({id_cloud, image_cloud, title_cloud, github_cloud, demo_cloud }) => {
            return(
              // portfolio 1
              <article key={id_cloud} className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image_cloud} alt={title_cloud} />
              </div>
              <h3>{title_cloud}</h3>
              <div className="portfolio_item-cta">
                <a href={github_cloud} className='btn' target='_blank'>Github</a>
                <a href={demo_cloud} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
              
            )
          })
        }
      </div>
      </Fade>
    </section>
  )
}

export default Portfolio