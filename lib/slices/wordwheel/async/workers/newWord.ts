import nineLetterWords from '../../nineLetterWords.json';
import allWords from '../../allWords.json';
import { newWord, getAnswers } from '../../../../utils';

addEventListener('message', (): void => {
	const letters = newWord(nineLetterWords);
	const answers = getAnswers(letters, allWords);

	postMessage({
		letters,
		answers,
	});
});