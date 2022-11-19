import { State } from '../initial';
import { PayloadAction } from '@reduxjs/toolkit';
import { NoteName } from '../types';
import notes from '../notes';

interface Action {
	bound: 'top' | 'bottom';
	increase: 1 | -1;
}

const updateRange = (state: State, action: PayloadAction<Action>) => {
	const noteNames = Object.keys(notes) as NoteName[];
	const { bound, increase } = action.payload;
	let [bottomIndex, topIndex] = state.range.map((note) =>
		noteNames.indexOf(note)
	);

	if (bound === 'top') {
		topIndex = topIndex + increase;
	} else {
		bottomIndex = bottomIndex + increase;
	}

	if (
		topIndex > bottomIndex &&
		bottomIndex >= 0 &&
		topIndex < noteNames.length
	) {
		state.range = [noteNames[bottomIndex], noteNames[topIndex]];
	}
};

export default updateRange;
