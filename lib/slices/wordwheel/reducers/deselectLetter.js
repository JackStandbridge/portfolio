import reorderRaisedPositions from './reorderRaisedPositions';

const deselectLetter = (state, { payload }) => {
	state.letters.entities[payload].selected = false;
	reorderRaisedPositions(state);
};

export default deselectLetter;