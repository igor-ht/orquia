import './products.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Body from './components/Body/Body';
import ShampooAndConditioner from './components/Shampoo&Conditioner/Shampoo&Conditioner';
import Face from './components/Face/Face';
import Seruns from './components/Seruns/Seruns';

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
					<Face />
				</Tab>
				<Tab
					eventKey="serum"
					title="Séruns">
					<Seruns />
				</Tab>
				<Tab
					eventKey="gel"
					title="Géis">
					<>Géis</>
				</Tab>
				<Tab
					eventKey="outros"
					title="Outros">
					<>Outros</>
				</Tab>
			</Tabs>
		</main>
	);
}
