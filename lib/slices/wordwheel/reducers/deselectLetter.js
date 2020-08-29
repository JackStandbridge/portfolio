import moveLetterToEnd from './moveLetterToEnd';

const deselectLetter = (state, { payload }) => {
	state.letters.entities[payload].selected = false;

	const index = state.letters.raisedOrder.indexOf(payload);
	state.letters.raisedOrder.splice(index, 1);

	moveLetterToEnd(state, { payload });
};

export default deselectLetter;