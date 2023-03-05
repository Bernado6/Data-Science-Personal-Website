import React from 'react';
import './timeline.css';
import Fade from 'react-reveal/Fade';

const Timeline = () => {
  return (
    <section id = 'timeline'>
      <h5>Timeline</h5>
      <Fade left delay={100} duration={1000} >
      <h2>Degree, Licence and Certifications</h2>

      <div className="container timeline-container">
        <div className="timeline-card">
          <div className="timeline-card-header">
            <h3>Bachelor of Economics and Statistics</h3>
            <h2>University of Nairobi</h2>
            <p>2018 Jan-2022 May</p>
            <p>Grade: Second Class Honours(Upper Division)</p>
          </div>
          <div className="timeline-card-body">
            <h3>Areas of Study</h3>
            <p>Statistics, Research and Research Methods, Time series, Econometrics, Hypothesis Testing, Linear modeling, Probability, Stochastics Processes & its Applications, Macroeconomics, Microeconomics, Linear Algebra, Calculus, Monetary Economics.</p>
          </div>
          <div className="cert_view">
                <a href="https://drive.google.com/file/d/1rexyB86Gh1aOg3A-qyv-LhQnquxWypI_/view?usp=share_link" className='view' target='_blank'>View Certificate</a>
          </div>
        </div>
        <div className="timeline-card">
          <div className="timeline-card-header">
            <h3>Data Analyst</h3>
            <h2>DataCamp</h2>
            <p>September 2021 – October 2022</p>
          </div>
          <div className="timeline-card-body">
            <h3>Areas of Study</h3>
            <p>Introduction to Data Science in Python, Intermediate Python, Data Manipulation with pandas, Joining data with Pandas, Introduction to Statistics in Python, Data Cleaning, Data Visualization with Pandas, Exploratory data Analysis in Python, Sampling in Python, Hypothesis Testing in Python</p>
          </div>
          <div className="cert_view">
                <a href="https://www.datacamp.com/statement-of-accomplishment/track/ebe824455a7f9249ebc34257f4dcfa286828b4b7" className='view' target='_blank'>View Certificate</a>
          </div>
        </div>
        <div className="timeline-card">
          <div className="timeline-card-header">
            <h3>Data Scientist</h3>
            <h2>DataCamp</h2>
            <p>September 2021- November 2022</p>
          </div>
          <div className="timeline-card-body">
            <h3>Areas of Study</h3>
            <p>Data Visualization with matlotlib, Seaborn, Numpy, Data Communication concepts, Importing data in python, Cleaning data in python, Working with dates and times in python, Writing functions in python, Analyzing police activity with pandas, Regression with statsmodels, Supervised learning with scikit-learn, Unsupervised learning in python, Machine Learning with Tree-based models in python</p>
          </div>
          <div className="cert_view">
                <a href="https://www.datacamp.com/statement-of-accomplishment/track/15bdf8f5c59ed0aaa63ce9a6b57aa491b7ca0555" className='view' target='_blank'>View Certificate</a>
          </div>
        </div>
        <div className="timeline-card">
          <div className="timeline-card-header">
            <h3>Cloud Solutions Architect</h3>
            <h2>AWS Cloud</h2>
            <p>September 2022 – Present</p>
          </div>
          <div className="timeline-card-body">
            <p>Cloud computing fundamentals. Overview of core AWS services such as EC2, S3, EBS, RDS, and VPC, Security and compliance with IAM, Security Groups, and KMS. AWS architecture and billing, including regions, availability zones, global infrastructure, and cost management. Deployment and management with CloudFormation. Elastic Beanstalk, OpsWorks, and CloudWatch, Troubleshooting with Support, Trusted Advisor, and CloudTrail</p>
          </div>
          <div className="cert_view">
                <a href="In progress" className='view' target='_blank'>In Progress</a>
          </div>
        </div>
        <div className="timeline-card">
          <div className="timeline-card-header">
            <h3>Cloud Developer Nanodegree</h3>
            <h2>Udacity</h2>
            <p>July 2022 – November 2022</p>
          </div>
          <div className="timeline-card-body">
            <h3>Areas of Study</h3>
            <p>AWS Cloud Fundamentals, Deploy Infrastructure as a Code(IAC), Building CI/CD Pipelines, Monitoring and Logging, Microservices at Scale using AWS and Kubernetes</p>
          </div>
          <div className="cert_view">
                <a href="https://confirm.udacity.com/GLF7AMXD" className='view' target='_blank'>View Certificate</a>
          </div>
        </div>
        <div className="timeline-card">
          <div className="timeline-card-header">
            <h3>Cloud DevOps Engineer Nanodegree</h3>
            <h2>Udacity</h2>
            <p>December 2022 – March 2023</p>
          </div>
          <div className="timeline-card-body">
            <p>AWS Cloud Fundamentals, Hosting Full stack App on AWS using Elastic Beanstalk, Refactoring and Hosting monolith to Microservices at scale, Develop and Deploy Serveless App using Lambda </p>
          </div>
          <div className="cert_view">
                <a href="https://confirm.udacity.com/TNTQC9XF" className='view' target='_blank'>View Certificate</a>
          </div>
        </div>
      </div>
      </Fade>
    </section>
  );
};

export default Timeline;
