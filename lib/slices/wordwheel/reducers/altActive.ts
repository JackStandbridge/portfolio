import { State } from '../initial';
import { PayloadAction } from '@reduxjs/toolkit';

const altActive = (state: State, { payload }: PayloadAction<boolean>): void => {
	state.altActive = payload;
};

export default altActive;
