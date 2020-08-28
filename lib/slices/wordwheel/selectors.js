export const letterSelector =
	state => state.wordwheel.letters;

export const letterIdsSelector =
	state => state.wordwheel.letters.ids;

export const letterEntitiesSelector =
	state => state.wordwheel.letters.entities;

export const positionSelector = ({ wordwheel: { letters } }, id) => ({
	raisedPosition: letters.raisedOrder.indexOf(id),
	basePosition: letters.baseOrder.indexOf(id),
});

export const guessesSelector = ({ wordwheel }) => wordwheel.guesses;

export const answersSelector = ({ wordwheel }) => wordwheel.answers;