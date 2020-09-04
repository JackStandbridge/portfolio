const deleteLastLetter = state => {
	const id = state.letters.raisedOrder.pop();

	if (id !== undefined) {
		state.letters.entities[id].selected = false;
	}
};

export default deleteLastLetter;