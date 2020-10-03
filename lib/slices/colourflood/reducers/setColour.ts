import { State } from '../initial';
import { updateBoard } from './';

interface Action {
	payload: number
}

const setColour = (state: State, { payload }: Action): void => {
	if (payload < state.difficulty) {
		state.colour = payload;
	}

	updateBoard(state);
};

export default setColour;