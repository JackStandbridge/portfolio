import reorderRaisedPositions from './reorderRaisedPositions';

const selectLetter = (state, { payload }) => {
	state.letters.entities[payload].selected = true;
	reorderRaisedPositions(state);
}

export default selectLetter;