import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaGithub
  } from 'react-icons/fa';
import './Footer.css';

export default function App() {
  const divStyle2 = {
    marginTop: '60px',
    
  };
  const divStyle3 = {
      marginTop: '6px',
    };

  return (
    <>
     <Card className="footer" style={divStyle2} >
        <Card.Header expand="lg" bg="light" variant="light"> 
        <div className="container">
        
        <h7>Made with 	&hearts; by Turja Chowdhury {"\n"}</h7>
        <div className='row container' style={divStyle3} >
            <Link
            className='social-icons-footer'
            to='//www.instagram.com/turja.c/'
            target='_blank'
            aria-label='Instagram'
            >
            <FaInstagram />
            </Link>
    
            <Link
            className='social-icons-footer'
            to='//www.github.com/turja-c'
            target='_blank'
            aria-label='Github'
            >
            <FaGithub />
            </Link>
            <Link
            className='social-icons-footer'
            to='//www.linkedin.com/in/turja-c/'
            target='_blank'
            aria-label='LinkedIn'
            >
            <FaLinkedin />
            </Link>
            <Link
            className='social-icons-footer'
            to='//www.facebook.com/turja.chowdhury.77'
            target='_blank'
            aria-label='Email'
            >
            <FaFacebook /> 
            </Link>
            </div>
            </div>
            
            </Card.Header>
        
     </Card>
    </>
  );
}
// export default Footer;