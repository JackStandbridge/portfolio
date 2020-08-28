import { useSelector } from 'react-redux'
import Guesses from './Guesses';
import { guessesSelector } from '../../../lib/slices/wordwheel/selectors';

const GuessesContainer = () => {

	/**
	 * Make this data structure
	 * 	{
	 * 		'a': {
	 * 			id: 'a',
	 * 			guesses: ['adder', 'apple'],
	 * 		},
	 * 		'b': {
	 * 			id: 'b',
	 * 			guesses: ['banana', 'boa'],
	 * 		},
	 * 		'c': {
	 * 			id: 'c',
	 * 			guesses: ['cornsnake', 'cranberry'],
	 * 		},
	 * 	}
	 */

	const guesses = [...useSelector(guessesSelector)]
		.sort()
		.reduce((dictionary, guess) => {
			const id = guess[0].toLowerCase();

			if (dictionary[id] === undefined) {
				dictionary[id] = {
					id,
					guesses: [],
				};
			}

			dictionary[id].guesses.push(guess);

			return dictionary;

		}, {});

	return (
		<Guesses guesses={ guesses } />
	);
};

export default GuessesContainer;