import { createSlice } from '@reduxjs/toolkit';
import initialState from './initial';

const slice = createSlice({
	name: 'wordwheel',
	initialState,
	reducers: {
		toggleLetter: require('./reducers/toggleLetter').default,
		deselectLetter: require('./reducers/deselectLetter').default,
		newGame: require('./reducers/newGame').default,
		userTyped: require('./reducers/userTyped').default,
	}
});

export default slice.reducer;

export const {
	toggleLetter,
	deselectLetter,
	newGame,
	userTyped,
} = slice.actions;

export const letterSelector =
	state => state.wordwheel.letters;

export const letterIdsSelector =
	state => state.wordwheel.letters.ids;

export const letterEntitiesSelector =
	state => state.wordwheel.letters.entities;

export const positionSelector = ({ wordwheel: { letters } }, id) => ({
	raisedPosition: letters.raisedOrder.indexOf(id),
	basePosition: letters.baseOrder.indexOf(id),
});

export const guessesSelector = ({ wordwheel }) => wordwheel.guesses;