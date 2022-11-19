import { validateGuess } from './';
import { Entities } from '../slices/wordwheel/initial';

interface Letters {
	ids: number[];
	entities: Entities;
}

const getAnswers = (letters: Letters, allWords: string[]): string[] => {
	return allWords.filter((word) =>
		validateGuess(
			word,
			letters.ids.map((id) => letters.entities[id].letter)
		)
	);
};

export default getAnswers;
