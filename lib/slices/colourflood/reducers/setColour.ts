import { State } from '../initial';
import { updateBoard } from './';
import { PayloadAction } from '@reduxjs/toolkit';

const setColour = (state: State, { payload }: PayloadAction<number>): void => {
	if (payload < state.difficulty) {
		state.colour = payload;
	}

	updateBoard(state);
};

export default setColour;
