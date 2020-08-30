import styles from './Guess.module.scss';

const Guess = ({
	word,
	handleClick,
	guessedByUser,
	handleDelete,
	handleKeyDown,
	handleBlur,
}) => (
	<button
		className={ guessedByUser ? styles.guess : styles.answer }
		onClick={ handleClick }
		onContextMenu={ handleDelete }
		onKeyDown={ handleKeyDown }
		onBlur={ handleBlur }
	>
		{ word }
	</button>
);

export default Guess;