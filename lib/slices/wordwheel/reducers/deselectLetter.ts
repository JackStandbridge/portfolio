import { State } from '../initial';

interface Action {
	payload: number
}

const deselectLetter = (state: State, { payload }: Action): void => {
	state.letters.entities[payload].selected = false;

	const index = state.letters.raisedOrder.indexOf(payload);
	state.letters.raisedOrder.splice(index, 1);
};

export default deselectLetter;