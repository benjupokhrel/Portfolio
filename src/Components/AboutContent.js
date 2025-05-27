import { Link } from 'react-router-dom'
import './AboutConStyles.css'
import React1 from '../assets/React1.jpg'
import ReactOne from '../assets/ReactOne.jpg'

import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>
                A Bit About Me
            </h1>
            <p>
Built by someone who's still learning, but truly loves the process. Every line of code is a step forward, and every project is a new opportunity to grow. I don't know everything yet But I'm here, showing up, improving, and building with care.
            </p>
            <Link to="/contact"> 
            <button className="btn"> Contact</button>
            
             </Link>
        </div>

        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={React1} className='img' alt="true" />
                </div>

                <div className='img-stack bottom'>
                    <img src={ReactOne} className='img' alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent