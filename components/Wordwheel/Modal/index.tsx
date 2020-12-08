import { FC, useEffect } from 'react';
import Modal from './Modal';

interface Props {
	show: boolean,
	handleClose: () => void,
}

const ConnectedModal: FC<Props> = ({ children, handleClose, show }) => {
	useEffect(() => {
		const keyListener = (e: KeyboardEvent): void => {
			if (e.key === 'Escape') {
				handleClose();
			}
		};

		document.addEventListener('keydown', keyListener);

		return (): void => {
			document.removeEventListener('keydown', keyListener);
		}
	}, []);

	const closeModal = (e: React.MouseEvent): void => {
		if (e.currentTarget === e.target) {
			handleClose();
		}
	};

	return !show ? null : (
		<Modal
			show={ show }
			handleClose={ closeModal }
		>
			{ children }
		</Modal>
	);
};

export default ConnectedModal;