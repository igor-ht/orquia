import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Products from './pages/Products/Products';
import StartPage from './pages/StartPage/StartPage';

export const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <StartPage />,
			},
			{
				path: '/produtos',
				element: <Products />,
			},
			{
				path: '/sobre-nos',
				element: <AboutUs />,
			},
			{
				path: '/entre-em-contato',
				element: <ContactUs />,
			},
		],
	},
]);
