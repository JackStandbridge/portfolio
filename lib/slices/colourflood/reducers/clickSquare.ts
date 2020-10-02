import { State } from '../initial';
import { updateBoard } from './';

interface Action {
	payload: {
		x: number,
		y: number,
	}
}

const clickSquare = (state: State, { payload }: Action): void => {
	const { x, y } = payload;
	const clickedColour = state.board[y][x];

	if (clickedColour === -1) {
		return;
	}

	state.colour = state.board[y][x];
	updateBoard(state);
};

export default clickSquare;