import startPlaying from './startPlaying';
import setShowAnswers from './setShowAnswers';
import wipeGuesses from './wipeGuesses';

const newGame = (state, { payload }) => {
	state.letters = payload.letters;
	state.answers = payload.answers;
	startPlaying(state);
	setShowAnswers(state, { payload: false });
	wipeGuesses(state);
};

export default newGame;