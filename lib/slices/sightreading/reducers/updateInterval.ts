import { State } from '../initial';
import { PayloadAction } from '@reduxjs/toolkit';
import { clamp } from '../../../utils';

const updateInterval = (
	state: State,
	action: PayloadAction<number | ''>
): void => {
	if (typeof action.payload === 'number') {
		state.maxInterval = clamp(1, 24, action.payload);
	} else {
		state.maxInterval = action.payload;
	}
};

export default updateInterval;
