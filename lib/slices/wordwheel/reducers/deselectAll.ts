import { State } from '../initial';
import deselectLetter from './deselectLetter';

const deselectAll = (state: State): void => {
	const selectedLetters = [...state.letters.raisedOrder];

	selectedLetters.forEach((id) => {
		deselectLetter(state, { payload: id, type: 'deselectLetter' });
	});
};

export default deselectAll;
