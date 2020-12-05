import { FC } from 'react';
import Button from '../Button';

import styles from './Define.module.scss';

interface Props {
	handleDefineWord: () => void,
	modalIsShown: boolean,
	handleClose: (e: React.MouseEvent) => void,
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
 }) => {
	return (
		<>
			<Button
				handleClick={ handleDefineWord }
				instructions='Cmd + G'
				title='Define'
			/>
			{ modalIsShown &&
				<div
					className={ styles.modalBacking }
					onClick={ handleClose }
				>
					<section className={ styles.modal }>
						<form onSubmit={ handleSubmit }>
							<input
								ref={ modalRef }
								className={ styles.input }
								onChange={ handleChange }
								onKeyDown={ handleChange }
								value={ input }
							/>
						</form>
					</section>
				</div>
			}
		</>
	);
};

export default Define;