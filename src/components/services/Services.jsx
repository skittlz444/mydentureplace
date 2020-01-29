import React from 'react';
import styles from './styles/Services.module.css';
import { Container, Card, Accordion, Button } from 'react-bootstrap';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import image1 from './img/computer-screen.jpg'
import image2 from './img/Maintenance.jpg'
import image3 from './img/valplast.jpg'
import altImage from '@s/loadingimage/loading-image.gif'

export default class Services extends React.Component{
  constructor(props) {
    super(props);
    this.scroll = this.scroll.bind(this);
  }

  scroll(el_id) {
    //console.log(el_id);
    var offset = document.getElementById("navbar").offsetHeight;
    offset = offset > 150 ? 56 : offset;
    setTimeout(() => {
      var target = document.getElementById(el_id);
      var bodyRect = document.body.getBoundingClientRect().top;
      target = target.getBoundingClientRect().top;
      window.scrollTo({
        top: target - bodyRect - offset,
        left: 0,
        behavior: "smooth"
      });
    }, 500);
  }
	render(){
		return (
			<React.Fragment>
				<Container  id="services">
                <Accordion className={styles.servicesAccordion}>
                  <Card className={styles.servicesAccordionCard} onClick={el => this.scroll("digital")}>
                    <Card.Header id="digital">
                      <Accordion.Toggle as={Button} variant="transparent" eventKey="0" style={{width:"100%"}}>
                      <h2>
                        Digital
                      </h2>
                      <LazyLoadImage
                      src={image1}
                      alt={altImage}
                      className={styles.servicesImage}
                     />
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body className={styles.servicesText}>
                      <h4>Precise</h4>
                      <p>
                      Digitally designed dentures offer an unparalleled accuracy in denture production and are more predictable than traditional dentures as there is less room for human error in the process.
                      </p>
                      <p>
                      This field in dentistry is just getting started, and My Denture Place Hervey Bay is thrilled to share the benefits of digitally designed dentures with you.
                      </p>
                      <h4>Faster</h4>
                      <p>
                      By bypassing the traditional wax and teeth setup, we can create digital dentures faster than ever before. We can also easily make any adjustments on our CAD software before your final denture is milled using the latest CAD/CAM technology.
                      </p>
                      <h4>Digital Backup</h4>
                      <p>
                      If you want a denture in the future or your digital dentures are damaged or lost, you don’t have to worry. If the design was digitally created by us, an exact copy of the full denture or metal frame can be remade at any point. In most case with little or NO APPOINTMENTS.
                      <br />
                      </p>
                      <p>
                      With conventional dentures, we have to repeat the whole fabrication process if your denture is lost. This requires the usual multiple appointments and usually weeks to fabricate the replacement denture. Also, the replacement denture is just a guess as to what you had and enjoyed with your previous denture. This can cause much stress, added expense and the embarrassment of being without your teeth. This is not the case with digital dentures.
                      </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className={styles.servicesAccordionCard} onClick={el => this.scroll("partialdentures")}>
                    <Card.Header id="partialdentures">
                      <Accordion.Toggle
                      as={Button}
                      variant="transparent"
                      eventKey="1"
                      style={{width:"100%"}}>
                        <h2>
                        Partial Dentures
                        </h2>
                        <LazyLoadImage
                          src={image2}
                          alt={altImage}
                          className={styles.servicesImage}
                         />
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body className={styles.servicesText}>
                        <p>
                        Generally required by people who still have some of their natural teeth and only need to replace a few that are missing.
                        </p>
                        <p>
                        These can be made from acrylic, metal, or flexible material. Metal and flexible materials in some cases can also be combined together for a strong invisible denture.
                        </p>
                        <p>
                        Our metal framed partial dentures are designed digitally. Our plastic and flexible partial dentures have their designs done digitally but are hand finished. The introduction of the CAD design at the formative stage leads to an accuracy never before seen in traditional processes.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className={styles.servicesAccordionCard} onClick={el => this.scroll("denturemaintenance")}>
                      <Card.Header id="denturemaintenance">
                        <Accordion.Toggle as={Button} variant="transparent" eventKey="2" style={{width:"100%"}}>
                          <h2>
                          Denture Maintenance
                          </h2>
                          <LazyLoadImage
                            src={image3}
                            alt={altImage}
                            className={styles.servicesImage}
                           />
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body className={styles.servicesText}>
                            <p>
                            Sometimes dentures need repairing, adding to or cleaning.
                            </p>
                            <p>
                            If your dentures are loose, they may require a reline. This is normally the result of weight loss, ageing, loss of teeth, wear and tear etc.
                            </p>
                            <p>
                            Dentures need to be treated the same as your natural teeth and have regular cleaning. It is recommended that you clean your dentures after meals to prevent inflamed gums, bacterial and fungal infections.
                            </p>
                            <p>
                            It is also important that your dentures be professionally cleaned by your Prosthetist once a year by ultrasonic cleaning equipment to remove excess tartar build up and to re-polish dentures with specialised equipment.
                            </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                </Accordion>
				</Container>
			</React.Fragment>
		);
	}
}