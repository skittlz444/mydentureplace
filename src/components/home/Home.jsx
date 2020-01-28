import React from 'react';
import {Row, Col, Container, Jumbotron } from 'react-bootstrap';
// import MediaQuery from 'react-responsive';

// import HomeCarousel from './HomeCarousel';
import OurClinic from '@c/ourclinic/OurClinic';
import Services from '@c/services/Services';
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
                        <Services />
                        <hr />
                        <ContactModal />
					</Container>
				</Jumbotron>
                <OurClinic />
			</React.Fragment>
		);
	}
}
