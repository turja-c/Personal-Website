import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./Contact.css";
import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
  } from 'react-icons/fa';
import { BsEnvelope } from "react-icons/bs";


export default function App() {

      const divStyle = {
        marginTop: '20px',
        marginBottom: '60px',
      };
  
  return (

   <div className="container" style={divStyle}>
        <Card className="contactCard" >
        <Card.Body className="">
            <Card.Title className="text6">Connect with me:</Card.Title>
            <Card.Text className="text5">
              <a href="https://www.linkedin.com/in/turja-c">
              <FaLinkedin /> LinkedIn
              </a>
            </Card.Text>
            <Card.Title className="text6">Email me:</Card.Title>
            <Card.Text className="text5">
              <a href="mailto: turja.c16@gmail.com">
              <BsEnvelope />  Personal Email
              </a>
            </Card.Text>
            <Card.Title className="text6">Check out my coding portfolio:</Card.Title>
            <Card.Text className="text5">
              <a href="https://github.com/turja-c">
              <FaGithub /> Github
              </a>
            </Card.Text>
            <Card.Title className="text6">Learn about my personal experiences:</Card.Title>
            <Card.Text className="text5">
              <a href="https://www.instagram.com/turja.c/">
              <FaInstagram /> Instagram
              </a>
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
    
  );
}