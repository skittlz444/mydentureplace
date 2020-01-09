import React from 'react';
import styles from './styles/OurClinic.module.css';
import {Row, Col, Container, Button} from 'react-bootstrap';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import image1 from './img/4.-My-Denture-Place-Waiting-Room-300x225.jpg'
import image2 from './img/5.-Dentist-Chair-300x225.jpg'
import altimage from '@s/loadingimage/loading-image.gif'

export default class OurClinic extends React.Component{
	constructor(props){
		super(props);
		this.handleFindUsClick = this.handleFindUsClick.bind(this);
	}

	handleFindUsClick(){
		alert("Coming soon");
	}

	render(){
		return (
			<React.Fragment>
				<Container className={styles.ourClinicContainer} id="ourclinic">
					<Container>
						<Row className="justify-content-center flex">
							<h2>
								Our Clinic
							</h2>
						</Row>
						<hr/>
						<Row>
							<Col lg={4} md={12}>
							    <LazyLoadImage
							    src={image1}
							    alt={altimage}
							    className={styles.leftImage}
							     />
							</Col>
							<Col lg={5}>
								<h4>All Health Funds Welcome.</h4>
								<h4>DVA Provider.</h4>
								<h4>Latest Technologies.</h4>
								<h4>Relaxing environment.</h4>
								<h4>Discreet and personal service.</h4>
							</Col>
							<Col lg={3} md={12}>
							    <LazyLoadImage
                                src={image2}
                                alt={altimage}
                                className={styles.rightImage}
                                 />
							</Col>
						</Row>
						<hr/>
						<Row>
							<Col className="justify-content-center flex">
								<Button onClick={this.handleFindUsClick}><h3 className={styles.actionButtonText}>Find Us</h3></Button>
							</Col>
						</Row>
					</Container>
				</Container>
			</React.Fragment>
		);
	}
}