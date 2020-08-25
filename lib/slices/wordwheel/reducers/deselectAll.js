import deselectLetter from './deleteLastLetter';
import moveLetterToEnd from './moveLetterToEnd';

const deselectAll = state => {
	const selectedLetters = [...state.letters.raisedOrder];
	selectedLetters.forEach(id => {
		deselectLetter(state, { payload: id });
		moveLetterToEnd(state, { payload: id });
	});
};

export default deselectAll;