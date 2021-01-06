import { createSlice } from '@reduxjs/toolkit';
import initialState from './initial';
import * as reducers from './reducers';

const sightreading = createSlice({
	name: 'sightreading',
	initialState,
	reducers: {
		setDuration: reducers.setDurations,
		updateRange: reducers.updateRange,
		updateInterval: reducers.updateInterval,
		rehydrateFromCache: reducers.rehydrateFromCache,
	}
});

export default sightreading.reducer;

export const {
	setDuration,
	updateRange,
	updateInterval,
	rehydrateFromCache,
} = sightreading.actions;