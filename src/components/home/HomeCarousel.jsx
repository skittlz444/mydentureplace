import React from 'react';
import {Image, Carousel} from 'react-bootstrap';

import image1 from './img/Our-Building2-e1386743230259.png';
import image2 from './img/2.-My-Denture-Place-Entry-300x225.jpg';
import image3 from './img/3.-BPS-Cerified-Laboratory-300x225.jpg';
import image4 from './img/7.-Dentist-At-Work-300x225.jpg';

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