import styles from './Controls.module.scss';

const Controls = ({
	handleShowAnswers,
	handleNewGame,
}) => {
	return (
		<section className={ styles.section }>

			<div className={ styles.instructions }>
				<small>Cmd + Shift + S</small>
				<button
					className={ styles.button }
					onClick={ handleNewGame }
					title='Cmd + Shift + S'
				>
					New Game
			</button>
			</div>

			<div className={ styles.instructions }>
				<small>Cmd + Shift + A</small>
				<button
					className={ styles.button }
					onClick={ handleShowAnswers }
					title='Cmd + Shift + A'
				>
					Show Answers
			</button>
			</div>

		</section>
	);
};

export default Controls;