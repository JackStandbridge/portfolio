import { validateGuess } from './';

const getAnswers = (letters, allWords) => {
	return allWords.filter(word => validateGuess(
		word,
		letters.ids.map(id => letters.entities[id].letter)
	));
};

export default getAnswers