import { State } from '../initial';
import { updateBoard } from './';

interface Action {
	payload: number[][],
};

const newBoard = (state: State, { payload }: Action): void => {
	state.board = payload;
	updateBoard(state);
};

export default newBoard;