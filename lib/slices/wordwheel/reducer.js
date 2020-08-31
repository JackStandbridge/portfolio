import { createSlice } from '@reduxjs/toolkit';
import initialState from './initial';

const getReducer = name => require(`./reducers/${ name }`).default;

const slice = createSlice({
	name: 'wordwheel',
	initialState,
	reducers: {
		newGame: getReducer('newGame'),
		userTyped: getReducer('userTyped'),
		storeGame: getReducer('storeGame'),
		moveLetter: getReducer('moveLetter'),
		defineWord: getReducer('defineWord'),
		setWordInfo: getReducer('setWordInfo'),
		stopPlaying: getReducer('stopPlaying'),
		deleteGuess: getReducer('deleteGuess'),
		startPlaying: getReducer('startPlaying'),
		toggleLetter: getReducer('toggleLetter'),
		toggleAnswers: getReducer('toggleAnswers'),
		setShowAnswers: getReducer('setShowAnswers'),
		deselectLetter: getReducer('deselectLetter'),
	}
});

export default slice.reducer;

export const {
	newGame,
	userTyped,
	storeGame,
	moveLetter,
	defineWord,
	setWordInfo,
	stopPlaying,
	deleteGuess,
	startPlaying,
	toggleLetter,
	toggleAnswers,
	setShowAnswers,
	deselectLetter,
} = slice.actions;
