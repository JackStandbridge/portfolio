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
			>
				New Game
			</button>

			<button
				className={ styles.button }
				onClick={ handleShowAnswers }
			>
				Show Answers
			</button>

		</section>
	);
};

export default Controls;