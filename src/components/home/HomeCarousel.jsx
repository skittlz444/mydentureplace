import React from 'react';
import {Image, Carousel} from 'react-bootstrap';

import image1 from './img/high_res/Our-Building2-.png';
import image2 from './img/high_res/photo 2.jpg';
import image3 from './img/high_res/11.jpg';
import image4 from './img/high_res/photo 12.jpg';

export default class HomeCarousel extends React.Component{
	render(){
		return (
			<React.Fragment>
				<Carousel>
				  <Carousel.Item>
				    <Image
				      className="d-block w-100"
				      src={image1}
				      alt="First slide"
				    />
				  </Carousel.Item>
				  <Carousel.Item>
				    <Image
				      className="d-block w-100"
				      src={image2}
				      alt="Second slide"
				    />
				  </Carousel.Item>
				  <Carousel.Item>
				    <Image
				      className="d-block w-100"
				      src={image3}
				      alt="Third slide"
				    />
				  </Carousel.Item>
				  <Carousel.Item>
				    <Image
				      className="d-block w-100"
				      src={image4}
				      alt="Fourth slide"
				    />
				  </Carousel.Item>
				</Carousel>
			</React.Fragment>
		);
	}
}