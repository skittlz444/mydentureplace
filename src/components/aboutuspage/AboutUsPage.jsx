import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles/AboutUsPage.module.css";

import { LazyLoadImage } from 'react-lazy-load-image-component';
//import rightImage from './img/Dr-Michael-Carson-Dentist.jpg';
//import leftImage from './img/Mick-Carson-Relaxing-300x275.png';
import portraitImage from './img/About Us.jpg';
import altimage from '@s/loadingimage/loading-image.gif'

export default class AboutUsPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className={styles.aboutUsSection} id="aboutus">
                <Container className={styles.aboutUsJumbotron}>
                        <Row className="justify-content-left flex" style={{paddingBottom:"10px"}}>
                            <h3>
                                About Us
                            </h3>
                        </Row>
                        <hr/>
                        <Row className="justify-content-left flex" style={{paddingBottom:"10px"}}>
                        <Col xs={6} md={4}>
                            <LazyLoadImage
                                src={portraitImage}
                                alt={altimage}
                                effect="blur"
                                className={styles.leftImage}
                            />
                            </Col>
                        <Col xs={12} md={8}>
                            <p className={styles.aboutUsText}>
                            Michael Carson commenced his dental career in 1986.
                            </p>
                            <p className={styles.aboutUsText}>
                            Michael’s original business had grown to the point that he had to move the practice to larger premises. The business was then re-named My Denture Place (mydentureplace) in January 2012.
                            </p>
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="justify-content-left flex">
                        <Col>
                            <p className={styles.aboutUsText}>
                            My Denture Place is the only denture business in the Wide Bay to use digital technology as an integral part of making dental products. My Denture Place was also Wide Bays first practice to introduce a Denture Injection Fabrication System. We are innovative in our decisions to be the best we can.
                            Michael feels that continuing education is very important, so he regularly attends various seminars and workshops to keep up to date with the latest technologies, materials and techniques.
                            </p>
                            <hr/>
                            <p className={styles.aboutUsText}>
                            In 2008 Michael was awarded the Karl Ring Memorial Award for Academic Excellence from the Australian Dental Prosthetist Association.
                            Michael was the Australian Dental Prosthetist Association’s Member of the Month in October 2016.
                            </p>
                        </Col>
                        </Row>
                    </Container>
                </Container>
          </React.Fragment>
        );
    }
}
