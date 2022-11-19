import { State } from '../initial';
import deselectLetter from './deselectLetter';
import selectLetter from './selectLetter';
import { PayloadAction } from '@reduxjs/toolkit';

const toggleLetter = (state: State, action: PayloadAction<number>): void => {
	const letter = state.letters.entities[action.payload];
	if (letter.selected) {
		deselectLetter(state, action);
	} else {
		selectLetter(state, action);
	}
};

export default toggleLetter;
