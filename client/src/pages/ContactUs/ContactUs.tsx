import './contactUs.scss';
import { useState } from 'react';
import { useForm } from '@formspree/react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type contactObj = {
	name: string;
	email: string;
	message: string;
};

export default function ContactUs() {
	const [contactObj, setContactObj] = useState<contactObj>({
		name: '',
		email: '',
		message: '',
	});
	const [state, handleSubmit] = useForm('xayzbwjz');
	const [goodAlertShow, setGoodAlertShow] = useState(false);

	if (state.succeeded) {
		return (
			<Modal
				size="sm"
				show={goodAlertShow}
				onHide={() => {
					setGoodAlertShow(false);
					handleSubmit(false);
				}}
				aria-labelledby="example-modal-sizes-title-sm">
				<Modal.Header closeButton>
					<Modal.Title id="example-modal-sizes-title-sm">Orquiá Cosméticos</Modal.Title>
				</Modal.Header>
				<Modal.Body>Recebemos sua mensagem e entraremos em contato.</Modal.Body>
			</Modal>
		);
	}
	return (
		<main className="contact-us">
			<Form
				onSubmit={async (event) => {
					await handleSubmit(event);
					setGoodAlertShow(true);
				}}>
				<Form.Group
					className="mb-3 mt-3"
					controlId="exampleForm.ControlInput1">
					<Form.Label>Nome</Form.Label>
					<Form.Control
						type="text"
						placeholder="Seu nome"
						name="name"
						required
						onChange={(event) =>
							setContactObj({
								...contactObj,
								name: event.target.value,
							})
						}
					/>
				</Form.Group>
				<Form.Group
					className="mb-3"
					controlId="exampleForm.ControlInput2">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						name="email"
						placeholder="email@exemplo.com"
						required
						onChange={(event) =>
							setContactObj({
								...contactObj,
								email: event.target.value,
							})
						}
					/>
				</Form.Group>
				<Form.Group
					className="mb-3"
					controlId="exampleForm.ControlTextarea1">
					<Form.Label>Mensagem</Form.Label>
					<Form.Control
						as="textarea"
						name="message"
						rows={10}
						required
						onChange={(event) =>
							setContactObj({
								...contactObj,
								message: event.target.value,
							})
						}
					/>
				</Form.Group>
				<div className="mb-3 contacts">
					<Button
						type="submit"
						disabled={state.submitting}>
						Enviar
					</Button>
					<a
						href="mailto: orquiacosmeticos@gmail.com"
						target={'_blank'}>
						<img
							src="/email-icon.svg"
							alt="Envie um email para Orquia"
						/>
					</a>
					<a
						href="https://www.whatsapp.com/catalog/5516991645665/?app_absent=0"
						target={'_blank'}>
						<img
							className="mt-1 ms-1"
							src="/whatsapp-icon.svg"
							alt="Orquia WhatssApp"
						/>
					</a>
					<a
						href="https://instagram.com/orquia.cosmeticos"
						target={'_blank'}>
						<img
							src="/instagram-icon.svg"
							alt="Orquia Instagram Profile"
						/>
					</a>
				</div>
			</Form>
		</main>
	);
}
