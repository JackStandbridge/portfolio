import { FC } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { submitGuess } from '../../../lib/slices/wordwheel/reducer';

const Guess: FC = () => {
	const dispatch = useDispatch();

	const handleGuess = () => {
		dispatch(submitGuess());
	};

	const title = {
		start: 'Guess (',
		keyLetter: 'Enter',
		end: ')',
	};

	return (
		<Button
			handleClick={ handleGuess }
			instructions={ title.keyLetter }
			title={ title }
		/>
	);
};

export default Guess;