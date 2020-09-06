import deselectLetter from './deselectLetter';
import selectLetter from './selectLetter';

const toggleLetter = (state, action) => {
	const letter = state.letters.entities[action.payload];
	if (letter.selected) {
		deselectLetter(state, action);
	} else {
		selectLetter(state, action);
	}
};

export default toggleLetter;