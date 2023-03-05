import './products.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Products() {
	return (
		<main className="products">
			<Tabs
				defaultActiveKey="shampoo"
				id="justify-tab-example"
				className="mb-3 titles"
				justify>
				<Tab
					eventKey="shampoo"
					title="Shampoo">
					<>Shampoo</>
				</Tab>
				<Tab
					eventKey="condicionador"
					title="Condicionador">
					<>Condicionador</>
				</Tab>
				<Tab
					eventKey="corpo"
					title="Corpo">
					<>Lavagem corporal</>
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
