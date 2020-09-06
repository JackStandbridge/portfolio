import { formatWord, getAnswers } from '../../../utils';
import allWords from '../allWords.json';
import wipeGuesses from './wipeGuesses';
import startPlaying from './startPlaying';

const defineWord = (state, { payload }) => {
	state.letters = formatWord(payload);
	state.answers = getAnswers(state.letters, allWords);
	startPlaying(state);
	wipeGuesses(state);
};

export default defineWord;