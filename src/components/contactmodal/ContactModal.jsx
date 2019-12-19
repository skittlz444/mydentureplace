import React from 'react';
import { Modal, Button } from 'react-bootstrap';
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
                        <p>
                            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem!
                        </p>
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