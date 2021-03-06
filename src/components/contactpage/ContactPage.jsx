import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ContactForm from "@c/contactform/ContactForm";
import styles from "./styles/ContactPage.module.css";
import MediaQuery from 'react-responsive';

export default class ContactPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className={styles.contactSection} id="contact">
                    <Container className={styles.contactFormContainer}>
                        <ContactForm />
                    </Container>

                    <Container style={{width:"100%"}}>
                        <Row className="justify-content-center flex">
                        <h3 className={styles.contactTextSize} style={{paddingBottom:"20px"}}>
                            Alternatively, you can contact us through the contact details below:
                        </h3>
                        </Row>
                        <Row className="justify-content-center flex">
                            <Col>
                                <a href={"mailto:info@mydentureplace.com.au"} className={styles.contactText}>
                                <h3 className={styles.contactTextSize}>
                                &#x2709; info@mydentureplace.com.au
                                </h3>
                                </a>
                            </Col>
                        </Row>
                        <Row className="justify-content-center flex">
                            <Col lg={6} xs={12} sm={12} md={6}>
                            <MediaQuery maxWidth={991}>
                                <a href="tel:0741240800" className={styles.contactText}>
                                <div id="phone-button">
                                    <Button variant="light" style={{width: "100%"}}><h3 className={styles.contactTextSize}>&#x2706; 07 4124 0800</h3></Button>
                                </div>
                                </a>
                            </MediaQuery>
                            <MediaQuery minWidth={992}>
                                <a href="tel:0741240800" className={styles.contactText}>
                                <h3 className={styles.contactTextSize}>
                                    <div className="phone-link" id="phone-link">
                                        &#x2706; 07 4124 0800
                                    </div>
                                </h3>
                                </a>
                            </MediaQuery>
                            </Col>
                        </Row>
                    </Container>
                </Container>
          </React.Fragment>
        );
    }
}
