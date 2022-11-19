import { State } from '../initial';
import selectLetter from './selectLetter';
import deleteLastLetter from './deleteLastLetter';
import submitGuess from './submitGuess';
import { PayloadAction } from '@reduxjs/toolkit';

const userTyped = (state: State, { payload }: PayloadAction<string>): void => {
	const key = payload.toLowerCase();

	if (key === 'backspace') {
		deleteLastLetter(state);
		return;
	}

	if (key === 'enter') {
		submitGuess(state);
		return;
	}

	if (!key.match(/^[a-z]$/)) {
		return;
	}

	const middleLetter = state.letters.entities[state.letters.ids[4]];

	if (middleLetter.letter === key && !middleLetter.selected) {
		selectLetter(state, { payload: middleLetter.id, type: 'selectLetter' });
		return;
	}

	const otherLetters = state.letters.ids.map(
		(id) => state.letters.entities[id]
	);

	for (let i = 0; i < otherLetters.length; i++) {
		const { letter, id, selected } = otherLetters[i];
		if (letter === key && !selected) {
			selectLetter(state, { payload: id, type: 'selectLetter' });
			return;
		}
	}
};

export default userTyped;
