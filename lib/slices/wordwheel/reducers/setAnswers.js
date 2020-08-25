import allWords from '../allWords.json';
import { validateGuess } from '../../../utils';

const setAnswers = state => {
	state.answers = allWords.filter(word => validateGuess(
		word,
		state.letters.ids.map(id => state.letters.entities[id].letter)
	));
};

export default setAnswers;