import styles from './Guess.module.scss';

const Guess = ({
	word,
	handleClick,
	guessedByUser,
	handleDelete,
	handleKeyDown
}) => (
	<button
		className={ guessedByUser ? styles.guess : styles.answer }
		onClick={ handleClick }
		onContextMenu={ handleDelete }
		onKeyDown={ handleKeyDown }
	>
		{ word }
	</button>
);

export default Guess;