import { FC } from 'react';
import { useDispatch } from 'react-redux';

import Guess from './Guess';

import { deleteGuess } from '../../../lib/slices/wordwheel/reducer';

interface Props {
	word: string
	guessedByUser: boolean
	handleClick: (e: React.MouseEvent) => void
	handleBlur: (e: React.FocusEvent) => void
}

const GuessContainer: FC<Props> = ({ word, guessedByUser, handleClick, handleBlur }) => {
	const dispatch = useDispatch();

	const handleDelete = (e: React.MouseEvent|React.KeyboardEvent) => {
		e.preventDefault();
		dispatch(deleteGuess(word));
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Backspace') {
			handleDelete(e);
		}

		if (e.key === 'Enter') {
			e.nativeEvent.stopImmediatePropagation();
		}
	};

	return (
		<Guess
			word={ word }
			guessedByUser={ guessedByUser }
			handleClick={ handleClick }
			handleDelete={ handleDelete }
			handleKeyDown={ handleKeyDown }
			handleBlur={ handleBlur }
		/>
	);
}

export default GuessContainer;