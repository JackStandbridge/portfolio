import { Letters } from '../slices/wordwheel/initial';
import { formatWord } from './';

const newWord = (nineLetterWords: string[]): Letters => {
	const index = Math.floor(Math.random() * nineLetterWords.length);
	const word = nineLetterWords[index]
		.split('')
		.sort(() => (Math.random() < 0.5 ? -1 : 1))
		.join('');

	return formatWord(word);
};

export default newWord;
