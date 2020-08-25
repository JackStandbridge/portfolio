import selectLetter from './selectLetter';
import deleteLastLetter from './deleteLastLetter';
import submitGuess from './submitGuess';

const userTyped = (state, { payload }) => {
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
		selectLetter(state, { payload: middleLetter.id });
		return;
	}

	const otherLetters = state.letters.ids
		.map(id => state.letters.entities[id]);

	for (let i = 0; i < otherLetters.length; i++) {
		const { letter, id, selected } = otherLetters[i];
		if (letter === key && !selected) {
			selectLetter(state, { payload: id });
			return;
		}
	}

};

export default userTyped;