import { State } from '../initial';
import { formatWord, getAnswers } from '../../../utils';
import allWords from '../allWords.json';
import wipeGuesses from './wipeGuesses';
import startPlaying from './startPlaying';
import setShowAnswers from './setShowAnswers';
import { PayloadAction } from '@reduxjs/toolkit';

const defineWord = (state: State, { payload }: PayloadAction<string>): void => {
	state.letters = formatWord(payload);
	state.answers = getAnswers(state.letters, allWords);
	setShowAnswers(state, { payload: false, type: 'setShowAnswers' });
	startPlaying(state);
	wipeGuesses(state);
};

export default defineWord;
