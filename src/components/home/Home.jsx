import React from 'react';
import {Row, Col, Container, Image, Jumbotron } from 'react-bootstrap';
import MediaQuery from 'react-responsive';

import HomeCarousel from './HomeCarousel';
import leftImage from './img/Restoring-Your-Smile.jpg';
import OurClinic from '@c/ourclinic/OurClinic';
import ContactModal from '@c/contactmodal/ContactModal';
import styles from './styles/Home.module.css';

export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.handleGetInTouchClick = this.handleGetInTouchClick.bind(this);
	}

	handleGetInTouchClick(e){
		alert("Coming soon");
	}

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
				<Container>
					<Row>
                        <Col>
                            <Image src={leftImage} className={styles.leftImage} PlaceholderContent={<p>Loading...</p>} />
						</Col>
						<Col>
							<h4>
								Before you get new dentures, you should have all the information required help you make the right decision.
							</h4>
							<h4>
								Our aim is to help you to address your concerns and questions.
							</h4>
							<h4>
								We prescribe and make your dentures directly to you.
							</h4>
							<h4>
								Custom made right here, for your inh4idual smile.
							</h4>
							<h4>
								Naturally shaped teeth from quality European manufacturers.
							</h4>
							<h4>
								Our natural looking dentures consider you and your specific needs
							</h4>
						</Col>
					</Row>
                </Container>
                <OurClinic />
			</React.Fragment>
		);
	}
}