import nineLetterWords from '../nineLetterWords.json';
import allWords from '../allWords.json';
import { isValidGuess } from '../../../utils';

const newWord = state => {
	const index = Math.floor(Math.random() * nineLetterWords.length);
	const word = nineLetterWords[index]
		.split('')
		.sort(() => Math.random() < 0.5 ? -1 : 1)
		.join('');

	state.letters.middleLetter = word[0];
	state.letters.otherLetters = word.slice(1,).split('');
};

const setAnswers = state => {
	state.answers = allWords.filter(word => isValidGuess(
		word,
		state.letters.middleLetter,
		state.letters.otherLetters
	));
};

const startPlaying = state => {
	state.playing = true;
};

const newGame = state => {
	newWord(state);
	setAnswers(state);
	startPlaying(state);
};

export default newGame;