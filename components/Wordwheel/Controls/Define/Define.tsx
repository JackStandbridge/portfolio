import { FC } from 'react';
import Button from '../Button';
import Modal from '../../Modal';

import styles from './Define.module.scss';

interface Props {
	handleDefineWord: () => void,
	modalIsShown: boolean,
	handleClose: () => void,
	handleSubmit: (e: React.FormEvent) => void,
	handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => void,
	input: string,
	modalRef: React.Ref<HTMLInputElement>,
	buttonTitle: {
		start: string,
		keyLetter: string,
		end: string,
	}
};

const Define: FC<Props> = ({
	handleDefineWord,
	modalIsShown,
	handleClose,
	handleSubmit,
	handleChange,
	input,
	modalRef,
	buttonTitle,
}) => (
	<>
		<Button
			handleClick={ handleDefineWord }
			instructions={ `Alt + ${ buttonTitle.keyLetter.toUpperCase() }` }
			title={ buttonTitle }
		/>
		<Modal
			show={ modalIsShown }
			handleClose={ handleClose }
		>
			<p className={ styles.instructions }>Type your word here</p>
			<form onSubmit={ handleSubmit }>
				<input
					ref={ modalRef }
					className={ styles.input }
					onChange={ handleChange }
					onKeyDown={ handleChange }
					value={ input }
				/>
			</form>
		</Modal>
	</>
);


export default Define;