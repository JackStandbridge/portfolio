import { createSlice } from '@reduxjs/toolkit';
import initialState from './initial';

const slice = createSlice({
	name: 'wordwheel',
	initialState,
	reducers: {
		toggleLetter: require('./reducers/toggleLetter').default,
		deselectLetter: require('./reducers/deselectLetter').default,
		newGame: require('./reducers/newGame').default,
		type: require('./reducers/type').default,
	}
});

export default slice.reducer;

export const {
	toggleLetter,
	deselectLetter,
	newGame,
	type,
} = slice.actions;

export const letterSelector = ({ wordwheel: { letters } }) => letters;
export const letterIdsSelector = ({ wordwheel: { letters: { ids } } }) => ids;
export const letterEntitiesSelector = ({ wordwheel: { letters: { entities } } }) => entities;