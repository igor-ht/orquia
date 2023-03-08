import Accordion from 'react-bootstrap/Accordion';
import CarAirFreshener from './CarAirFreshener';
import HomeSpray from './HomeSpray';

export default function Others() {
	return (
		<Accordion flush>
			<Accordion.Item eventKey="0">
				<Accordion.Header>Home Spray</Accordion.Header>
				<Accordion.Body>
					<HomeSpray />
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>Aromatizador para veículos</Accordion.Header>
				<Accordion.Body>
					<CarAirFreshener />
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}
