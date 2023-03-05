import Image from 'react-bootstrap/Image';

export default function BackgroundImage() {
	return (
		<>
			{window.innerWidth > 700 ? (
				<Image
					fluid
					src="/background.jpg"
					className="background-image"
				/>
			) : (
				<Image
					fluid
					src="/background-mobile.jpg"
					className="background-image"
				/>
			)}
		</>
	);
}
