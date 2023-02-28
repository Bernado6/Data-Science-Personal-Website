import React from 'react';
import './portfolio.css';
import Portfolio1 from '../../assets/portfolio1.png';
import Portfolio2 from '../../assets/portfolio2.png';
import Portfolio02 from '../../assets/portfolio02.png';
import Portfolio03 from '../../assets/portfolio03.png';
import Portfolio4 from '../../assets/portfolio4.png';

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
    demo: ""
  },

  {
    id: 4,
    image: Portfolio4,
    title: "Django Inastagram clone",
    github: "https://github.com/Bernado6/Social_App-Project",
    demo: ""
  },

  {
    id: 7,
    image: Portfolio2,
    title: "Company Portfolio using React",
    github: "https://github.com/Bernado6/React-Company",
    demo: "https://ketfashion.netlify.app//"
  }
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
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

    </section>
  )
}

export default Portfolio