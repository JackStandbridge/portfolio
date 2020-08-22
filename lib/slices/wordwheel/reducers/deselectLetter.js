import reorderRaisedPositions from './reorderRaisedPositions';

const deselectLetter = (state, { payload }) => {
	state.letters.entities[payload].selected = false;
	state.letters.entities[payload].raisedPosition = null;
	reorderRaisedPositions(state);
};

export default deselectLetter;