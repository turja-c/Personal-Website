import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MindTrack from './MindTrack';
import "./Portfolio.css";

export default function App() {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);

    const divStyle = {
       marginLeft: '10px',
    };

    const divStyle2 = {
        marginTop: '60px',
        marginBottom: '20px'
      };
    
    const divStyle3 = {
      marginTop: '5px',
      marginBottom: '-15px',
      fontSize: '25px',
      color: '#fff'
    };

    function MindTrack(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              MindTrack &nbsp;
              <a href="https://sthenic-smile.000webhostapp.com/main.html" target="_blank">
                <button type="button" className="btn btn-outline-danger" >
                 Live
                </button>
              </a>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
            
            Technologies used: HTML/CSS, JavaScript, jQuery, PHP, mySQL and Figma
            <hr></hr>
            The goal of our project was to create an interactive web application for CPS530 - Web Systems Development. 
            This application gamifies mental health in a way that encourages users to keep track, evaluate, and seek help 
            when needed. Specifically, we wanted to allow a user to keep track and evaluate their mental health by logging 
            into the application and interacting with the wellness chatbot found on the user’s dashboard. We also wanted 
            to encourage the user to seek help through the resources page which contains various links to different mental 
            health sites and services.
            <br></br><br></br>
            The design of this platform was original with the inspiration for technologies and layout. This simplistic platform 
            puts the user experience first for a personalized approach to interact with the user and track their progress. 
            For reference, we used fitness tracking platforms (i.e. Strava). 
            <br></br><br></br>
            Data Validation: Each page validates if the information is filled in 
            properly and in a specific format (if needed). The login page and registration page review past data entries to 
            validate the login/registration information is accurate (active or not).
            <br></br><br></br>
            Responsiveness: This platform is fully compatible and 100% responsive with both smaller-screen devices such as 
            smartphones and medium-screen devices such as tablets. As well, itlooks identical on all major browsers 
            (i.e. Safari, Chrome, and Firefox). 
            <br></br><br></br>
            Accessibility: No major steps were taken in implementing features that would make the website accessible for 
            individuals with disabilities. However, a dashboard theme toggle (which changes the dashboard from a light theme 
            to a dark theme) was implemented for individuals with a specific visual impairment – photophobia. Photophobia is a 
            common eye condition where a person is sensitive to light, causing discomfort in bright environments. Thus, our 
            theme option allows them to switch the dashboard theme colour to whatever fits their needs.
            </p>

            <MindTrack />

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
    
    function Soteria(props2) {
      return (
        <Modal
          {...props2}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Soteria
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
            Technologies used: Python, Django, HTML/CSS, Figma, SQLite, Mapbox API and Travis CI
            <hr></hr>
            The inspiration for this project comes from our shared desire to support the health care workers. 
            Our primary objective through this platform is to provide an Airbnb alternative for the front line 
            workers. Being in a high-risk category, finding a place to temporarily stay to keep their families 
            and community safe should not be another hassle for them. Secondly, this platform creates incentives 
            for the landlords to have consistent renters. In these uncertain times, the workers are getting employed 
            and paid, so they will definitely pay the rent for these properties. This creates a healthy supply and 
            demand to be used in the practical atmosphere of this global pandemic.
            <br></br><br></br>
            In short, COVID-19 has created a marketplace for secluded housing. That is why we bring you 'Soteria'. 
            Just like the name, Soteria, which signified the goddess of safety in Greek mythology, we are here to 
            bring safety to medical workers. Our easy-to-use platform provides shelters that can be rented out during 
            the pandemic. Our web application can protect the housing market from completely collapsing while protecting 
            the heroes who are carrying our communities through these unprecedented times.
            <br></br><br></br>
            Soteria addresses the immediate need for housing for frontline workers. To begin with, a user can securely log 
            in/sign up to our platform either as a ‘Covid Warrior’ or a ‘Landlord’. Upon logging in for the Front Line Worker,
             one can search the houses at any location by entering suburb or city. Then they are served with all the available 
             housing options along with photos of them. Upon clicking any of those housing options, the user can see more 
             information about them like the Rent, Location, Additional Notes, Contact of the property owner.
             <br></br><br></br>
            On logging in as the Landlord, one can view all the houses/units that he has posted. The user can add even more 
            properties along with images to bring a more visually appealing ad and increase customer confidence.
            <br></br><br></br>
            As the database grew, I noticed that some model fields are missing or not being entered correctly. I had to 
            learn how Django uses models which took me more than an hour. I also learned how to properly navigate through 
            Github. This allowed me to correctly contribute to the team while ensuring that there were limited merge conflicts. 
            I also struggled to use the Mapbox API. I had to break down the code to ensure that I understood what each line 
            entailed. There were many moments where I referred to online searches for answers and I found myself being able 
            to ask better questions as I progressed.

            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props2.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }

    function Refillr(props3) {
      return (
        <Modal
          {...props3}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Refillr
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
            Technologies used: Python, UiPath, HTML/CSS, Figma and Bootstap 
            <hr></hr>
            This project was created at SigmaHacks 2.0 with a team of 3 developers. Refillr is an automation platform targeted for 
            legal professionals. It allows the user to automate  
            the process of document and form completetions. This project enables the user to use UiPath technology to easily 
            fill in the paperwork without repeating steps. This allows for the user to provide the necessary information to the 
            platform which then automates the completion of the required document. The document is then directly sent to the lawyer
            judge.
            <br></br><br></br>
            In many scenarios, the associated  associated is standard and the paperwork that follows can be easily automated by two 
            parties that mutually agree upon the conditions. The automation for the document can be the names of the parties 
            involved, date of birth, address, etc.
            <br></br><br></br>
            This platform uses various resources which are 
            used to input information on the website which is then stored. This stored information is then used by UiPath 
            to compile and finalize the forms in Word Format. In the creation of the website, we referred to online CSS 
            files as well that provided support to better customize the documents. The process of creating the website was 
            taken in stages, as we created the UX design to outline the proper formation of the product, followed by the 
            appropriate code to follow. The languages involved in the creation of the website were CSS/HTML and Python in 
            a Flask framework. In regards to the UiPath, the final objective was to create a form that captures text and 
            processes the data to replace the documentation. This enables the admin to monitor the data that is apprehended 
            by the software and easily automate the information.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props3.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }

  return (
    <>
    <div className='container' style={divStyle2}>
    <h1 className="headerPortfolio"> Personal Website </h1>
        <p className="headerTextPortfolio">The following are my most recent and featured projects!</p> 
        <Card className="text-left portfolioCard">
                <Card.Header >
                    <Card.Title>
                    <h2 style={divStyle3}>Personal Website</h2>
                    </Card.Title>
                </Card.Header>
        <Card.Body className="portfolioCardInside">
            <Card.Text>
              This website was created to display my portfolio! 
            </Card.Text>
            <Button disabled variant="primary" onClick={() => setModalShow(true)}>
                Learn more
            </Button>

            
        </Card.Body>
        <Card.Footer className="text-muted" stlye={divStyle} >
            <Button variant="outline-secondary" style={divStyle}>React</Button>
            <Button variant="outline-secondary" style={divStyle}>Bootstrap 4</Button>
            <Button variant="outline-secondary" style={divStyle}>JavaScript</Button>
            <Button variant="outline-secondary" style={divStyle}>HTML/CSS</Button>
        </Card.Footer>
        </Card>

        <Card className="text-left portfolioCard" style={divStyle2}>
        <Card.Header>
          <Card.Title>
          <h2 style={divStyle3}>MindTrack</h2>
          </Card.Title>
        </Card.Header>
        <Card.Body className="portfolioCardInside">
            <Card.Text>
              This project was created in collaboration with 4 developers as a final project for Web Systems Development. <br></br> <br></br>
              MindTrack is an interactive platform to track, monitor and assess the mental health of users. This platform provides users to engage with a personalized dashboard consisting of various features. 
            </Card.Text>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Learn more
            </Button>
            <MindTrack
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
        </Card.Body>
        <Card.Footer className="text-muted">
            <Button variant="outline-secondary" style={divStyle}>Bootstrap</Button>
            <Button variant="outline-secondary" style={divStyle}>JavaScript</Button>
            <Button variant="outline-secondary" style={divStyle}>CSS/HTML</Button>
            <Button variant="outline-secondary" style={divStyle}>PHO</Button>
            <Button variant="outline-secondary" style={divStyle}>jQuery</Button>
            <Button variant="outline-secondary" style={divStyle}>MySQL</Button>
        </Card.Footer>
        </Card>

        <Card className="text-left portfolioCard" style={divStyle2}>
        <Card.Header>
          <Card.Title>
          <h2 style={divStyle3}>Soteria</h2>
          </Card.Title>
        </Card.Header>
        <Card.Body className="portfolioCardInside">
            {/* <Card.Title>Special title treatment</Card.Title> */}
            <Card.Text>
            A full-stack web application designed to help front-line workers search for nearby
            housing rentals to avoid the risk of spreading COVID-19 to relatives and local community members            </Card.Text>
            <Button variant="primary" onClick={() => setModalShow1(true)}>
              Learn more
            </Button>
            <Soteria
              show={modalShow1}
              onHide={() => setModalShow1(false)}
            />

            
        </Card.Body>
        <Card.Footer className="text-muted">
            <Button variant="outline-secondary" style={divStyle}>Python</Button>
            <Button variant="outline-secondary" style={divStyle}>Django</Button>
            <Button variant="outline-secondary" style={divStyle}>Mapbox API</Button>
            <Button variant="outline-secondary" style={divStyle}>CSS/HTML</Button>
        </Card.Footer>
        </Card>

        <Card className="text-left portfolioCard" style={divStyle2}>
        <Card.Header>
          <Card.Title>
            <h2 style={divStyle3}>Refillr</h2>
          </Card.Title>
        </Card.Header>
        <Card.Body className="portfolioCardInside">
            {/* <Card.Title>Special title treatment</Card.Title> */}
            <Card.Text>
            Developed an automated filing and formatting process for legal documentation designed for legal professionals.
                        </Card.Text>
            <Button variant="primary" onClick={() => setModalShow2(true)}>
              Learn more
            </Button>
            <Refillr
            show={modalShow2}
            onHide={() => setModalShow2(false)}
            />
        </Card.Body>
        <Card.Footer className="text-muted">
            <Button variant="outline-secondary" style={divStyle}>Python</Button>
            <Button variant="outline-secondary" style={divStyle}>Flask</Button>
            <Button variant="outline-secondary" style={divStyle}>UiPath</Button>
            <Button variant="outline-secondary" style={divStyle}>CSS/HTML</Button>
        </Card.Footer>
        </Card>

        <Card className="text-left portfolioCard" style={divStyle2}>
        <Card.Header>
          <Card.Title>
            <h2 style={divStyle3}>Tourist Guide</h2>
          </Card.Title>
        </Card.Header>
        <Card.Body className="portfolioCardInside">
            <Card.Text>
            This platform provides tourists an opportunity to learn about Canada's various attractions.
            </Card.Text>
            <Button disabled variant="primary" onClick={() => setModalShow(true)}>
            Learn more
            </Button>
            
        </Card.Body>
        <Card.Footer className="text-muted">
            <Button variant="outline-secondary" style={divStyle}>React</Button>
            <Button variant="outline-secondary" style={divStyle}>JavaScript</Button>
            <Button variant="outline-secondary" style={divStyle}>CSS/HTML</Button>
        </Card.Footer>
        </Card>
    </div>
    </>
  );
}