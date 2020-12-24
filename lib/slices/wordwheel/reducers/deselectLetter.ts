import { State } from '../initial';
import { PayloadAction } from '@reduxjs/toolkit';

const deselectLetter = (state: State, { payload }: PayloadAction<number>): void => {
	state.letters.entities[payload].selected = false;

	const index = state.letters.raisedOrder.indexOf(payload);
	state.letters.raisedOrder.splice(index, 1);
};

export default deselectLetter;