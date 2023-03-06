import Cherry from './Cherry';
import GreenApple from './GreenApple';
import Accordion from 'react-bootstrap/Accordion';

export default function ShampooAndConditioner() {
	return (
		<Accordion>
			<Accordion.Item eventKey="0">
				<Accordion.Header>Maçã Verde</Accordion.Header>
				<Accordion.Body>
					<GreenApple />
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>Cereja e Avelã</Accordion.Header>
				<Accordion.Body>
					<Cherry />
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}
