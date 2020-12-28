import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './HomeExperience.css'
// import Sonnet from 'react-bootstrap/Sonnet';

export default function App() {
  const divStyle1 = {
    marginTop: '60px',
    marginBottom: '90px',
    // backgroundImage: 'linear-gradient(#222F6D, #fff, #fff)'
  };

  const divStyle2 = {
    marginTop: '20px',
    marginBottom: '25px',
    marginRight: ''
    // backgroundImage: 'linear-gradient(#222F6D, #fff, #fff)'

  };

  const divStyle4 = {
    width: '22rem',
    marginTop: '25px',
    marginRight: '12px',
    marginBottom: '10px'
    };
  
    const divStyle5 = {
      width: '22rem',
      height: '10rem',
      marginTop: '22px',
      marginRight: '12px',
      marginBottom: '10px'
      };

    const divStyle6 = {
      backgroundImage: 'linear-gradient(#222F6D, #fff, #fff)'

    };

    

  return (
    <>
      <div className='container' style={divStyle1}>
      {/* <img src="images/line.png"style={divStyle3} /> */}
            <h1 className="header3">EXPERIENCE</h1>
            <p className="text3">Learn a bit about my past experiences and achievements.</p> 
            <Tab.Container defaultActiveKey="first" className="experienceCard">
            <Row className='cards' >
              <Col sm={3}>
                <Nav variant="pills" className="flex-column" style={divStyle2}>
                  <Nav.Item>
                    <Nav.Link eventKey="first">Toronto Machine Learning</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Optimity</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Alobar Yorkville</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content >
                  <Tab.Pane eventKey="first" style={divStyle2} >
                  <h5>Head of Digital Marketing</h5>
                  <h7>Toronto Machine Learning Summit is a series of initiatives dedicated to the development of AI research and commercial development in Industry. 
                  These include Seminars, workshops, Funding Pitches, Career-fairs and a 3-day Summit that gathers leaders from 
                  industry and academia. </h7>
                  <div className="row container ">
                  <Card border="primary-light" style={divStyle4}>
                        <Card.Body>
                          {/* <Card.Title>Canada's  Restaurants</Card.Title> */}
                          <Card.Img variant="top" src='images/tmls.png' height="110" width="20"/>
                        </Card.Body>
                      </Card>
                  
                  <Card border="primary-light" style={divStyle4}>
                        <Card.Body>
                          {/* <Card.Title>Canada's  Restaurants</Card.Title> */}
                          <Card.Img variant="top" src='images/mlops.png' height="110" width="0.5"/>
                        </Card.Body>
                      </Card>
                  
                </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second" style={divStyle2}>
                      <h5>Marketing Coordinator </h5> 
                      <h7>Optimity is a proactive health company. We provide useful, personalized tips & nudges that adapts to each user’s daily routines.
                      These micro-actions help prevent common chronic disease conditions such as Depression, Diabetes, Obesity, Heart Disease, 
                      Dementia, Cancer, COPD, Kidney Disease & Workplace Accidents. </h7>
                    <div className="row container">
                        <Card border="primary-light" style={divStyle4}>
                        <Card.Body>
                          {/* <Card.Title>Canada's  Restaurants</Card.Title> */}
                          <Card.Img variant="top" src='images/optimity.png' height="110" width="0.5" href="url(google.ca)"/>
                        </Card.Body>
                      </Card>
                  </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third" style={divStyle2}>
                    <h5>Server Assistant </h5>
                    <h7> Supported cross functional teams including Back of House and Operations in managing customer experience and inquires <br></br>
                      Trained and supervised 7 new employees to successfully transition into designated positions
</h7>
                    <div className="row container">
                        <Card border="primary-light" style={divStyle4}>
                        <Card.Body>
                          {/* <Card.Title>Canada's  Restaurants</Card.Title> */}
                          <Card.Img variant="top" src='images/alo-bar-logo.svg' height="110" width="0.5"/>
                        </Card.Body>
                      </Card>
                      <Card border="primary-light" style={divStyle5}>
                        <Card.Body>
                          {/* <Card.Title>Canada's  Restaurants</Card.Title> */}
                          <Card.Img variant="top" src='images/can100.png' height="110" width="0.5"/>
                        </Card.Body>
                      </Card>
                  </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
          
        </div>
    </>
  );
}
// export default Navbar;
