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
    paddingTop: '15px',
    paddingBottom: '15px'
    
  };
  const divStyle3 = {
      marginTop: '6px',
    };

  return (
    <>
     <div className="footer" style={divStyle2} className="container">
        {/* <Card.Header expand="lg" bg="light" variant="light">  */}
        <hr></hr>
        <div className="text-center">
          <h7>Designed and Created by Turja Chowdhury {"\n"}</h7>
        </div>
        
            
            {/* </Card.Header> */}
        
     </div>
    </>
  );
}
// export default Footer;