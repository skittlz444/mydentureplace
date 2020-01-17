import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ContactForm from "@c/contactform/ContactForm";
import styles from "./styles/ContactPage.module.css";
import { Icon } from 'antd';

export default class ContactPage extends React.Component {
    updateDimensions = () => {
        if(window.innerWidth <= 800 && window.innerHeight <= 600) {
            document.getElementById('phone-link').style.display = "none";
            document.getElementById('phone-button').style.display = "block";
        } else {
            document.getElementById('phone-link').style.display = "block";
            document.getElementById('phone-button').style.display = "none";
        }
    };
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    }

    render() {
        return (
            <React.Fragment>
                <Container className={styles.contactSection}>
                    <Container className={styles.contactFormContainer}>
                        <ContactForm />
                    </Container>

                    <Container style={{width:"50%"}}>
                        <Row className="justify-content-center flex">
                        <h3 style={{paddingBottom:"20px"}}>
                            Alternatively, you can contact us through the contact details below:
                        </h3>
                        </Row>
                        <Row className="justify-content-center flex">
                            <Col>
                                <a href={"mailto:info@mydentureplace.com.au"} className={styles.contactText}>
                                <h3 className={styles.contactTextSize}>
                                <Icon type="mail"/> info@mydentureplace.com.au
                                </h3>
                                </a>
                            </Col>
                        </Row>
                        <Row className="justify-content-center flex">
                            <Col lg={6} xs={12} sm={12} md={6}>
                                <a href="tel:0741240800" className={styles.contactText}>
                                <h3 className={styles.contactTextSize}>
                                <div id="phone-button">
                                    <Button variant="light" style={{width: "100%"}}><Icon type="phone"/><h3> 07 4124 0800</h3></Button>
                                </div>
                                <div className="phone-link" id="phone-link">
                                    <Icon type="phone"/> 07 4124 0800</div>
                                </h3>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </Container>
          </React.Fragment>
        );
    }
}
