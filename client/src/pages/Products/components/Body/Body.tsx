import Accordion from 'react-bootstrap/Accordion';
import BodyLotion from './BodyLotion';
import ShowerGel from './ShowerGel';

export default function Body() {
	return (
		<Accordion flush>
			<Accordion.Item eventKey="0">
				<Accordion.Header>Shower Gel</Accordion.Header>
				<Accordion.Body>
					<ShowerGel />
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>Loção Corporal</Accordion.Header>
				<Accordion.Body>
					<BodyLotion />
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}
