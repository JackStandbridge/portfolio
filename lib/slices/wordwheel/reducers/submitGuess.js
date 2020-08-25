import deselectAll from './deselectAll';
import { validateGuess } from '../../../utils';

const submitGuess = state => {

	const userGuess = state.letters.raisedOrder
		.map(id => state.letters.entities[id].letter)
		.join('');

	const letters = state.letters.ids.map(id => state.letters.entities[id].letter);

	const isValidGuess = validateGuess(userGuess, letters);

	if (isValidGuess) {
		state.guesses.push(userGuess);
		deselectAll(state);
	}

}

export default submitGuess;