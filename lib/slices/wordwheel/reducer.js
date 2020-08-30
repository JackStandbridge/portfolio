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
		setWordInfo: getReducer('setWordInfo'),
		deleteGuess: getReducer('deleteGuess'),
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
	setWordInfo,
	deleteGuess,
	toggleLetter,
	toggleAnswers,
	setShowAnswers,
	deselectLetter,
} = slice.actions;
