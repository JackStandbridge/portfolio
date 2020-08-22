import { createSlice } from '@reduxjs/toolkit';
import initialState from './initial';

const slice = createSlice({
	name: 'wordwheel',
	initialState,
	reducers: {
		type: require('./reducers/type').default,
		newGame: require('./reducers/newGame').default,
	}
});

export default slice.reducer;

export const {
	newGame,
	type,
} = slice.actions;