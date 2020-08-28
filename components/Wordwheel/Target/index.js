import { useSelector } from 'react-redux'
import Target from './Target';
import { answersSelector, guessesSelector } from '../../../lib/slices/wordwheel/selectors';

const TargetContainer = () => {
	const answers = useSelector(answersSelector);
	const guesses = useSelector(guessesSelector);

	const average = Math.floor(answers.length * 0.5);
	const good = Math.floor(answers.length * 0.6);
	const excellent = Math.floor(answers.length * 0.75);
	const guessed = guesses.length;

	const targets = [
		{
			name: 'Average',
			value: average,
			attained: guessed && guessed >= average,
		},
		{
			name: 'Good',
			value: good,
			attained: guessed && guessed >= good,
		},
		{
			name: 'Excellent',
			value: excellent,
			attained: guessed && guessed >= excellent,
		},
	];

	return (
		<Target
			guessed={ guessed }
			targets={ targets }
			total={ answers.length }
		/>
	);
};

export default TargetContainer;