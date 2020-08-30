import styles from './Controls.module.scss';

const Controls = ({
	handleShowAnswers,
	handleNewGame,
}) => {
	return (
		<section className={ styles.section }>

			<button
				className={ styles.button }
				onClick={ handleNewGame }
				title='Cmd + Shift + S'
				>
				New Game
			</button>

			<button
				className={ styles.button }
				onClick={ handleShowAnswers }
				title='Cmd + Shift + A'
			>
				Show Answers
			</button>

		</section>
	);
};

export default Controls;