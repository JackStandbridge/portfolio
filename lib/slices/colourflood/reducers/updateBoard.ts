import { State, Board } from '../initial';

const hasMatchingNeighbour = (board: Board, { x, y }: { x: number, y: number }, colour: number): boolean => {
	return board[y - 1]?.[x] === colour
		|| board[y + 1]?.[x] === colour
		|| board[y][x - 1] === colour
		|| board[y][x + 1] === colour
}

const updateNeighbours = (board: Board, { x, y }: { x: number, y: number }, colour: number): void => {
	const toUpdate = [
		{ y: y - 1, x: x },
		{ y: y + 1, x: x },
		{ y: y, x: x - 1 },
		{ y: y, x: x + 1 },
	]
		.filter(({ x, y }) => board[y]?.[x] === colour);

	toUpdate.forEach(({ x, y }) => {
		board[y][x] = -1;
		updateNeighbours(board, { x, y }, colour);
	});

};

const updateBoard = (state: State): void => {
	const { colour, board } = state;

	const perimeter = board.reduce((perimeter, line, y) => {
		line.forEach((square, x) => {
			if (square !== -1) {
				return;
			}

			if (!hasMatchingNeighbour(board, { x, y }, colour)) {
				return;
			}

			perimeter.push({ x, y });
		});

		return perimeter;
	}, [] as { x: number, y: number }[]);

	perimeter.forEach(coords => {
		updateNeighbours(board, coords, colour);
	});

};

export default updateBoard;