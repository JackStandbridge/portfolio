import styles from './Controls.module.scss';

const Controls = ({
	handleShowAnswers,
	handleNewGame,
}) => {
	return (
		<section className={ styles.section }>

			<div className={ styles.instructions }>
				<span>Cmd + B</span>
				<button
					className={ styles.button }
					onClick={ handleNewGame }
					title='Cmd + B'
				>
					New Game
			</button>
			</div>

			<div className={ styles.instructions }>
				<span>Cmd + K</span>
				<button
					className={ styles.button }
					onClick={ handleShowAnswers }
					title='Cmd + K'
				>
					Show Answers
			</button>
			</div>

		</section>
	);
};

export default Controls;