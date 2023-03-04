import './layout/style/App.scss';
import Content from './layout/Components/Content';
import Footer from './layout/Components/Footer';
import NavbarOffCanvas from './layout/Components/Navbar';
import Image from 'react-bootstrap/Image';

export default function App() {
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

			<div className="app-container">
				<NavbarOffCanvas />
				<Content />
				<Footer />
			</div>
		</>
	);
}
