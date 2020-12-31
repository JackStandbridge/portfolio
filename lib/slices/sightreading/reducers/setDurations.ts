import { State } from '../initial';
import { Duration } from '../types';
import { PayloadAction } from '@reduxjs/toolkit';

const setDurations = (state: State, action: PayloadAction<Duration>): void => {
	if (state.durations.length === 1 && state.durations[0] === action.payload) {
		return;
	}

	if (!state.durations.includes(action.payload)) {
		state.durations.push(action.payload);
	} else {
		state.durations = state.durations.filter(duration => duration !== action.payload);
	}

	state.durations.sort((a, b) => a > b ? 1 : -1);
};

export default setDurations;