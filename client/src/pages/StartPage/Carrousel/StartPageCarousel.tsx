import Carousel from 'react-bootstrap/Carousel';

export default function StartPageCarousel() {
	return (
		<div className="carousel-container">
			<Carousel variant="dark">
				<Carousel.Item>
					<img
						src="/background.jpg"
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						src="/background.jpg"
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						src="/background.jpg"
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
