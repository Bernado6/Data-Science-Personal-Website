import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import ScrollToTop from 'react-scroll-to-top';

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
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