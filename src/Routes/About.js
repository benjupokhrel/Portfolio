import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImg2 from '../Components/HeroImg2';
import AboutContent from '../Components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2  heading="About" text="I'm a Front-End developer passionate about frontend excellence."/>
<AboutContent/>
<Footer />
    </div>
  )
}

export default About