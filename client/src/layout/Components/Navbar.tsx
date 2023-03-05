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
								<span className="span-anchor">Início</span>
							</Link>
						</ListGroup.Item>
						<ListGroup.Item
							action
							variant="primary">
							<Link
								to={'/produtos'}
								onClick={handleClose}>
								<span className="span-anchor">Produtos</span>
							</Link>
						</ListGroup.Item>
						<ListGroup.Item
							action
							variant="info">
							<Link
								to={'/sobre-nos'}
								onClick={handleClose}>
								<span className="span-anchor">Sobre nós</span>
							</Link>
						</ListGroup.Item>
						<ListGroup.Item
							action
							variant="warning">
							<Link
								to={'/entre-em-contato'}
								onClick={handleClose}>
								<span className="span-anchor">Entre em contato</span>
							</Link>
						</ListGroup.Item>
					</ListGroup>
				</Offcanvas.Body>
			</Offcanvas>

			<Link to={'/'}>
				<img
					className="orquia-logo"
					src="/orquia.logo.svg"
				/>
			</Link>
		</Navbar>
	);
}
