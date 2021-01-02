import { FC } from 'react';
import styles from './Guess.module.scss';

interface Props {
	word: string
	handleClick: (e: React.MouseEvent) => void
	guessedByUser: boolean
	handleDelete: (e: React.MouseEvent) => void
	handleKeyDown: (e: React.KeyboardEvent) => void
	handleBlur: (e: React.FocusEvent) => void
}

const Guess: FC<Props> = ({
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