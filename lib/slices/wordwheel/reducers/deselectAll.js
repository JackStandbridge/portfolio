import deselectLetter from './deselectLetter';

const deselectAll = state => {
	const selectedLetters = [...state.letters.raisedOrder];

	selectedLetters.forEach(id => {
		deselectLetter(state, { payload: id });
	});
};

export default deselectAll;