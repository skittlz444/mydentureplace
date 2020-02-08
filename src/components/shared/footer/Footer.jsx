import React from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';
import { HashLink as Link } from "react-router-hash-link";

import MediaQuery from 'react-responsive';

const SMALL_MOBILE_WIDTH = 600;

export default class Footer extends React.Component{
	constructor(props){
		super(props);
		this.scroll = this.scroll.bind(this);
	}

	scroll(el) {
        console.log(el);
        var offset = document.getElementById("navbar").offsetHeight;
        offset = offset > 150 ? 56 : offset;
        setTimeout(() => {
          window.scrollTo({
            top: el.offsetTop - offset,
            left: 0,
            behavior: "smooth"
          });
        }, 300);
      }

	render(){
		return (
			<React.Fragment>
				<Container>
					<Row className="justify-content-center flex">
						<Col md={6} className="justify-content-center flex">
							<Container>
								<Container>
									<Row className={"justify-content-center"}>
										Your First Impression is a Lasting Impression
									</Row>
								</Container>
								<Row className={"justify-content-center"}>
								<MediaQuery maxWidth={SMALL_MOBILE_WIDTH}>
									<Col xs={12} style={{marginBottom: "5px"}}>
									    <Row className={"justify-content-center"}>
                                        <Link
                                          to={"/privacypolicy#privacypolicy"}
                                          scroll={el => this.scroll(el)}
                                        >
                                        <Button variant="light">Privacy Policy</Button>
                                        </Link>
                                        </Row>
									</Col>
									<Col xs={12} style={{marginBottom: "5px"}}>
									    <Row className={"justify-content-center"}>
									    <Link
                                          to={"/termofuse#termofuse"}
                                          scroll={el => this.scroll(el)}
                                        >
                                        <Button variant="light">Terms of Use</Button>
                                        </Link>
                                        </Row>
									</Col>
									<Col xs={12} style={{marginBottom: "5px"}}>
									    <Row className={"justify-content-center"}>
									    <Link
                                          to={"/disclaimer#disclaimer"}
                                          scroll={el => this.scroll(el)}
                                        >
                                        <Button variant="light">Disclaimer</Button>
                                        </Link>
                                        </Row>
									</Col>
                                </MediaQuery>
								<MediaQuery minWidth={SMALL_MOBILE_WIDTH+1}>
								<Col>
                                    <Link
                                      to={"/privacypolicy#privacypolicy"}
                                      scroll={el => this.scroll(el)}
                                    >
                                    <Button variant="light">Privacy Policy</Button>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link
                                      to={"/termofuse#termofuse"}
                                      scroll={el => this.scroll(el)}
                                    >
                                    <Button variant="light">Terms of Use</Button>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link
                                      to={"/disclaimer#disclaimer"}
                                      scroll={el => this.scroll(el)}
                                    >
                                    <Button variant="light">Disclaimer</Button>
                                    </Link>
                                </Col>
								</MediaQuery>
								</Row>
							</Container>
						</Col>	
					</Row>
					<Row className="justify-content-center flex">
					<small>
					Copyright © 2020 Michael Carson
					</small>
					</Row>
					<Row className="justify-content-center flex">
					<small>
                    Web Design by <a href="http://www.haydencarson.com" style={{color: "#212529"}}>Hayden Carson</a> & Kevin Kam
                    </small>
                    </Row>
				</Container>
			</React.Fragment>
		);
	}
}