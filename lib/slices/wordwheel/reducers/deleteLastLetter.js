import deselectLetter from './deselectLetter';

const deleteLastLetter = state => {
	const selected = state.letters.ids
		.map(id => state.letters.entities[id])
		.filter(letter => letter.selected)
		.sort((a, b) => a.raisedPosition < b.raisedPosition ? 1 : -1);

	if (selected[0]) {
		deselectLetter(state, { payload: selected[0].id });
	}
};

export default deleteLastLetter;