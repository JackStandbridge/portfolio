import { State } from '../initial';
import { PayloadAction } from '@reduxjs/toolkit';

const resequenceLetters = (
	state: State,
	{ payload }: PayloadAction<number[]>
): void => {
	state.letters.baseOrder = payload;
};

export default resequenceLetters;
