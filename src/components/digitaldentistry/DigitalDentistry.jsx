import React from 'react';
import styles from './styles/DigitalDentistry.module.css';
import {Row, Col, Container, Button} from 'react-bootstrap';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import altImage from '@s/loadingimage/loading-image.gif'

export default class DigitalDentistry extends React.Component{
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
				<Container className={styles.digitalDentistryContainer} id="ourclinic">
					<Container>
						<Row className="justify-content-center flex">
							<h2>
								Digital Dentistry
							</h2>
						</Row>
						<hr/>
						<Row>
						<p className={styles.digiTextSize}>
						Digital dentures are made using computer-aided design (CAD) and computer-aided manufacturing (CAM) technologies. This innovative process integrates the treatment steps in the dental chair with the digital manufacturing processes in the dental laboratory.
						</p>
						</Row>
						<hr/>
						<Row>
						</Row>
						<hr/>
						<Row>
							<Col className="justify-content-center flex">
								<Button variant="info" onClick={this.handleFindUsClick}><h3 className={styles.actionButtonText}>Find Us</h3></Button>
							</Col>
						</Row>
					</Container>
				</Container>
			</React.Fragment>
		);
	}
}