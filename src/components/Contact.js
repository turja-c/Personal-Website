import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Contact.css";
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaGithub
  } from 'react-icons/fa';
import './Footer.css';

export default function App() {

      const divStyle = {
        // position: 'relative',
        marginTop: '20px',
        marginBottom: '60px',
        // bottom: '0rem'
      };
  
  return (
    <>
   <div className='container' style={divStyle}>
        <h1 className="header5">Contact</h1>        
        <Card className="contactCard" >
        <Card.Body className="contactCardInside">
            <Card.Title className="text6">Connect with me:</Card.Title>
            <Card.Text className="text5">
              <a href="https://www.linkedin.com/in/turja-c">
              LinkedIn
              </a>
            </Card.Text>
            <Card.Title className="text6">Email me:</Card.Title>
            <Card.Text className="text5">
              <a href="mailto: turja.c16@gmail.com">
              Personal Email
              </a>
            </Card.Text>
            <Card.Title className="text6">Check out my coding portfolio:</Card.Title>
            <Card.Text className="text5">
              <a href="https://github.com/turja-c">
              Github
              </a>
            </Card.Text>
            <Card.Title className="text6">Learn about my personal experiences:</Card.Title>
            <Card.Text className="text5">
              <a href="https://www.instagram.com/turja.c/">
              Instagram
              </a>
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
    </>
  );
}