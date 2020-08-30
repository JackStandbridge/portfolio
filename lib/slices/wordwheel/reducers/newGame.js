import initial from '../initial';
import startPlaying from './startPlaying';
import setShowAnswers from './setShowAnswers';
import wipeGuesses from './wipeGuesses';

const newGame = state => {
	state.letters = state.nextGame.letters;
	state.answers = state.nextGame.answers;

	state.nextGame.letters = initial.nextGame.letters;
	state.nextGame.answers = initial.nextGame.answers;

	startPlaying(state);
	setShowAnswers(state, { payload: false });
	wipeGuesses(state);
};

export default newGame;