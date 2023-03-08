import Accordion from 'react-bootstrap/Accordion';
import SerumRevitalizing from './SerumRevitalizing';
import SerunVitaminC from './SerunVitaminC';

export default function Seruns() {
	return (
		<Accordion flush>
			<Accordion.Item eventKey="0">
				<Accordion.Header>Sérum Vitamina C</Accordion.Header>
				<Accordion.Body>
					<SerunVitaminC />
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>Sérum Revitalizante</Accordion.Header>
				<Accordion.Body>
					<SerumRevitalizing />
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}
