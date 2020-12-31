import { createSlice } from '@reduxjs/toolkit';
import initialState from './initial';
import * as reducers from './reducers';

const sightreading = createSlice({
	name: 'sightreading',
	initialState,
	reducers: {
		setDuration: reducers.setDurations,
		updateInterval: reducers.updateInterval,
		updateRange: reducers.updateRange,
	}
});

export default sightreading.reducer;

export const {
	setDuration,
	updateInterval,
	updateRange,
} = sightreading.actions;