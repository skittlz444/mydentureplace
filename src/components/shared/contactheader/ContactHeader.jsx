import React from 'react';
import {Row, Col, Container, Image, Button} from 'react-bootstrap';
import MediaQuery from 'react-responsive';

import styles from './styles/ContactHeader.module.css';
import headerImage from './img/My-Denture-Place-Header-50pc-trans.png';
export default class ContactHeader extends React.Component{
	render(){
		return (
			<React.Fragment>
				<Container className={styles.headerContainer + ' wow fadeInDown'}>
					<Container>
						<Row className="justify-content-center">
							<Image src={headerImage}/>
							<MediaQuery minWidth={1200}>
								<Col className={styles.lgContactInfo}>
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
								</Col>
							</MediaQuery>
						</Row>
						</Container>
				</Container>
			</React.Fragment>
		);
	}
}