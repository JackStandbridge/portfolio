import { State } from '../initial';
import { PayloadAction } from '@reduxjs/toolkit';

interface Action {
	id: number;
	toPosition: number;
}

const moveLetter = (state: State, { payload }: PayloadAction<Action>): void => {
	const { id, toPosition } = payload;

	const index = state.letters.baseOrder.indexOf(id);
	state.letters.baseOrder.splice(index, 1);
	state.letters.baseOrder.splice(toPosition, 0, id);
};

export default moveLetter;
