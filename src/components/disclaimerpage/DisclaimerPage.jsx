import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from './styles/DisclaimerPage.module.css';

export default class DisclaimerPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className={styles.disclaimerSection} id="disclaimer">
                    <Container className={styles.disclaimerJumbotron}>
                        <Row className="justify-content-left flex">
                            <h3>
                                Disclaimer
                            </h3>
                        </Row>
                        <hr/>
                        <Row className="justify-content-left flex">
                            <p className={styles.disclaimerText}>
                                The information contained in this website is for general information purposes only. The information is provided by <a className={styles.disclaimerLink} href="www.mydentureplace.com.au">www.mydentureplace.com.au</a> and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
                            </p>
                            <p className={styles.disclaimerText}>
                                In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                            </p>
                            <p className={styles.disclaimerText}>
                                Through this website you are able to link to other websites which are not under the control of www.mydentureplace.com.au We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                            </p>
                            <p className={styles.disclaimerText}>
                                Every effort is made to keep the website up and running smoothly. However, <a className={styles.disclaimerLink} href="www.mydentureplace.com.au">www.mydentureplace.com.au</a> takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
                            </p>
                        </Row>
                    </Container>
                </Container>
            </React.Fragment>
        )
    }
}