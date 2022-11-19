import { createSlice } from '@reduxjs/toolkit';
import initialState from './initial';
import * as reducers from './reducers';

const wordwheel = createSlice({
	name: 'wordwheel',
	initialState,
	reducers: {
		undo: reducers.undo,
		newGame: reducers.newGame,
		altActive: reducers.altActive,
		userTyped: reducers.userTyped,
		storeGame: reducers.storeGame,
		moveLetter: reducers.moveLetter,
		defineWord: reducers.defineWord,
		submitGuess: reducers.submitGuess,
		setWordInfo: reducers.setWordInfo,
		stopPlaying: reducers.stopPlaying,
		deleteGuess: reducers.deleteGuess,
		startPlaying: reducers.startPlaying,
		toggleLetter: reducers.toggleLetter,
		setFirstVisit: reducers.setFirstVisit,
		toggleAnswers: reducers.toggleAnswers,
		setShowAnswers: reducers.setShowAnswers,
		deselectLetter: reducers.deselectLetter,
		resequenceLetters: reducers.resequenceLetters,
		rehydrateFromCache: reducers.rehydrateFromCache,
	},
});

export default wordwheel.reducer;

export const {
	undo,
	newGame,
	altActive,
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
	setFirstVisit,
	toggleAnswers,
	setShowAnswers,
	deselectLetter,
	resequenceLetters,
	rehydrateFromCache,
} = wordwheel.actions;
