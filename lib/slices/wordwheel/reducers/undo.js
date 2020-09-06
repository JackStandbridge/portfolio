const undo = state => {
	state.guesses.pop();
};

export default undo;