import './products.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Body from './components/Body/Body';
import ShampooAndConditioner from './components/Shampoo&Conditioner/Shampoo&Conditioner';

export default function Products() {
	return (
		<main className="products">
			<Tabs
				defaultActiveKey="shampoo-condicionador"
				id="justify-tab-example"
				className="titles"
				justify>
				<Tab
					eventKey="shampoo-condicionador"
					title="Shampoo e Condicionador">
					<ShampooAndConditioner />
				</Tab>
				<Tab
					eventKey="corpo"
					title="Corpo">
					<Body />
				</Tab>
				<Tab
					eventKey="rosto"
					title="Rosto">
					<>Lavagem rosto</>
				</Tab>
				<Tab
					eventKey="serum"
					title="Seruns">
					<>Séruns</>
				</Tab>
				<Tab
					eventKey="gel"
					title="Géis">
					<>Géis</>
				</Tab>
				<Tab
					eventKey="outros"
					title="Outros">
					<></>
				</Tab>
			</Tabs>
		</main>
	);
}
