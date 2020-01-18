import React from 'react';
import {Row, Col, Container, Jumbotron } from 'react-bootstrap';
import MediaQuery from 'react-responsive';

import HomeCarousel from './HomeCarousel';
import OurClinic from '@c/ourclinic/OurClinic';
import ContactModal from '@c/contactmodal/ContactModal';
import styles from './styles/Home.module.css';

export default class Home extends React.Component {
    render() {
		return (
			<React.Fragment>
				<Jumbotron fluid className={styles.jumboContainer} id="home">
					<Container>
						<Row>
							<Col className='justify-content-center flex'>
								<h1>Welcome To My Denture Place</h1>
							</Col>
						</Row>
						<hr/>
						<Row>
							<Col  md={{span:12, order:2}} sm={{span:12, order:2}} xs={{span:12, order:2}} lg={{span:6, order:1}} className={styles.homeInfoCol}>
								<div>
									<h2>Warm, Friendly, Professional Staff in a Relaxed Environment</h2>
									<ul>
										<li><h4>Can't Smile with confidence?</h4></li>
										<li><h4>Have trouble eating?</h4></li>
										<li><h4>Have trouble eating?</h4></li> 
										<li><h4>Problems with ill-fitting dentures?</h4></li>
										<li><h4>Looking for a mouthguard that fits?</h4></li>
									</ul>
                                    <hr />
                                    <ContactModal />
								</div>
							</Col>
							<MediaQuery maxWidth={991}>
							{
								(matches) =>{
									if (matches){
                                        return (
                                            <Col sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }} className={styles.homeCarousel}>
                                                <HomeCarousel />
                                            </Col>
                                                )
									} else {
                                        return (
                                            <Col lg={{ span: 6, order: 2 }} >
                                                <HomeCarousel />
                                            </Col>
											)
									}
								}
							}
							</MediaQuery>
						</Row>
					</Container>
				</Jumbotron>
                <OurClinic />
			</React.Fragment>
		);
	}
}
