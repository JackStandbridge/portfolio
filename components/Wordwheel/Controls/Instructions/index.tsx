import { FC, useState, useEffect, useCallback } from 'react';
import Instructions from './Instructions';

const ConnectedInstructions: FC = () => {
	const [showModal, setShowModal] = useState(true);

	const handleClick = useCallback(() => {
		setShowModal(showModal => !showModal);
	}, [setShowModal]);

	const handleClose = () => {
		setShowModal(false);
	};

	useEffect(() => {
		const keyListener = (e: KeyboardEvent): void => {
			if (e.key.length === 1) {
				setShowModal(false);
			}
		};

		document.addEventListener('keydown', keyListener);

		return (): void => {
			document.removeEventListener('keydown', keyListener);
		};

	}, [setShowModal]);

	const buttonTitle = {
		start: '',
		keyLetter: 'I',
		end: 'nstructions',
	};

	return (
		<Instructions
			handleClick={ handleClick }
			handleClose={ handleClose }
			showModal={ showModal }
			buttonTitle={ buttonTitle }
		/>
	);
};

export default ConnectedInstructions;