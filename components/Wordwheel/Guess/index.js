import { useDispatch } from 'react-redux';

import Guess from './Guess';

import { deleteGuess } from '../../../lib/slices/wordwheel/reducer';

const GuessContainer = ({ word, guessedByUser, handleClick }) => {
	const dispatch = useDispatch();

	const handleDelete = e => {
		e.preventDefault();
		dispatch(deleteGuess(word));
	};

	const handleKeyDown = e => {
		if (e.key === 'Backspace') {
			handleDelete(e);
		}

		if (e.key === 'Enter') {
			e.nativeEvent.stopImmediatePropagation();
			window.eventJack = e;
		}
	};

	return (
		<Guess
			word={ word }
			guessedByUser={ guessedByUser }
			handleClick={ handleClick }
			handleDelete={ handleDelete }
			handleKeyDown={ handleKeyDown }
		/>
	);
}

export default GuessContainer;