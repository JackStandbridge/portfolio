import { State } from '../initial';
import { updateBoard } from './';

interface Action {
	payload: number
}

const clickSquare = (state: State, { payload }: Action): void => {
	state.colour = payload;
	updateBoard(state);
};

export default clickSquare;