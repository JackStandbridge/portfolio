import { validateGuess } from './';

interface Letters {
	ids: number[]
	entities: {
		letter: string
	}[]
}

const getAnswers = (letters: Letters, allWords: string[]) => {
	return allWords.filter(word => validateGuess(
		word,
		letters.ids.map(id => letters.entities[id].letter)
	));
};

export default getAnswers