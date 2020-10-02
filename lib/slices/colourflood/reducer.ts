import { createSlice } from '@reduxjs/toolkit';
import initialState from './initial';
import * as reducers from './reducers';

const colourflood = createSlice({
	name: 'colourflood',
	initialState,
	reducers: {
		newBoard: reducers.newBoard,
		setColour: reducers.setColour,
	}
});

export default colourflood.reducer;

export const {
	newBoard,
	setColour,
} = colourflood.actions;