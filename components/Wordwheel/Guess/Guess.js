import styles from './Guess.module.scss';

const Guess = ({ word, handleClick, guessedByUser, handleDelete }) => (
	<button
		className={ guessedByUser ? styles.guess : styles.answer }
		onClick={ handleClick }
		onContextMenu={ handleDelete }
	>
		{ word }
	</button>
);

export default Guess;