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
            <h1 className="header4">PORTFOLIO</h1>
            <p className="text4">The following projects are my most recent and featured projects. Click here for the full list of my portfolio.</p> 

            <CardDeck className="row">
        <Card className="col-sm aboutCards">
            <Card.Header>
          <Card.Title>
          <h2>Programming Languages</h2>
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
        
        <Card className="col-sm aboutCards ">
            <Card.Header>
                <Card.Title>
                    <h2 >Tools & Frameworks</h2>
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

        <CardDeck className="row" style={divStyle2}>
        <Card className="col-sm aboutSecondCards">
        <Card.Header>
          <Card.Title>
          <h2>Analytical</h2>
          </Card.Title>
        </Card.Header>
            <Card.Body>
            <Card.Text>
                {/* This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer. */}
            </Card.Text>
            </Card.Body>
        </Card>
        
        <Card className="col-sm aboutSecondCards cardButtons">
        <Card.Header>
          <Card.Title>
          <h2>Web Development</h2>
          </Card.Title>
        </Card.Header>
            <Card.Body>
            <Card.Text>
                {/* This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer. */}
            </Card.Text>
            </Card.Body>
        </Card>

        <Card className="col-sm aboutSecondCards cardButtons">
        <Card.Header>
          <Card.Title>
          <h2>Data Visualization</h2>
          </Card.Title>
        </Card.Header>
            <Card.Body>
            <Card.Text>
                {/* This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer. */}
            </Card.Text>
            </Card.Body>
        </Card>
        </CardDeck>
        </div>
        <div className="container" style={divStyle2}>
        <h1 className="header4">Travel</h1>
        <p classsName="">The following projects are my most recent and featured projects. Click here for the full list of my portfolio.</p> 
        <Card className="col-sm aboutSecondCards">
            <Card.Body>
            <Carousel>
            <Carousel.Item interval={100000}>
                <img
                className="d-block w-100"
                src="images/travel1.jpeg"
                alt="First slide"
                height="560"
                width="60"
                position="absolute"
                top="100px"
                />
                <Carousel.Caption>
                <h3><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 21">
                <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>Rangárþing eystra, Iceland</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="images/travel2.jpeg"
                alt="First slide"
                height="560"
                width="60"
                />
                <Carousel.Caption>
                <h3><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 21">
                <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>Teotihuacan, Mexico</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="images/travel3.jpeg"
                alt="First slide"
                height="560"
                width="60"
                />
                <Carousel.Caption>
                <h3><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 21">
                <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>Mexico City Metropolitan, Mexico</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="images/travel4.jpeg"
                alt="First slide"
                height="560"
                width="60"
                />
                <Carousel.Caption>
                <h3><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 21">
                <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>Skaftárhreppur, Iceland</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="images/travel5.jpeg"
                alt="First slide"
                height="560"
                width="60"
                />
                <Carousel.Caption>
                <h3><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 21">
                <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>Hanauma Bay, Hawaii, USA</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="images/travel6.jpeg"
                alt="First slide"
                height="560"
                width="60"
                />
                <Carousel.Caption>
                <h3><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 21">
                <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>Byodo-In Temple, Hawaii, USA</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="images/travel7.jpeg"
                alt="First slide"
                height="560"
                width="60"
                />
                <Carousel.Caption>
                <h3><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 21">
                <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>Mexico City, Mexico</h3>
                </Carousel.Caption>
            </Carousel.Item>
            
            </Carousel>
            </Card.Body>
        </Card>
        </div>
        
        
    </>
  );
}