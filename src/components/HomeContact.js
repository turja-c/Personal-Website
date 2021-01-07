import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./HomeContact.css"
import {
    MdEmail,
    FaInstagram,
    FaLinkedin,
    FaGithub
  } from 'react-icons/fa';

export default function App() {
    const divStyle1 = {
        marginTop: '40px',
        marginBottom: '40px'
      };
  return (
    <>
    <div style={divStyle1}>
        <div className="container">
            <h1 className="header4 ">CONTACT ME</h1>
            <p className="text3">I'm always happy to chat! Please feel free to leave me a message.</p> 
        </div>
        <Form className="container2 container">
            <Form.Group controlId="Form.ControlInput1">
                <Form.Label>Name: </Form.Label>
                <Form.Control type="name" placeholder="John Doe" required/>
            </Form.Group>
            <Form.Group controlId="Form.ControlInput1">
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email" placeholder="name@email.com" />
            </Form.Group>
            <Form.Group controlId="Form.ControlTextarea1">
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="I'm curious to learn about..."/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
    </>
  );
}