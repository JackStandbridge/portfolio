import { createSlice } from '@reduxjs/toolkit';
import initialState from './initial';

const getReducer = name => require(`./reducers/${ name }`).default;

const slice = createSlice({
	name: 'wordwheel',
	initialState,
	reducers: {
		undo: getReducer('undo'),
		newGame: getReducer('newGame'),
		userTyped: getReducer('userTyped'),
		storeGame: getReducer('storeGame'),
		moveLetter: getReducer('moveLetter'),
		defineWord: getReducer('defineWord'),
		submitGuess: getReducer('submitGuess'),
		setWordInfo: getReducer('setWordInfo'),
		stopPlaying: getReducer('stopPlaying'),
		deleteGuess: getReducer('deleteGuess'),
		startPlaying: getReducer('startPlaying'),
		toggleLetter: getReducer('toggleLetter'),
		toggleAnswers: getReducer('toggleAnswers'),
		setShowAnswers: getReducer('setShowAnswers'),
		deselectLetter: getReducer('deselectLetter'),
		resequenceLetters: getReducer('resequenceLetters'),
	}
});

export default slice.reducer;

export const {
	undo,
	newGame,
	userTyped,
	storeGame,
	moveLetter,
	defineWord,
	submitGuess,
	setWordInfo,
	stopPlaying,
	deleteGuess,
	startPlaying,
	toggleLetter,
	toggleAnswers,
	setShowAnswers,
	deselectLetter,
	resequenceLetters,
} = slice.actions;
