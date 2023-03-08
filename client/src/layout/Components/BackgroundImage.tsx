import Image from 'react-bootstrap/Image';

export default function BackgroundImage() {
	return (
		<>
			{window.innerWidth > 700 ? (
				<Image
					src="/background.jpg"
					className="background-image"
				/>
			) : (
				<Image
					src="/background-mobile.jpg"
					className="background-image"
				/>
			)}
		</>
	);
}
