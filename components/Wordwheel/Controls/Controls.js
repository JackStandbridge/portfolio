import styles from './Controls.module.scss';

const Controls = ({
	handleShowAnswers,
	handleNewGame,
	handleDefineWord,
	showModal,
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

			{ showModal &&
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