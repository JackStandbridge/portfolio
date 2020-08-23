import deselectLetter from './deleteLastLetter';

const deselectAll = state => {
	state.letters.ids.forEach(id => deselectLetter(state, { payload: id }));
};

export default deselectAll;