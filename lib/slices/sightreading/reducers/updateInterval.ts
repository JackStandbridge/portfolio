import { State } from '../initial';
import { PayloadAction } from '@reduxjs/toolkit';
import { clamp } from '../../../utils';

const updateInterval = (state: State, action: PayloadAction<number>): void => {
	state.maxInterval = clamp(1, 24, action.payload);
};

export default updateInterval;