import { FC } from 'react';

import Button from '../Button';
import Modal from '../../Modal';

import styles from './Instructions.module.scss';

interface Props {
	handleClick: (e: React.MouseEvent) => void,
	handleClose: () => void,
	showModal: boolean,
}

const Instructions: FC<Props> = ({
	handleClick,
	handleClose,
	showModal,
}) => (
	<>
		<Button
			title='Instructions'
			handleClick={ handleClick }
			instructions=''
		/>
		<Modal
			show={ showModal }
			handleClose={ handleClose }
		>
			<article className={ styles.instructions }>
				<h2>Instructions</h2>
				<p>Make as many words as you can using the letters!</p>
				<p>Type or click a letter to select it, and press enter to submit your word.</p>
				<p>You can rearrange the letters by dragging them, or holding SHIFT and using the ARROW keys.</p>
			</article>
		</Modal>
	</>
);


export default Instructions;