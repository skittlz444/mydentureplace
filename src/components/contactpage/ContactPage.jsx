import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "@c/contactform/ContactForm";
import styles from "./styles/ContactPage.module.css";
import { Icon, Button } from 'antd';

import callButton from './styles/call-button.png';

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
                                <Button type="primary" icon="phone" shape="circle" /> 07 4124 0800
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
