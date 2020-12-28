import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./About.css";

export default function App() {

    const divStyle2 = {
        marginTop: '40px',
        // marginBottom: '60px'
      };
  return (
    <>
    <div className='container' style={divStyle2}>
        <h1 className="header4">Who is Turja?</h1>
        <Card className="aboutCards">
        
        <Card.Body>
            <Card.Title>Hello! I'm Turja, a Computer Science and Business Analytics student at Ryerson University with a graduation date of May 2023.<br></br></Card.Title>
            <Card.Text>
            I am a driven individual who's passionate about finding creative ways to improve an organization's efficiency while using innovation in its many forms. I aspire to continue learning about the constantly changing technology industry and diversifying my skills to adapt to new and complex challenges. <br></br>
            <br></br>
            I love travelling and stepping out of my comfort zone. Through my experiences, I've developed a strong mindset to be consistent and enjoy the road to the destination. I am always open to meeting new people and connecting with ambitious individuals! 
            
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
    </>
  );
}