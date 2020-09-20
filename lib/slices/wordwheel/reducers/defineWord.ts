import { State } from '../initial';
import { formatWord, getAnswers } from '../../../utils';
import allWords from '../allWords.json';
import wipeGuesses from './wipeGuesses';
import startPlaying from './startPlaying';
import setShowAnswers from './setShowAnswers';

interface Action {
	payload: string
}

const defineWord = (state: State, { payload }: Action): void => {
	state.letters = formatWord(payload);
	state.answers = getAnswers(state.letters, allWords);
	setShowAnswers(state, { payload: false });
	startPlaying(state);
	wipeGuesses(state);
};

export default defineWord;