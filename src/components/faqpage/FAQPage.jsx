import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from './styles/FAQPage.module.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import thumbsup from './img/dreamstime_12622893.jpg';
import img2 from './img/photo 6.JPG';
import mydenture from './img/photo 8.JPG';
import img4 from './img/photo 9.JPG';
import altimage from '@s/loadingimage/loading-image.gif'

export default class FAQPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className={styles.FAQSection} id="faq">
                    <Container className={styles.FAQJumbotron}>
                        <Row className="justify-content-left flex">
                            <h3>
                                FAQ's
                            </h3>
                        </Row>
                        <hr/>
                        <Row className="justify-content-left flex">
                        <Col md={8} style={{paddingLeft: "0"}}>
                            <h4><b>Guarantee</b></h4>
                            <p className={styles.faqText}>
                                Our dentures exceed most denture fabrication requirements and they are all guaranteed for a minimum period of a full year against breakage or tooth loss when you follow the prescribed treatment plan.
                            </p>
                            <p className={styles.faqText}>
                                What this means to you is if in the first year if anything breaks or comes off your original denture made by us under normal wear and tear (that includes even if you accidentally drop them!) we will repair it at no charge to you.
                            </p>
                        </Col>
                        <Col md={4}>
                            <LazyLoadImage
                                src={mydenture}
                                alt={altimage}
                                effect="blur"
                                className={styles.imageFormat}
                            />
                        </Col>
                            <p className={styles.faqText}>
                            The only time the warranty may not be honoured is in the rare case of a partial denture modification in which you lose a natural tooth and we need to add extra teeth to the new denture. Your partial denture was designed and made with the existing natural teeth incorporated into the denture design. By losing one or more of your natural teeth in this instance there can be no guarantee on the partial denture as it may be under an extra force that it wasn’t originally designed for.
                            </p>
                        </Row>
                        <hr/>
                        <Row className="justify-content-left flex">
                        <h4><b>Fees</b></h4>
                        </Row>
                        <Row className="justify-content-left flex">
                        <Col md={4} style={{paddingLeft: "0"}}>
                            <LazyLoadImage
                                src={img2}
                                alt={altimage}
                                effect="blur"
                                className={styles.imageFormat}
                            />
                        </Col>
                        <Col md={8} style={{paddingLeft: "0"}}>
                            <p className={styles.faqText}>
                            Fees for dentures vary from case to case, person to person and as we know everyone’s mouths are different. What may suit one person may not suit the next.
                            </p>
                            <p className={styles.faqText}>
                            At the initial consultation a treatment plan that includes the fees will be provided to you. There is a $55 fee for the first consultation. There are no charges for every stage of the denture making process, the appointments are included in your denture fee.
                            </p>
                        </Col>
                        </Row>
                        <Row className="justify-content-left flex" style={{paddingTop:"10px"}}>
                            <p className={styles.faqText}>
                            We do not provide a quote for partial dentures without first examining you as it depends on the number of components (wires, teeth etc.) that you will require.
                            </p>
                            <p className={styles.faqText}>
                            Dentures do not last indefinitely. Depending on peoples eating habits, changing mouths, and the materials used, the average life of a denture is about 5 – 8 years. For the ongoing health of your mouth it is recommended to replace your denture during this 5-8 year period.
                            </p>
                        </Row>
                        <hr/>
                        <Row className="justify-content-left flex">
                        <h4><b>Health Funds</b></h4>
                        </Row>
                        <Row className="justify-content-left flex">
                        <Col md={8} style={{paddingLeft: "0"}}>
                            <p className={styles.faqText}>
                            We have a HICAPS terminal that will process your private fund rebates.
                            </p>
                            <p className={styles.faqText}>
                            The amount they refund varies from 0% to 100% depending on what treatment you have received and your particular level of cover. In spite of our efforts, we find it impossible to be sure of the amount you will get back.
                            </p>
                            <p className={styles.faqText}>
                            Claims from health insurers vary from one insurer to the next. While some funds may require only one item number for a service another may require many item codes for the same service..… it’s very frustrating!
                            </p>
                            <p className={styles.faqText}>
                            We will help you all we can to make your Health Fund claim.
                            </p>
                        </Col>
                        <Col md={4}>
                        <LazyLoadImage
                            src={thumbsup}
                            alt={altimage}
                            effect="blur"
                            className={styles.imageFormat}
                        />
                        </Col>
                        </Row>
                        <hr/>
                        <Row className="justify-content-left flex">
                            <h4><b>Payment Methods</b></h4>
                        </Row>
                        <Row className="justify-content-left flex">
                            <p className={styles.faqText}>
                            You can pay by Credit Card, EFTPOS, Cheque or Cash.
                            </p>
                            <p className={styles.faqText}>
                            A deposit will be required before any laboratory work is started. We will let you know in advance of the amount. The deposit is usually 50%.
                            </p>
                        </Row>
                        <hr/>
                        <Row className="justify-content-left flex">
                            <Col md={9} style={{paddingLeft: "0"}}>
                            <h4><b>Do I need to see a Dentist first?</b></h4>
                            <p className={styles.faqText}>
                            Just like a good building, dentures need to be made on solid foundations. If you have any concerns about your natural teeth or mouth you should address and complete these with your own dentist before we start treatment.
                            </p>
                            <p className={styles.faqText}>
                            If you do not have your own dentist, we will happily recommend a dentist to you.
                            </p>
                            <p className={styles.faqText}>
                            You do not need a referral to see us. That’s right, it is not necessary to obtain a referral from a dentist or GP to get dentures made or to see us here at mydentureplace. You can see us directly.
                            </p>
                            </Col>
                            <Col md={3}>
                            <LazyLoadImage
                                src={img4}
                                alt={altimage}
                                effect="blur"
                                className={styles.imageFormat}
                            />
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </React.Fragment>
        )
    }
}