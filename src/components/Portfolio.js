import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Portfolio.css";

export default function App() {
    const [modalShow, setModalShow] = React.useState(false);

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
      fontSize: '25px'
    };

      function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

      function MySecondVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

      function MyThirdVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

      function MyForthVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

      function MyFifthVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
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

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
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
            <Button disabled variant="primary" onClick={() => setModalShow(true)}>
              Learn more
            </Button>

            <MySecondVerticallyCenteredModal
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
            <Button disabled variant="primary" onClick={() => setModalShow(true)}>
            Learn more
            </Button>

            <MySecondVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
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
            <Button disabled variant="primary" onClick={() => setModalShow(true)}>
            Learn more
           </Button>

            <MyThirdVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
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
            <MyForthVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
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