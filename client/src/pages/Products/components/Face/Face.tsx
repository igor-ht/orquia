import Accordion from 'react-bootstrap/Accordion';
import FaceSoap from './FaceSoap';
import FaceCream from './FaceCream';
import FaceExfoliante from './FaceExfoliate';

export default function Face() {
	return (
		<Accordion>
			<Accordion.Item eventKey="0">
				<Accordion.Header>Sabonete Facial</Accordion.Header>
				<Accordion.Body>
					<FaceSoap />
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>Creme Facial</Accordion.Header>
				<Accordion.Body>
					<FaceCream />
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="2">
				<Accordion.Header>Esfoliante Facial</Accordion.Header>
				<Accordion.Body>
					<FaceExfoliante />
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}
