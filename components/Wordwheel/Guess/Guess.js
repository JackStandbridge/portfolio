import styles from './Guess.module.scss';

const Guess = ({ word, handleClick, guessedByUser }) => (
	<button
	className={ styles.button }
		className={ guessedByUser ? styles.guess : styles.answer }
		onClick={ handleClick }
	>
		{ word }
	</button>
);

export default Guess;