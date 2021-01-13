import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    FaInstagram,
    FaLinkedin,
    FaGithub
  } from 'react-icons/fa';
import { BsEnvelope } from "react-icons/bs";


class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "Submit"
    };   
  } 

  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();  
    this.setState({ status: "Sending" });  
    axios({
      method: "POST",
      url: "http://localhost:5000/contact",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        alert("Message Sent");
        this.setState({ name: "", email: "", message: "", status: "Submit" });
      } else if (response.data.status === "failed") {
        alert("Message Failed");
      }
    });
  }
  render() {
    let buttonText = this.state.status;

    const divStyle1 = {
        marginTop: '40px',
        marginBottom: '50px'
      };

      const divStyle2 = {
        marginTop: '20px',
        marginBottom: '-30px'
      };

    return (  
        <>
        <div className="container" style={divStyle1}>
            <h1 className="header4 ">CONTACT ME</h1>
            <p className="text3">I'm always happy to chat! Please feel free to leave me a message.</p> 
            <div className="text-center" style={divStyle1}>
                <h1>
                <a href="https://www.linkedin.com/in/turja-c">
                    <FaLinkedin /> Linkedin &nbsp;
                </a>
                     |
                     <a href="mailto: turja.c16@gmail.com">  
                     &nbsp; <BsEnvelope /> Email &nbsp;
                     </a>
                     |
                     <a href="https://github.com/turja-c">
                     &nbsp;<FaGithub /> Github &nbsp;
                     </a> 
                     | 
                     <a href="https://www.instagram.com/turja.c/">
                     &nbsp;<FaInstagram /> Instagram
                     </a>
                     </h1>
                     
            </div>
        
        <Form className="container2" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <Form.Group controlId="Form.ControlInput1">
                <Form.Label htmlFor="name">Name: </Form.Label>
                <Form.Control 
                    placeholder="John Doe"
                    type="text"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this)}
                    required />
            </Form.Group>
            <Form.Group controlId="Form.ControlInput1">
            <Form.Label htmlFor="email">Email: </Form.Label>
            <Form.Control 
                type="email"
                id="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
                required
                placeholder="name@email.com" />
            </Form.Group>
            <Form.Group controlId="Form.ControlTextarea1">
                <Form.Label htmlFor="message">Message:</Form.Label>
                <Form.Control 
                as="textarea" 
                rows={4} 
                placeholder="I'm curious to learn about..."
                id="message"
                value={this.state.message}
                onChange={this.handleChange.bind(this)}
                required/>
            </Form.Group>
            <Button variant="primary" type="submit">
            {buttonText}
            </Button>
        </Form>   
        </div>
        </>   
    );
}
}

export default ContactForm;
