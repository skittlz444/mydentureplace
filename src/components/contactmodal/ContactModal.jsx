import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ContactForm from '@c/contactform/ContactForm';
import styles from './styles/ContactModal.module.css';

export default class ContactModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
        this.setShow = this.setShow.bind(this);
    }

    setShow = (e) => {
        console.log(e)
        this.setState({ show: e });
    }

    render() {
        return (
            <span className="flex justify-content-center">
                <Modal
                    show={this.state.show}
                    dialogClassName={styles.modal}
                    onHide={() => this.setShow(false)}
                    centered
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Contact Us
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ContactForm />
                    </Modal.Body>
                </Modal>
                <Button onClick={()=>this.setShow(true)} variant="light">
                    <h3 className={styles.actionButtonText}>
                        Get in touch
                    </h3>
                </Button>
            </span>
        );
    }
}