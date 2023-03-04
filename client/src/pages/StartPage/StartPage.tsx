import './startPage.scss';
import StartPageCarousel from './Carrousel/StartPageCarousel';
import ProductsListCard from './ProductsListCard/ProductsListCard';

export default function StartPage() {
	return (
		<div className="start-page">
			<StartPageCarousel />
			{/* <div className="products-list-display">
				<ProductsListCard />
				<div style={{ width: 'fit-content', height: 'fit-content' }}></div>
			</div> */}
		</div>
	);
}
