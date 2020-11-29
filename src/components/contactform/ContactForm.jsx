import React from "react";

import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import styles from "./styles/ContactForm.module.css";

import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactName: "",
            contactPhone: "",
            contactEmail: "",
            contactSubject: "",
            contactBody: "",
            toastID: null,
            loading: false,
            isModal: (this.props.modal !== undefined) ? this.props.modal : false
        }
        this.form = React.createRef();
        this.submitButtonContainer = React.createRef();
        this.validate = this.validate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    validate = () => {
        return this.form.current.reportValidity();
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();
        e.stopPropagation();
        await this.setState({contactPhone: this.state.contactPhone.replace(/\s/g,'')});

        if (!this.validate()) {
            if (!toast.isActive(this.state.toastID))
                this.setState({
                    'toastID': toast.error(
                        <span className={styles.whiteText}>It appears something is wrong with your information,
						please check your details and ensure everything is filled out and correct.</span>,
                        { autoClose: false })
                });
        } else {
            this.setState({ loading: true });
            toast.dismiss();
            fetch(process.env.REACT_APP_API_URL, {
                method: 'POST',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded",
                },
                body: `{
   					"contactName" : "${this.state.contactName}",
   					"contactPhone" : "${this.state.contactPhone}"
   					"contactEmail" :"${this.state.contactEmail}",
   					"contactSubject" : "${this.state.contactSubject}",
   					"contactBody" : "${this.state.contactBody}"
   					}`
            }
            )
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            'toastID': toast.success(
                                <span className={styles.whiteText}>Thank you for submitting a contact request!
                                I'll be in touch within the next few days so keep an eye out in your emails,
    						including your junk folder.</span>,
                                { autoClose: false })
                        });
                        this.setState({ loading: false });
                    },
                    (error) => {
                        this.setState({
                            'toastID': toast.error(
                                <span className={styles.whiteText}>Something went wrong on our end,
    						please try again later</span>,
                                { autoClose: false })
                        });
                        this.setState({ loading: false });
                    }
                );
        }
    };
    render() {
    let button;
        if (this.state.isModal) {
            button =
                <Button
                    variant="info"
                    type="submit"
                    size="lg"
                    style={{ width: "100%", borderRadius: "20px" }}>
                    <h3 className={styles.actionButtonText}>Submit</h3>
                </Button>;
        } else {
            button =
                <Button
                    variant="light"
                    type="submit"
                    style={{ width: "100%", borderRadius: "20px" }}>
                    <h3 className={styles.actionButtonText}>Submit</h3>
                </Button>;
        }


        const spinner = <Spinner animation="border" />;
        return (
            <React.Fragment>
                    <ToastContainer />
                    <Form ref={this.form} onSubmit={this.handleSubmit} style={{ marginLeft: "10%", marginRight: "10%" }}>
                        <Row className="justify-content-center flex">
                            <Col lg={6} xs={12} sm={12} md={6}>
                                <Form.Group controlId="contactName">
                                    <Form.Label><h3 className={styles.formLabel}>Your Name</h3></Form.Label>
                                    <Form.Control
                                        size="lg"
                                        placeholder="Please enter your name"
                                        onChange={this.handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col lg={6} xs={12} sm={12} md={6}>
                                <Form.Group controlId="contactEmail">
                                    <Form.Label><h3 className={styles.formLabel}>Your Email address</h3></Form.Label>
                                    <Form.Control
                                        size="lg"
                                        type="email"
                                        placeholder="Please enter your email"
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </Col>

                            <Col lg={12} xs={12} sm={12} md={12}>
                                <Form.Group controlId="contactPhone">
                                    <Form.Label><h3 className={styles.formLabel}>Your Phone Number</h3></Form.Label>
                                    <Form.Control
                                        size="lg"
                                        placeholder="Please enter your phone number"
                                        onChange={this.handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col lg={12} xs={12} sm={12} md={12}>
                                <Form.Group controlId="contactSubject">
                                    <Form.Label><h3 className={styles.formLabel}>Subject</h3></Form.Label>
                                    <Form.Control
                                        size="lg"
                                        placeholder="How can we help you?"
                                        onChange={this.handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col lg={12} xs={12} sm={12} md={12}>
                                <Form.Group controlId="contactBody">
                                    <Form.Label><h3 className={styles.formLabel}>Message</h3></Form.Label>
                                    <Form.Control
                                        size="lg"
                                        as="textarea"
                                        rows="3"
                                        placeholder="Please explain in detail here"
                                        onChange={this.handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            {this.state.loading ? spinner : button}
                            
                        </Row>
                    </Form>
            </React.Fragment>
        );
    }
}
//export default Form.create()(ContactForm);
