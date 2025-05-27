import './FooterStyles.css';

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'#fff', marginRight: '2rem'}}/>

                    <div>
                        <p> Deep, Pokhara.</p>
                        <p>Nepal</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4> <FaPhone size={20} style={{color:'#fff', marginRight: '2rem'}}/>
                    +977 9800000000</h4>
                    
                </div>

      <div className='email'>
                    <h4> <FaMailBulk size={20} style={{color:'#fff', marginRight: '2rem'}}/>
                    pokhrelbenju@gmail.com</h4>
                    
                </div>
            </div>


            <div className='right'>
                <h4>About Me</h4>
                <p>
                    "Crafted with care by a passionate React developer and software engineering student, building dreams one line of code at a time."
                </p>

<div className='social'>
     <FaFacebook size={30} style={{color:'#fff', marginRight: '1rem'}}/>
      <FaGithub size={30} style={{color:'#fff', marginRight: '1rem'}}/>
    <FaLinkedin size={30} style={{color:'#fff', marginRight: '1rem'}}/>
    
     
                
</div>


            </div>
        </div>
    </div>
  )
}

export default Footer