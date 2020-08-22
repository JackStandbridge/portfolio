import nineLetterWords from '../nineLetterWords.json';
import allWords from '../allWords.json';
import { isValidGuess } from '../../../utils';

const newWord = state => {
	const index = Math.floor(Math.random() * nineLetterWords.length);
	const word = nineLetterWords[index]
		.split('')
		.sort(() => Math.random() < 0.5 ? -1 : 1)
		.join('');

	state.letters = {
		entities: word
			.split('')
			.map((letter, i) => (
				{
					id: i,
					letter,
					selected: false,
					basePosition: i,
					raisedPosition: null,
				}
			))
			.reduce((letters, letter) => (
				{
					...letters,
					[letter.id]: letter
				}
			), {}),

		ids: [0, 1, 2, 3, 4, 5, 6, 7, 8]
	};
};

const setAnswers = state => {
	console.log(JSON.parse(JSON.stringify(state)));
	state.answers = allWords.filter(word => isValidGuess(
		word,
		state.letters.ids.map(id => state.letters.entities[id].letter)
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