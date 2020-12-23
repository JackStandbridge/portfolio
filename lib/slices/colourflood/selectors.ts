import { State } from '../../store';
import { Board } from './initial';

export const boardSelector = ({ colourflood }: State): Board => colourflood.board;

export const difficultySelector = ({ colourflood }: State): number => colourflood.difficulty;

export const squareSelector = ({ x, y }: { x: number, y: number }): (s: State) => { colour: number, disabled: boolean } => ({ colourflood }) => ({
	colour: colourflood.board[y][x] !== -1 ? colourflood.board[y][x] : colourflood.colour,
	disabled: colourflood.board[y][x] === colourflood.colour || colourflood.board[y][x] === -1,
});

export const colourSelector = ({ colourflood }: State): number => colourflood.colour;