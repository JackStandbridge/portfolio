import { FC, useState } from 'react';
import Instructions from './Instructions';

const ConnectedInstructions: FC = () => {
	const [showModal, setShowModal] = useState(true);

	const handleClick = () => {
		setShowModal(!showModal);
	};

	const handleClose = () => {
		setShowModal(false);
	};

	return (
		<Instructions
			handleClick={ handleClick }
			handleClose={ handleClose }
			showModal={ showModal }
		/>
	);
};

export default ConnectedInstructions;