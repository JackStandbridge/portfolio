import { State } from '../';

export const boardSelector = ({ colourflood }: State) => colourflood.board;

export const difficultySelector = ({ colourflood }: State) => colourflood.difficulty;

export const squareSelector = ({ x, y }: { x: number, y: number }) => ({ colourflood }: State) => colourflood.board[y][x] !== -1 ? colourflood.board[y][x] : colourflood.colour;