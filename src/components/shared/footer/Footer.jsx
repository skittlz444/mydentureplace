import React from 'react';
import {Row, Col, Container, Button, Nav} from 'react-bootstrap';
import { HashLink as Link } from "react-router-hash-link";

export default class Footer extends React.Component{
	constructor(props){
		super(props);
		this.handlePrivacy = this.handlePrivacy.bind(this);
		this.scroll = this.scroll.bind(this);
	}

	handlePrivacy(){
		alert("Coming Soon");
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
								<Row>
									<Col>
                                        <Link
                                          to={"/privacypolicy#privacypolicy"}
                                          scroll={el => this.scroll(el)}
                                        >
                                        <Button variant="light">Privacy Policy</Button>
                                        </Link>
									</Col>
									<Col>
										<Button variant="light" onClick={this.handlePrivacy}>Terms of Use</Button>
									</Col>
									<Col>
										<Button variant="light" onClick={this.handlePrivacy}>Disclaimer</Button>
									</Col>
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