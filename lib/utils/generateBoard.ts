const generateBoard = (difficulty: number) => {
	const board = Array(10)
		.fill(null)
		.map(() => {
			return Array(10)
				.fill(null)
				.map(() => Math.floor(Math.random() * difficulty));
		});

	board[0][0] = -1; // user colour

	return board;
};

export default generateBoard;
