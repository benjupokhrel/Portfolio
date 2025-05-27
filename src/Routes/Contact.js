import React from 'react'
import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';
import HeroImg2 from '../Components/HeroImg2';
import Form from '../Components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2  heading="Contact" text="Let's connect and create something impactful."/>
      <Form/>
      <Footer />
    </div>
  )
}

export default Contact