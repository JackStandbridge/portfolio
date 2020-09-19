import { State } from '../initial';
import deselectAll from './deselectAll';
import { validateGuess } from '../../../utils';

const submitGuess = (state: State): void => {

	const guess = state.letters.raisedOrder
		.map(id => state.letters.entities[id].letter)
		.join('');

	const letters = state.letters.ids
		.map(id => state.letters.entities[id].letter);

	const isValidGuess = validateGuess(guess, letters);

	if (isValidGuess && !state.guesses.includes(guess)) {
		state.guesses.push(guess);
		deselectAll(state);
	}

};

export default submitGuess;