import { State } from '../initial';
import { PayloadAction } from '@reduxjs/toolkit';

const setShowAnswers = (
	state: State,
	{ payload }: PayloadAction<boolean>
): void => {
	state.showAnswers = payload;
};

export default setShowAnswers;
