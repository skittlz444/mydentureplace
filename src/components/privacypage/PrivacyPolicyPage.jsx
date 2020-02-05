import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from './styles/PrivacyPolicyPage.module.css';

export default class PrivacyPolicyPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className={styles.privacyPolicySection} id="privacypolicy">
                    <Container className={styles.privacyPolicyJumbotron}>
                        <Row className="justify-content-left flex">
                            <h3>
                                Privacy Policy
                            </h3>
                        </Row>
                        <hr/>
                        <Row className="justify-content-left flex">
                            <p className={styles.privacyPolicyText}>
                                Updated February 2020 This following document sets forth the Privacy Policy for the MyDenturePlace website, <a className={styles.privacyPolicyLink} href="www.mydentureplace.com.au">www.mydentureplace.com.au</a>. MyDenturePlace is committed to providing you with the best possible customer service experience. MyDenturePlace is bound by the Privacy Act 1988 (Cth), which sets out a number of principles concerning the privacy of individuals.
                            </p>
                            <h4>Collection of your personal information</h4>
                            <p className={styles.privacyPolicyText}>
                                There are many aspects of the site which can be viewed without providing personal information, however, for access to future MyDenturePlace customer support features you are required to submit personally identifiable information. This may include but not limited to a unique email address.
                            </p>
                            <h4>Sharing of your personal information</h4>
                            <p className={styles.privacyPolicyText}>
                                We may occasionally hire other companies to provide services on our behalf, including but not limited to handling customer support enquiries, processing transactions or customer freight shipping. Those companies will be permitted to obtain only the personal information they need to deliver the service. MyDenturePlace takes reasonable steps to ensure that these organisations are bound by confidentiality and privacy obligations in relation to the protection of your personal information.
                            </p>
                            <h4>Use of your personal information</h4>
                            <p className={styles.privacyPolicyText}>
                                For each visitor to reach the site, we expressively collect the following non-personally identifiable information, including but not limited to browser type, version and language, operating system, pages viewed while browsing the Site, page access times and referring website address. This collected information is used solely internally for the purpose of gauging visitor traffic, trends and delivering personalized content to you while you are at this Site. From time to time, we may use customer information for new, unanticipated uses not previously disclosed in our privacy notice. If our information practices change at some time in the future we will use for these new purposes only, data collected from the time of the policy change forward will adhere to our updated practices.
                            </p>
                            <h4>Changes to this Privacy Policy</h4>
                            <p className={styles.privacyPolicyText}>
                                MyDenturePlace reserves the right to make amendments to this Privacy Policy at any time. If you have objections to the Privacy Policy, you should not access or use the Site.
                            </p>
                            <h4>Accessing Your Personal Information</h4>
                            <p className={styles.privacyPolicyText}>
                                You have a right to access your personal information, subject to exceptions allowed by law. If you would like to do so, please let us know. You may be required to put your request in writing for security reasons. MyDenturePlace reserves the right to charge a fee for searching for, and providing access to, your information on a per request basis.
                            </p>
                            <h4>Contacting us</h4>
                            <p className={styles.privacyPolicyText}>
                                MyDenturePlace welcomes your comments regarding this Privacy Policy. If you have any questions about this Privacy Policy and would like further information, please contact us by any of the following means during business hours Monday to Friday.
                            </p>
                        </Row>
                        <Row className="justify-content-left flex">
                        <p className={styles.privacyPolicyText}>
                        Call: <a className={styles.privacyPolicyLink} href="tel:0741240800">07 4124 0800</a>
                        </p>
                        </Row>
                        <Row className="justify-content-left flex">
                        <p className={styles.privacyPolicyText} style={{marginBottom:"0px"}}>
                        Post:
                        </p>
                        </Row>
                        <Row className="justify-content-left flex">
                        <p className={styles.privacyPolicyText} style={{marginBottom:"0px"}}>
                        Attn: Privacy Policy,
                        </p>
                        </Row>
                        <Row className="justify-content-left flex">
                        <p className={styles.privacyPolicyText} style={{marginBottom:"0px"}}>
                        MyDenturePlace, Shop 4,
                        </p>
                        </Row>
                        <Row className="justify-content-left flex">
                        <p className={styles.privacyPolicyText} style={{marginBottom:"0px"}}>
                        10 Liuzzi St Hervey Bay QLD 4655,
                        </p>
                        </Row>
                        <Row className="justify-content-left flex">
                        <p className={styles.privacyPolicyText} >
                        AUSTRALIA
                        </p>
                        </Row>
                        <Row className="justify-content-left flex">
                        <p className={styles.privacyPolicyText}>
                        E-mail: <a className={styles.privacyPolicyLink} href="mailto:info@mydentureplace.com.au">info@mydentureplace.com.au</a>
                        </p>
                        </Row>
                    </Container>
                </Container>
            </React.Fragment>
        )
    }
}