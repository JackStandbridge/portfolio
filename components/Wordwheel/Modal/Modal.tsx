import { FC } from 'react';

import styles from './Modal.module.scss';

interface Props {
	show: boolean,
	handleClose: (e: React.MouseEvent<Element, MouseEvent>) => void,
}

const Modal: FC<Props> = ({ children, handleClose }) => {
	return (
		<div
			className={ styles.modalBacking }
			onClick={ handleClose }
		>
			<section className={ styles.modal }>
				<button className={ styles.button } onClick={ handleClose }>
					<div className={ styles.visuallyHidden }>Close</div>
				</button>
				{ children }
			</section>
		</div>
	);
};

export default Modal;