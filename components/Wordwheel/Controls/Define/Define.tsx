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
};

const Define: FC<Props> = ({
	handleDefineWord,
	modalIsShown,
	handleClose,
	handleSubmit,
	handleChange,
	input,
	modalRef,
}) => (
	<>
		<Button
			handleClick={ handleDefineWord }
			instructions='Cmd + G'
			title='Define'
		/>
		<Modal
			show={ modalIsShown }
			handleClose={ handleClose }
		>
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