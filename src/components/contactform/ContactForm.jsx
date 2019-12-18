import React from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import styles from "./styles/ContactForm.module.css";

import axios from "axios";

export default class ContactForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target[0].value);
    let name = e.target[0].value;
    let contactEmail = e.target[1].value;
    let msg = e.target[2].value;

    axios.post(
      "https://4it7527y55.execute-api.ap-southeast-2.amazonaws.com/staging-mydentureplace",
      { event: `${name}, ${msg}, ${contactEmail}` }
    );
  };
  render() {
    return (
      <React.Fragment>
        <Container className={styles.contactFormContainer}>
          <Row className="justify-content-center flex">
            <Form style={{ width: "50%" }} onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Please enter your name"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Your Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Please enter your email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Please enter your inquiry"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{ width: "100%", borderRadius: "20px" }}
              >
                <h5 className={styles.actionButtonText}>Submit</h5>
              </Button>
            </Form>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
//export default Form.create()(ContactForm);
