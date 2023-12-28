import { FC, ReactNode, useEffect } from 'react';
import Modal from './Modal';

interface Props {
	show: boolean;
	handleClose: () => void;
	children: ReactNode;
}

const ConnectedModal = ({ children, handleClose, show }: Props) => {
	useEffect(() => {
		const keyListener = (e: KeyboardEvent): void => {
			if (e.key === 'Escape') {
				handleClose();
			}
		};

		document.addEventListener('keydown', keyListener);

		return (): void => {
			document.removeEventListener('keydown', keyListener);
		};
	}, []);

	const closeModal = (e: React.MouseEvent): void => {
		if (e.currentTarget === e.target) {
			handleClose();
		}
	};

	return !show ? null : (
		<Modal show={show} handleClose={closeModal}>
			{children}
		</Modal>
	);
};

export default ConnectedModal;
