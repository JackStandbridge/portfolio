export const letterSelector =
	state => state.wordwheel.letters;

export const letterIdsSelector =
	state => state.wordwheel.letters.ids;

export const letterEntitiesSelector =
	state => state.wordwheel.letters.entities;

export const positionSelector = id => ({ wordwheel: { letters } }) => ({
	raisedPosition: letters.raisedOrder.indexOf(id),
	basePosition: letters.baseOrder.indexOf(id),
});

export const baseOrderSelector = ({ wordwheel }) => wordwheel.letters.baseOrder;

export const guessesSelector = ({ wordwheel }) => wordwheel.guesses;

export const answersSelector = ({ wordwheel }) => wordwheel.answers;

export const showAnswersSelector = ({ wordwheel }) => wordwheel.showAnswers;

export const definitionsSelector = word => ({ wordwheel }) => wordwheel.fetchedInfo[word];