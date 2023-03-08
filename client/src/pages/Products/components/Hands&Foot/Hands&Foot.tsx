import Accordion from 'react-bootstrap/Accordion';
import FootCream from './FootCream';
import HandCream from './HandCream';

export default function HandsAndFoot() {
	return (
		<Accordion flush>
			<Accordion.Item eventKey="0">
				<Accordion.Header>Creme para as mãos</Accordion.Header>
				<Accordion.Body>
					<HandCream />
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>Gél para os pés</Accordion.Header>
				<Accordion.Body>
					<FootCream />
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}
