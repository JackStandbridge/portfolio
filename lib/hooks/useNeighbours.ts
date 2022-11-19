import { Board } from '../slices/colourflood/initial';

const useNeighbours = (
	{ x, y }: { x: number; y: number },
	board: Board
): [boolean, boolean] => {
	const squareValue = board[y][x];
	const squareBelow = board[y + 1]?.[x];
	const squareRight = board[y]?.[x + 1];

	const joinDown = squareValue === -1 && squareBelow === -1;
	const joinRight = squareValue === -1 && squareRight === -1;

	return [joinDown, joinRight];
};

export default useNeighbours;
