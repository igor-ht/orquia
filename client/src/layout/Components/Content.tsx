import { Outlet } from 'react-router-dom';

export default function Content() {
	return (
		<main className="main-container">
			<Outlet />
		</main>
	);
}
