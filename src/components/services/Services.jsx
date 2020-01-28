import React from 'react';
import styles from './styles/Services.module.css';
import {Row, Col, Container, Card } from 'react-bootstrap';
import FlipCard from 'react-flipcard-2';

//import { LazyLoadImage } from 'react-lazy-load-image-component';

import image1 from './img/computer-screen.jpg'
import image2 from './img/Maintenance.jpg'
import image3 from './img/valplast.jpg'
//import altImage from '@s/loadingimage/loading-image.gif'

export default class Services extends React.Component{
	constructor(props){
		super(props);
		this.handleFindUsClick = this.handleFindUsClick.bind(this);
	}

	handleFindUsClick(){
		alert("Coming soon");
	}

	render(){
		return (
			<React.Fragment>
				<Container className={styles.servicesContainer} id="services">
                <Row style={{height: "600px !important"}}>
                <Col md={4} style={{height: "600px !important"}}>
                <FlipCard>
                <Card style={{ width: '18rem', backgroundColor: "#659DBD" }}>
                  <Card.Img variant="top" src={image1} />
                  <Card.Body>
                    <Card.Title>Digital</Card.Title>
                  </Card.Body>
                </Card>
                    <Card style={{ width: '18rem', backgroundColor: "#659DBD" }}>
                      <Card.Body>
                        <Card.Title>Digital</Card.Title>
                        <Card.Text>
                        <h6>Precise</h6>
                        Digitally designed dentures offer an unparalleled accuracy in denture production and are more predictable than traditional dentures as there is less room for human error in the process.
                        <br />
                        This field in dentistry is just getting started, and My Denture Place Hervey Bay is thrilled to share the benefits of digitally designed dentures with you.
                        </Card.Text>
                        <Card.Text>
                        <h6>Faster</h6>
                        By bypassing the traditional wax and teeth setup, we can create digital dentures faster than ever before. We can also easily make any adjustments on our CAD software before your final denture is milled using the latest CAD/CAM technology.
                        </Card.Text>
                        <Card.Text>
                        <h6>Digital Backup</h6>
                        If you want a denture in the future or your digital dentures are damaged or lost, you don’t have to worry. If the design was digitally created by us, an exact copy of the full denture or metal frame can be remade at any point. In most case with little or NO APPOINTMENTS
                        <br />
                        With conventional dentures, we have to repeat the whole fabrication process if your denture is lost. This requires the usual multiple appointments and usually weeks to fabricate the replacement denture. Also, the replacement denture is just a guess as to what you had and enjoyed with your previous denture. This can cause much stress, added expense and the embarrassment of being without your teeth. This is not the case with digital dentures.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </FlipCard>
                </Col>
                <Col md={4} style={{height: "600px !important"}}>
                <FlipCard >
                <Card style={{ width: '18rem', backgroundColor: "#659DBD" }}>
                  <Card.Img variant="top" src={image2} />
                  <Card.Body>
                    <Card.Title>Partial Dentures</Card.Title>
                  </Card.Body>
                </Card>
                    <Card style={{ width: '18rem', backgroundColor: "#659DBD" }}>
                      <Card.Body>
                        <Card.Title>Partial Dentures</Card.Title>
                        <Card.Text>
                          Generally required by people who still have some of their natural teeth and only need to replace a few that are missing.
                          <br />
                          These can be made from acrylic, metal, or flexible material. Metal and flexible materials in some cases can also be combined together for a strong invisible denture.
                          <br />
                          Our metal framed partial dentures are designed digitally. Our plastic and flexible partial dentures have their designs done digitally but are hand finished. The introduction of the CAD design at the formative stage leads to an accuracy never before seen in traditional processes.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </FlipCard>
                </Col>
                <Col md={4} style={{height: "600px !important"}}>
                <FlipCard>
                <Card style={{ width: '18rem', backgroundColor: "#659DBD" }}>
                  <Card.Img variant="top" src={image3} />
                  <Card.Body>
                    <Card.Title>Denture Maintenance</Card.Title>
                  </Card.Body>
                </Card>
                    <Card style={{ width: '18rem', backgroundColor: "#659DBD" }}>
                      <Card.Body>
                        <Card.Title>Denture Maintenance</Card.Title>
                        <Card.Text>
                          Sometimes dentures need repairing, adding to or cleaning.
                          <br />
                          If your dentures are loose, they may require a reline. This is normally the result of weight loss, ageing, loss of teeth, wear and tear etc.
                          <br />
                          Dentures need to be treated the same as your natural teeth and have regular cleaning. It is recommended that you clean your dentures after meals to prevent inflamed gums, bacterial and fungal infections.
                          <br />
                          It is also important that your dentures be professionally cleaned by your Prosthetist once a year by ultrasonic cleaning equipment to remove excess tartar build up and to re-polish dentures with specialised equipment.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </FlipCard>
                </Col>
                </Row>
				</Container>
			</React.Fragment>
		);
	}
}