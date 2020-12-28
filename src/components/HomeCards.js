import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./HomeCards.css";

export default function App() {

    const divStyle1 = {
        marginTop: '60px',
        marginBottom: '60px'
      };
    
  return (
    <>
    <div className='container' style={divStyle1}>
            <h1 className="header2">PORTFOLIO</h1>
            <p className="text2">The following projects are my most recent and featured projects. Click here for the full list of my portfolio.</p>
        <CardDeck className="row ">
        <Card className="col-sm container2 ">
            <Card.Title variant="top" height="180" width="10" className="card__heading">
                <h1 className="card__heading">MindTrack</h1></Card.Title>
            {/* <Card.Img variant="top" src='images/mindTrack.png' height="180" width="10" /> */}
            <Card.Body className="overlay">
            <br></br>
            <Card.Text className="items">
                Mental health platform to provide users with personalized data and resources through dashboard and various features.
            </Card.Text>
            <div className="row bottom mx-auto my-2 cardButtons items">
                <Button variant="primary">Learn More</Button> 
                &nbsp; &nbsp;
                <Button variant="outline-primary"> Github</Button>
            </div>
            </Card.Body>
        </Card>
        
        <Card className="col-sm container2 ">
            <Card.Title variant="top" height="180" width="10" className="card__heading">
                <h1 className="card__heading">Soteria</h1></Card.Title>
            {/* <Card.Img variant="top" src='images/mindTrack.png' height="180" width="10" /> */}
            <Card.Body className="overlay">
            <br></br>
            <Card.Text className="items">
            Full stack web application designed to help front-line workers search for nearby housing rentals.
            </Card.Text>
            <div className="row bottom mx-auto my-2 cardButtons items">
                <Button variant="primary">Learn More</Button> 
                &nbsp; &nbsp;
                <Button variant="outline-primary"> Github</Button>
            </div>
            </Card.Body>
        </Card>
        <Card className="col-sm container2 ">
            <Card.Title variant="top" height="180" width="10" className="card__heading">
                <h1 className="card__heading">Refillr</h1></Card.Title>
            {/* <Card.Img variant="top" src='images/mindTrack.png' height="180" width="10" /> */}
            <Card.Body className="overlay">
            <br></br>
            <Card.Text className="items">
            Developed an automated filing and formatting process for legal documentation designed for legal professionals
            </Card.Text>
            <div className="row bottom mx-auto my-2 cardButtons items">
                <Button variant="primary">Learn More</Button> 
                &nbsp; &nbsp;
                <Button variant="outline-primary"> Github</Button>
            </div>
            </Card.Body>
        </Card>
        
        </CardDeck>
        </div>

    </>
  );
}