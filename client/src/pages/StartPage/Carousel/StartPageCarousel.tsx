import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function StartPageCarousel() {
	const [collectionDisplayed, setCollectionDisplayed] = useState<'love' | 'essential' | ''>('');

	return (
		<>
			<div className="collections">
				<div className="collection-title">
					{collectionDisplayed === '' ? (
						<h1>Coleções</h1>
					) : collectionDisplayed === 'love' ? (
						<h1>Linha Amar e Cuidar</h1>
					) : (
						<h1>Linha Essenciais</h1>
					)}
				</div>
				<div className="collection-options">
					<span
						className="amar-e-cuidar"
						onClick={() => setCollectionDisplayed('love')}>
						<p>
							<b>Amar e Cuidar</b>
						</p>
					</span>
					<span
						className="essenciais"
						onClick={() => setCollectionDisplayed('essential')}>
						<p>
							<b>Essenciais</b>
						</p>
					</span>
				</div>
			</div>
			<div className="carousel-container">
				{collectionDisplayed === 'love' ? (
					<Carousel variant="dark">
						<Carousel.Item>
							<img
								src="/carousel/love/pic1.jpg"
								alt="First slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/carousel/love/pic2.jpg"
								alt="Second slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/carousel/love/pic3.jpg"
								alt="Third slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/carousel/love/pic4.jpg"
								alt="Third slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/carousel/love/pic5.jpg"
								alt="Third slide"
							/>
						</Carousel.Item>
					</Carousel>
				) : (
					<Carousel variant="dark">
						<Carousel.Item>
							<img
								src="/carousel/essential/pic1.jpg"
								alt="First slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/carousel/essential/pic2.jpg"
								alt="Second slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/carousel/essential/pic3.jpg"
								alt="Third slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/carousel/essential/pic4.jpg"
								alt="Third slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/carousel/essential/pic5.jpg"
								alt="Third slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/carousel/essential/pic6.jpg"
								alt="Third slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/carousel/essential/pic7.jpg"
								alt="Third slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/carousel/essential/pic8.jpg"
								alt="Third slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/carousel/essential/pic9.jpg"
								alt="Third slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/carousel/love/pic5.jpg"
								alt="Third slide"
							/>
						</Carousel.Item>
					</Carousel>
				)}
			</div>
		</>
	);
}
