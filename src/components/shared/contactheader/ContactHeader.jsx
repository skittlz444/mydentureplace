import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import MediaQuery from 'react-responsive';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import altimage from '@s/loadingimage/loading-image.gif'

import styles from './styles/ContactHeader.module.css';
import headerImage from './img/MDP New Logo.png';
export default class ContactHeader extends React.Component{
	render(){
		return (
			<React.Fragment>
				<Container className={styles.headerContainer}>
					<Container>
						<Row className="justify-content-center">
							<Col>
							</Col>
							<Col>
							    <LazyLoadImage
                                src={headerImage}
                                alt={altimage}
                                className={styles.headerImage + " wow fadeInDown"}
                                 />
							</Col>
							<Col md={{order:1}} className={styles.lgContactInfo + ' justify-content-end wow fadeInDown delay-1s flex'}>
								<div>
									<MediaQuery minWidth={800}>
										<h3 className={styles.phone}>
											<a className={styles.headerAction} href="tel:0741240800">07 4124 0800</a>
										</h3>
										<div>
											Shop 4, 10 Liuzzi St
										</div>
										<div>
											Hervey Bay QLD 4655
										</div>
										<div>
											<a className={styles.headerAction} href="mailto:info@mydentureplace.com.au">info@mydentureplace.com.au</a>
										</div>
									</MediaQuery>
								</div>
							</Col>	
						</Row>
						</Container>
				</Container>
			</React.Fragment>
		);
	}
}