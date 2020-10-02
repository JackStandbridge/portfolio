import { createSlice } from '@reduxjs/toolkit';
import initialState from './initial';
import * as reducers from './reducers';

const colourflood = createSlice({
	name: 'colourflood',
	initialState,
	reducers: {
		newBoard: reducers.newBoard,
		clickSquare: reducers.clickSquare,
	}
});

export default colourflood.reducer;

export const {
	newBoard,
	clickSquare,
} = colourflood.actions;