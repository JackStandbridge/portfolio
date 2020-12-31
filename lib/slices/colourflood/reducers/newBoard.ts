import { State } from '../initial';
import { updateBoard } from './';
import { PayloadAction } from '@reduxjs/toolkit';

const newBoard = (state: State, { payload }: PayloadAction<number[][]>): void => {
	state.board = payload;
	updateBoard(state);
};

export default newBoard;