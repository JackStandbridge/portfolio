import startPlaying from './startPlaying';
import setAnswers from './setAnswers';
import newWord from './newWord';

const newGame = state => {
	newWord(state);
	setAnswers(state);
	startPlaying(state);
};

export default newGame;