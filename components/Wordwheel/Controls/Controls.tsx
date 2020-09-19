import { FC } from 'react';
import styles from './Controls.module.scss';

interface Props {
	handleShowAnswers: (e: React.MouseEvent) => void
	handleNewGame: (e: React.MouseEvent) => void
	handleDefineWord: (e: React.MouseEvent) => void
	modalIsShown: boolean
	handleChange: (e: React.KeyboardEvent|React.ChangeEvent) => void
	input: string
	handleSubmit: (e: React.FormEvent) => void
	modalRef: React.Ref<HTMLInputElement>
	handleClose: (e: React.MouseEvent) => void
	handleGuess: (e: React.MouseEvent) => void
	handleRandomise: (e: React.MouseEvent) => void
	handleUndo: (e: React.MouseEvent) => void
}

const Controls: FC<Props> = ({
	handleShowAnswers,
	handleNewGame,
	handleDefineWord,
	modalIsShown,
	handleChange,
	input,
	handleSubmit,
	modalRef,
	handleClose,
	handleGuess,
	handleRandomise,
	handleUndo,
}) => {
	return (
		<>
			<section className={ styles.section }>

				<div className={ styles.instructions }>
					<span>Cmd + B</span>
					<button
						className={ styles.button }
						onClick={ handleNewGame }
						title='Cmd + B'
					>
						{ 'New Game' }
					</button>
				</div>

				<div className={ styles.instructions }>
					<span>Cmd + U</span>
					<button
						className={ styles.button }
						onClick={ handleRandomise }
						title='Cmd + U'
					>
						{ 'Randomise' }
					</button>
				</div>

				<div className={ styles.instructions }>
					<span>Cmd + G</span>
					<button
						className={ styles.button }
						onClick={ handleDefineWord }
						title='Cmd + G'
					>
						{ 'Define Word' }
					</button>
				</div>

				<div className={ styles.instructions }>
					<span>Cmd + Z</span>
					<button
						className={ styles.button }
						onClick={ handleUndo }
						title='Cmd + Z'
					>
						{ 'Undo' }
					</button>
				</div>

				<div className={ styles.instructions }>
					<span>Enter</span>
					<button
						className={ styles.button }
						onClick={ handleGuess }
						title='Enter'
					>
						{ 'Guess' }
					</button>
				</div>

				<div className={ styles.instructions }>
					<span>Cmd + K</span>
					<button
						className={ styles.button }
						onClick={ handleShowAnswers }
						title='Cmd + K'
					>
						{ 'Answers' }
					</button>
				</div>

			</section>

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

export default Controls;