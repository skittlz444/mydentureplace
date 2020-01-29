import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from './styles/FindUsPage.module.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import altimage from '@s/loadingimage/loading-image.gif';

import MapView from 'react-native-maps';

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
                        <MapView
                            initialRegion={{
                              latitude: 37.78825,
                              longitude: -122.4324,
                              latitudeDelta: 0.0922,
                              longitudeDelta: 0.0421,
                            }}
                          />
                    </Container>
                </Container>
            </React.Fragment>
        )
    }
}