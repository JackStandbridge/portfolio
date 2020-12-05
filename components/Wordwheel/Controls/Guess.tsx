import { FC } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { submitGuess } from '../../../lib/slices/wordwheel/reducer';

const Guess: FC = () => {
	const dispatch = useDispatch();

	const handleGuess = () => {
		dispatch(submitGuess());
	};

	return (
		<Button
			handleClick={ handleGuess }
			instructions='Enter'
			title='Guess'
		/>
	);
};

export default Guess;