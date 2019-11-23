import React from 'react';
import styles from './styles/OurClinic.module.css';
import {Row, Col, Container, Image, Button} from 'react-bootstrap';

import image1 from './img/4.-My-Denture-Place-Waiting-Room-300x225.jpg'
import image2 from './img/5.-Dentist-Chair-300x225.jpg'

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
						<Row>
							<Col lg={4} md={12}>
								<Image src={image1} className={styles.leftImage}/>
							</Col>
							<Col lg={5}>
								<h4>Designed with your needs in mind.</h4>
								<h4>Be comfortable.</h4>
								<h4>Private lounge area.</h4>
								<h4>No public waiting room.</h4>
								<h4>We listen when you talk.</h4>
								<h4>We have no front desk.</h4>
								<h4>More personal reception.</h4>
							</Col>
							<Col lg={3} md={12}>
								<Image src={image2} className={styles.rightImage}/>
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