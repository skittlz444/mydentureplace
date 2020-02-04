import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from './styles/FindUsPage.module.css';

import ReactMapGL, { Marker } from 'react-map-gl';

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;
const MARKER_SIZE = 20;
const dotenv = require('dotenv');
const env = dotenv.config().parsed;

export default class FindUsPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            settings: {
                  dragPan: true,
                  dragRotate: true,
                  scrollZoom: true,
                  touchZoom: true,
                  touchRotate: true,
                  keyboard: true,
                  doubleClickZoom: true,
                  minZoom: 0,
                  maxZoom: 20,
                  minPitch: 0,
                  maxPitch: 85
                }
        }
    }
    render() {
        const { settings } = this.state;
        return (
            <React.Fragment>
                <Container className={styles.FindUsSection} id="findus">
                    <Container className={styles.FindUsJumbotron}>
                        <Row className="justify-content-left flex">
                            <h3>
                                Directions to My Denture Place
                            </h3>
                        </Row>
                        <hr />
                        <Row className="justify-content-left flex">
                        <Col>
                        <p className={styles.findUsText}>
                        We are located on the University Lake in Liuzzi St which is on the ocean side of Boatharbour Dve right behind the main shopping strip in Hervey Bay.
                        </p>
                        <p className={styles.findUsText}>
                        If you haven’t been to see us before:
                        </p>
                        </Col>
                        </Row>
                        <Row className="justify-content-left flex">
                        <Col lg={7}>
                        <p className={styles.findUsText}>
                        We are in Unit 4 located in the Lakeside 2 complex at 10-12 Liuzzi Street in Pialba, Hervey Bay beside Liuzzi Chambers.
                        </p>
                        <p className={styles.findUsText}>
                        Be aware that there is another complex called Lakeside 1 that is right next to our complex Lakeside 2 and they look nearly identical. We are in the Lakeside complex on the right. Our place is number 4 and you can find us in the left hand corner of the building.
                        </p>
                        <p className={styles.findUsText}>
                        There is a man-made lake behind the building. On the other side of the lake is the University of Southern Queensland campus and Hervey Bay library. It’s the lake behind the Hervey Bay cinemas. Our building is grey with white highlights.
                        </p>
                        <p className={styles.findUsText}>
                        Parking is available in the car park on our premises located in front of the building. Come to the door, enter the foyer and ring the bell on the right wall, have a seat and we’ll be with you as soon as possible.
                        </p>
                        <p className={styles.findUsText}>
                        There is someone in the office every weekday, from 9am until 3pm. Sometimes we start earlier or finish later than this.
                        </p>
                        </Col>
                        <Col lg={5} md={12}>
                        <ReactMapGL
                          {...settings}
                          width={"100%"}
                          height={500}
                          latitude={-25.284515}
                          longitude={152.834024}
                          zoom={15}
                          mapStyle={'mapbox://styles/kevinkam123/ck66b3tat3cgd1jlo17eeqkr8'}
                          mapboxApiAccessToken={process.env.MAPS_TOKEN}
                        >
                        <Marker key={1} latitude={-25.284515} longitude={152.834024}>
                            <svg
                                  height={MARKER_SIZE}
                                  viewBox="0 0 24 24"
                                  style={{
                                    cursor: 'pointer',
                                    fill: '#d00',
                                    stroke: 'none',
                                    transform: `translate(${-MARKER_SIZE / 2}px,${-MARKER_SIZE}px)`
                                  }}
                                >
                                <path d={ICON} />
                            </svg>
                        </Marker>
                        </ReactMapGL>
                        </Col>
                        </Row>
                    </Container>
                </Container>
            </React.Fragment>
        )
    }
}