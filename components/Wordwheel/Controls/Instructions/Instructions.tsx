import { FC } from 'react';

import Button from '../Button';
import Modal from '../../Modal';

import styles from './Instructions.module.scss';

interface Props {
	handleClick: () => void,
	handleClose: () => void,
	showModal: boolean,
	buttonTitle: {
		start: string,
		keyLetter: string,
		end: string,
	}
}

const Instructions: FC<Props> = ({
	handleClick,
	handleClose,
	showModal,
	buttonTitle,
}) => (
	<>
		<Button
			handleClick={ handleClick }
			instructions={ `Alt + ${ buttonTitle.keyLetter.toUpperCase() }` }
			title={ buttonTitle }
		/>
		<Modal
			show={ showModal }
			handleClose={ handleClose }
		>
			<article className={ styles.instructions }>
				<h2>Instructions</h2>
				<p>Make as many words as you can using the letters! All words must use the middle (yellow) letter</p>
				<p>Type or click a letter to select it, and press ENTER to submit your word. You can rearrange the letters by dragging them, or holding SHIFT and using the ARROW keys.</p>
			</article>
		</Modal>
	</>
);


export default Instructions;