import { FC } from 'react';
import { useSelector } from 'react-redux'
import Header from './Header';
import { answersSelector, guessesSelector } from '../../../lib/slices/wordwheel/selectors';

const ConnectedHeader: FC = () => {
	const answers = Object.keys(useSelector(answersSelector));
	const guesses = Object.keys(useSelector(guessesSelector));

	const average = Math.floor(answers.length * 0.5);
	const good = Math.floor(answers.length * 0.6);
	const excellent = Math.floor(answers.length * 0.75);
	const guessed = guesses.length;

	const targets = [
		{
			name: 'Average',
			value: average,
			attained: guessed ? guessed >= average : false,
		},
		{
			name: 'Good',
			value: good,
			attained: guessed ? guessed >= good : false,
		},
		{
			name: 'Excellent',
			value: excellent,
			attained: guessed ? guessed >= excellent : false,
		},
	];

	return (
		<Header
			guessed={ guessed }
			targets={ targets }
			total={ answers.length }
		/>
	);
};

export default ConnectedHeader;