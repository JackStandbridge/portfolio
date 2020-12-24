import { State } from '../initial';
import moveLetter from './moveLetter';
import { PayloadAction } from '@reduxjs/toolkit';

const moveLetterToEnd = (state: State, { payload }: PayloadAction<number>): void => {
	moveLetter(state, {
		type: 'moveLetter',
		payload: {
			id: payload,
			toPosition: 8,
		}
	});
};

export default moveLetterToEnd;