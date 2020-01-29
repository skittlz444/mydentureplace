import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from './styles/FindUsPage.module.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import altimage from '@s/loadingimage/loading-image.gif';

export default class FindUsPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className={styles.FindUsSection} id="findus">
                    <Container className={styles.FindUsJumbotron}>
                        <Row className="justify-content-left flex">
                            <h3>
                                Directions to My Denture
                            </h3>
                        </Row>
                        <hr />
                    </Container>
                </Container>
            </React.Fragment>
        )
    }
}