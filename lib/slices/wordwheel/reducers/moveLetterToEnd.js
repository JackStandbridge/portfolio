import moveLetter from './moveLetter';

const moveLetterToEnd = (state, { payload }) => {
	moveLetter(state, {
		payload: {
			id: payload,
			toPosition: 8,
		}
	});
};

export default moveLetterToEnd;