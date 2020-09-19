import { State } from '../initial';
import deselectLetter from './deselectLetter';
import selectLetter from './selectLetter';

interface Action {
	payload: number
};

const toggleLetter = (state: State, action: Action): void => {
	const letter = state.letters.entities[action.payload];
	if (letter.selected) {
		deselectLetter(state, action);
	} else {
		selectLetter(state, action);
	}
};

export default toggleLetter;