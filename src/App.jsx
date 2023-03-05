import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Competencies from './components/Competencies/Competencies';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import ScrollToTop from 'react-scroll-to-top';
import NavbarMobileView from './components/NavbarMobileView/NavbarMobileView';
import Timeline from './components/Timeline/Timeline';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar/>
      <NavbarMobileView/>
      <Home/>
      <About/>
      <Competencies/>
      <Portfolio/>
      <Timeline/>
      <Services/>
      <Reviews/>
      <Contact/>
      <Footer/>

      <ScrollToTop smooth 
      color = "white"
      height="20"
      width="20"
      style={{borderRadius:"90px", backgroundColor:"#DD2C00"}}/>
      </>
  )
}

export default App