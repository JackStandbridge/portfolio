import allWords from '../allWords.json';
import { isValidGuess } from '../../../utils';

const setAnswers = state => {
	console.log(JSON.parse(JSON.stringify(state)));
	state.answers = allWords.filter(word => isValidGuess(
		word,
		state.letters.ids.map(id => state.letters.entities[id].letter)
	));
};

export default setAnswers;