import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import Contact from '../components/pages/Contact';

export default function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <div className="container">
      <Navbar.Brand href="Home" >Turja Chowdhury</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto ">
          <Nav.Link href="Portfolio">Portfolio</Nav.Link>
          &nbsp; &nbsp;
          <Nav.Link href="About">About</Nav.Link>
          &nbsp; &nbsp;
          <Nav.Link href="Contact">Contact</Nav.Link>
          &nbsp; &nbsp;
          <Nav.Link eventKey={2} target="_blank" href={'https://drive.google.com/file/d/1g_PfYR9RmebCPoin53iMpILQ6YIYu4Nw/view?usp=sharing'}> Resume </Nav.Link>
          &nbsp; &nbsp;
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
    </>
  );
}
// export default Navbar;