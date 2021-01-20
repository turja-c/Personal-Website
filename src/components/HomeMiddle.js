import React, { useRef, useState, useEffect, useCallback } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './HomeMiddle.css';
import { Link } from 'react-router-dom';
import { BsEnvelope } from "react-icons/bs";
import TextTransition, { presets } from "react-text-transition";
import {
    MdEmail,
    FaInstagram,
    FaLinkedin,
    FaGithub
  } from 'react-icons/fa';
import {useTransition, animated} from 'react-spring';
import {Transition} from 'react-spring/renderprops';
import SplitText from 'react-pose-text';

export default function App() {

    const divStyle3 = {
      marginTop: '6px',
      backgroundImage: `url(./images/face.png)`,
    };

  
    return ( 
    <>
     
        <Jumbotron style={{
         backgroundImage: `url(./images/background1.png)`,
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         height: '30rem',
      }}>
            <div className='container' >
            <h1 className="header">
              {/* <TextTransition
              text={ TEXTS[index % TEXTS.length] }
              springConfig={ presets.wobbly }
              /> */}
              Hello! 👋🏽
            </h1>
            
          
    
            <p className="text">My name is Turja Chowdhury, a marketing enthuiset-turned Computer Science <br></br>& Business Analytics Student currently attending Ryerson University.</p>
            <p className="text">I aspire to continue learning about the constantly changing technology industry <br></br> and diversifying my skills to adapt to new and complex challenges.</p>
            <div className='social-icons'>
            <Link
            className='social-icons'
            to='//www.facebook.com/turja.chowdhury.77'
            target='_blank'
            aria-label='Facebook'
            >
            <BsEnvelope /> 
            </Link>
            <Link
            className='social-icons'
            to='//www.instagram.com/turja.c/'
            target='_blank'
            aria-label='Instagram'
            >
            <FaInstagram />
            </Link>
    
            <Link
            className='social-icons'
            to='//www.github.com/turja-c'
            target='_blank'
            aria-label='Github'
            >
            <FaGithub />
            </Link>
            <Link
            className='social-icons'
            to='//www.linkedin.com/in/turja-c/'
            target='_blank'
            aria-label='LinkedIn'
            >
            <FaLinkedin />
            </Link>
            <div className="container">
            <img src="images/face5.png" height="100"
            className="face"
            />
            </div>
            </div>
           
            </div>
        </Jumbotron>

    </>
  )
  }

