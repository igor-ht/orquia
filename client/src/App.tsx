import './layout/style/App.scss';
import BackgroundImage from './layout/Components/BackgroundImage';
import NavbarOffCanvas from './layout/Components/Navbar';
import Content from './layout/Components/Content';
import Footer from './layout/Components/Footer';

export default function App() {
	return (
		<>
			<BackgroundImage />
			<div className="app-container">
				<NavbarOffCanvas />
				<Content />
				<Footer />
			</div>
		</>
	);
}
