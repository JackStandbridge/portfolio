import { createSlice } from '@reduxjs/toolkit';
import initialState from './initial';
import * as reducers from './reducers';

const sightreading = createSlice({
	name: 'sightreading',
	initialState,
	reducers: {
		setDuration: reducers.setDurations,
	}
});

export default sightreading.reducer;

export const {
	setDuration,
} = sightreading.actions;