import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import "./About.css";

export default function App() {

    const divStyle = {
        marginLeft: '40px',
      };

    const divStyle2 = {
        marginTop: '40px',
        marginBottom: '60px'
      };

  return (
    <>
    
    <div className='container' style={divStyle2}>
            <h1 className="header4">WHAT I BRING</h1>
            <p className="text4"></p> 

            <CardDeck className="row">
        <Card className="col-sm aboutCards">
            <Card.Header>
          <Card.Title>
          <h2 className="header2">Programming Languages</h2>
          </Card.Title>
        </Card.Header>
        <Card.Body>
            <Card.Title style={divStyle}>
                <div class="container row">
                    <div class="column" >
                        <ul>
                            <li>
                        <h5>Python</h5>
                            </li>
                            <li>
                        <h5>JavaScript</h5>
                            </li>
                            <li>
                        <h5>HTML/CSS</h5>
                            </li>
                            <li>
                        <h5>C</h5>
                            </li>
                            <li>
                        <h5>Java</h5>
                            </li>
                        </ul>
                    </div>
                    <div class="column">
                    <ul>
                        <li>
                        <h5>React</h5>
                        </li>
                        <li>
                        <h5>Django</h5>
                        </li>
                        <li>
                        <h5>mySQL</h5>
                        </li>
                    </ul>
                    </div>
                </div>
 
            </Card.Title>
            </Card.Body>
        </Card>
        
        <Card className="col-sm aboutCards">
            <Card.Header>
                <Card.Title>
                    <h2 className="header2">Tools & Frameworks</h2>
                </Card.Title>
            </Card.Header>
            <Card.Body>
            <Card.Title style={divStyle}>
                    <ul>
                        <li>
                        <h5>Figma</h5>
                        </li>
                        <li>
                        <h5>Adobe Photoshop</h5>
                        </li>
                        <li>
                        <h5>Google Analytics</h5>
                        </li>
                        <li>
                        <h5>Canva</h5>
                        </li>
                    </ul>
            </Card.Title>
            </Card.Body>
        </Card>
        </CardDeck>
    </div>
    </>
  );
}