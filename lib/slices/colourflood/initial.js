const initial = {
	difficulty: 4,
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