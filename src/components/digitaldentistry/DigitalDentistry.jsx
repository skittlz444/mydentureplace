import React from 'react';
import styles from './styles/DigitalDentistry.module.css';
import {Row, Container} from 'react-bootstrap';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import image1 from './img/MDP Digital Process.jpg'
import altImage from '@s/loadingimage/loading-image.gif'

export default class DigitalDentistry extends React.Component{
	render(){
		return (
			<React.Fragment>
				<Container className={styles.digitalDentistryContainer} id="digitaldentistry">
					<Container>
						<Row className="justify-content-center flex">
							<h2>
								Digital Dentistry
							</h2>
						</Row>
						<hr/>
						<Row className="justify-content-center flex" style={{paddingBottom:"10px"}}>
                            <LazyLoadImage
                            src={image1}
                            alt={altImage}
                            className={styles.digitalImageFormat}
                             />
                        </Row>
						<Row>
						<p className={styles.digiTextSize}>
						Digital dentures are made using computer-aided design (CAD) and computer-aided manufacturing (CAM) technologies. This innovative process integrates the treatment steps in the dental chair with the digital manufacturing processes in the dental laboratory.
						</p>
						</Row>
						<hr/>
						<Row>
						<h3>Precise</h3>
						</Row>
                        <Row>
						<p className={styles.digiTextSize}>
						CAD designed and manufactured
						</p>
						</Row>
						<hr />
						<Row>
                        <h3>Durable</h3>
                        </Row>
                        <Row>
                        <p className={styles.digiTextSize}>
                        Milled from high impact premanufactured discs
                        </p>
                        </Row>
						<hr />
                        <Row>
                        <h3>Consistency</h3>
                        </Row>
                        <Row>
                        <p className={styles.digiTextSize}>
                        Same set of dentures can be reproduced many times
                        </p>
                        </Row>
                        <hr />
                        <Row>
                        <h3>Digital Backup</h3>
                        </Row>
                        <Row>
                        <p className={styles.digiTextSize}>
                        Can be remade at any point
                        </p>
                        </Row>
                        <hr />
                        <Row>
                        <h3>Customisable</h3>
                        </Row>
                        <Row>
                        <p className={styles.digiTextSize}>
                        Many shades and teeth shapes available
                        </p>
                        </Row>
                        <hr />
                        <Row>
                        <h3>Convenient</h3>
                        </Row>
                        <Row>
                        <p className={styles.digiTextSize}>
                        Faster to make, less appointments
                        </p>
                        </Row>
					</Container>
				</Container>
			</React.Fragment>
		);
	}
}