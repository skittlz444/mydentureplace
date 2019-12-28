import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "@c/contactform/ContactForm";
import styles from "./styles/ContactPage.module.css";
import { Icon } from 'antd';

export default class ContactPage extends React.Component {

  render() {
    return (
        <React.Fragment>
            <Container className={styles.contactSection}>
                <Container className={styles.contactFormContainer}>
                    <ContactForm />
                </Container>

                <Container style={{width:"50%"}}>
                    <Row className="justify-content-center flex">
                    <h5 style={{paddingBottom:"20px"}}>
                        Alternatively, you can contact us through the contact details below:
                    </h5>
                        <Col lg={6} xs={12} sm={12} md={6}>
                            <a href={"mailto:info@mydentureplace.com.au"} className={styles.contactText}>
                            <p>
                            <Icon type="mail" />
                                  info@mydenctureplace.com.au
                            </p>
                            </a>
                        </Col>
                        <Col lg={6} xs={12} sm={12} md={6}>
                            <a href="tel:0741240800" className={styles.contactText}>
                            <p>
                                <Icon type="phone" />
                                    07 4124 0800
                                </p>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </Container>
      </React.Fragment>
    );
  }
}
