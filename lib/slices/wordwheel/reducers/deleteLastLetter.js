import moveLetterToEnd from './moveLetterToEnd';

const deleteLastLetter = state => {
	const id = state.letters.raisedOrder.pop();

	if (id !== undefined) {
		state.letters.entities[id].selected = false;
		moveLetterToEnd(state, { payload: id });
	}
};

export default deleteLastLetter;