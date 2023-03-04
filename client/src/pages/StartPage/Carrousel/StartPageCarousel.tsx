import Carousel from 'react-bootstrap/Carousel';

export default function StartPageCarousel() {
	return (
		<div className="carousel-container">
			<Carousel variant="dark">
				<Carousel.Item>
					<img
						src="/carousel/pic1.jpg"
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						src="/carousel/pic2.jpg"
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						src="/carousel/pic3.jpg"
						alt="Third slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						src="/carousel/pic4.jpg"
						alt="Third slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						src="/carousel/pic5.jpg"
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
