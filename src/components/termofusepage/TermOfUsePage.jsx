import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from './styles/TermOfUsePage.module.css';

export default class TermOfUsePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className={styles.termOfUseSection} id="termofuse">
                    <Container className={styles.termOfUseJumbotron}>
                        <Row className="justify-content-left flex">
                            <h3>
                                Terms Of Use
                            </h3>
                        </Row>
                        <hr/>
                        <Row className="justify-content-left flex">
                            <p className={styles.termOfUseText}>
                                Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern <a className={styles.termOfUseLink} href="http://www.mydentureplace.com.au">www.mydentureplace.com.au</a>‘s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
                            </p>
                            <p className={styles.termOfUseText}>
                                The term ‘<a className={styles.termOfUseLink} href="http://www.mydentureplace.com.au">www.mydentureplace.com.au</a>’ or ‘us’ or ‘we’ refers to the owner of the website.
                            </p>
                            <p className={styles.termOfUseText}>
                                The term ‘you’ refers to the user or viewer of our website.
                            </p>
                            <p className={styles.termOfUseText}>
                                The use of this website is subject to the following terms of use:
                            </p>
                            <li className={styles.termOfUseText}>
                                The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                            </li>
                            <li className={styles.termOfUseText}>
                                Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                            </li>
                            <li className={styles.termOfUseText}>
                                Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
                            </li>
                            <li className={styles.termOfUseText}>
                                This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                            </li>
                            <li className={styles.termOfUseText}>
                                All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.
                            </li>
                            <li className={styles.termOfUseText}>
                                Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.
                            </li>
                            <li className={styles.termOfUseText}>
                                From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
                            </li>
                            <li className={styles.termOfUseText}>
                                Your use of this website and any dispute arising out of such use of the website is subject to the laws of Australia.
                            </li>
                        </Row>
                    </Container>
                </Container>
            </React.Fragment>
        )
    }
}