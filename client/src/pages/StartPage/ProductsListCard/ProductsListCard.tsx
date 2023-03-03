import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

export default function ProductsListCard() {
	return (
		<ListGroup className="text-center">
			<ListGroup.Item>Categorias de Produtos</ListGroup.Item>
			<ListGroup.Item
				action
				variant="primary">
				<Link to={'/'}></Link>
				Banho 🛀
			</ListGroup.Item>
			<ListGroup.Item
				action
				variant="secondary">
				<Link to={'/'}></Link>
				Shampoo 🧴
			</ListGroup.Item>
			<ListGroup.Item
				action
				variant="success">
				<Link to={'/'}></Link>
				Condicionador 🧴
			</ListGroup.Item>
			<ListGroup.Item
				action
				variant="danger">
				<Link to={'/'}></Link>
				Sabão 🧼
			</ListGroup.Item>
			<ListGroup.Item
				action
				variant="warning">
				<Link to={'/'}></Link>
				Sérum
			</ListGroup.Item>
			<ListGroup.Item
				action
				variant="info">
				<Link to={'/'}></Link>
				Creme
			</ListGroup.Item>
			<ListGroup.Item
				action
				variant="light">
				<Link to={'/'}></Link>
				Gel
			</ListGroup.Item>
			<ListGroup.Item
				action
				variant="dark">
				<Link to={'/'}></Link>
				Outros
			</ListGroup.Item>
		</ListGroup>
	);
}
