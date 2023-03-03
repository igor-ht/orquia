import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';

export default function NavbarOffCanvas() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Navbar>
			<button
				className="button-toggler"
				type="button"
				onClick={handleShow}>
				<span className="navbar-toggler-icon"></span>
			</button>
			<Offcanvas
				show={show}
				onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Menu</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<ListGroup>
						<ListGroup.Item
							action
							variant="secondary">
							<Link
								to={'/'}
								onClick={handleClose}>
								Início
							</Link>
						</ListGroup.Item>
						<ListGroup.Item
							action
							variant="primary">
							<Link
								to={'/produtos'}
								onClick={handleClose}>
								Produtos
							</Link>
						</ListGroup.Item>
						<ListGroup.Item
							action
							variant="info">
							<Link
								to={'/sobre-nos'}
								onClick={handleClose}>
								Sobre nós
							</Link>
						</ListGroup.Item>
						<ListGroup.Item
							action
							variant="warning">
							<Link
								to={'/entre-em-contato'}
								onClick={handleClose}>
								Entre em contato
							</Link>
						</ListGroup.Item>
						<ListGroup.Item
							action
							variant="danger"></ListGroup.Item>
						<ListGroup.Item
							action
							variant="success"></ListGroup.Item>
						<ListGroup.Item
							action
							variant="dark"></ListGroup.Item>
					</ListGroup>
				</Offcanvas.Body>
			</Offcanvas>
		</Navbar>
	);
}
