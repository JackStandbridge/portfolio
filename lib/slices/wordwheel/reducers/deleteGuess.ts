import { State } from '../initial';
import { PayloadAction } from '@reduxjs/toolkit';

const deleteGuess = (
	state: State,
	{ payload }: PayloadAction<string>
): void => {
	const index = state.guesses.indexOf(payload);

	if (index !== -1) {
		state.guesses.splice(index, 1);
	}
};

export default deleteGuess;
