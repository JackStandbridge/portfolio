export type Board = number[][];

export interface State {
	difficulty: number;
	height: number;
	width: number;
	colour: number;
	moves: number;
	history: {}[];
	bestScore: {
		4: number;
		5: number;
		6: number;
	};
	opponentMoving: false;
	board: Board;
}

const initial: State = {
	difficulty: 6,
	height: 10,
	width: 10,
	colour: 0,
	moves: 0,
	history: [],
	bestScore: {
		4: Infinity,
		5: Infinity,
		6: Infinity,
	},
	opponentMoving: false,
	board: [],
};

export default initial;