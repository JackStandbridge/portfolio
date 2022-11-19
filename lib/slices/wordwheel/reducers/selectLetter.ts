import { State } from '../initial';
import { PayloadAction } from '@reduxjs/toolkit';

const selectLetter = (
	state: State,
	{ payload }: PayloadAction<number>
): void => {
	state.letters.entities[payload].selected = true;
	state.letters.raisedOrder.push(payload);
};

export default selectLetter;
