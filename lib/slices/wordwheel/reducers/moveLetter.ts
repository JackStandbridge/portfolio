import { State } from '../initial';

interface Action {
	payload: { id: number, toPosition: number }
}

const moveLetter = (state: State, { payload }: Action): void => {
	const { id, toPosition } = payload;

	const index = state.letters.baseOrder.indexOf(id);
	state.letters.baseOrder.splice(index, 1);
	state.letters.baseOrder.splice(toPosition, 0, id);
};

export default moveLetter;