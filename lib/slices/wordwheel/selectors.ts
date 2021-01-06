import { State } from '../../store';

export const letterSelector =
	({ wordwheel }: State) => wordwheel.letters;

export const letterIdsSelector =
	({ wordwheel }: State) => wordwheel.letters.ids;

export const letterEntitiesSelector =
	({ wordwheel }: State) => wordwheel.letters.entities;

export const positionSelector = (id: number) => ({ wordwheel }: State) => ({
	raisedPosition: wordwheel.letters.raisedOrder.indexOf(id),
	basePosition: wordwheel.letters.baseOrder.indexOf(id),
});

export const baseOrderSelector = ({ wordwheel }: State) => wordwheel.letters.baseOrder;

export const guessesSelector = ({ wordwheel }: State) => wordwheel.guesses;

export const answersSelector = ({ wordwheel }: State) => wordwheel.answers;

export const showAnswersSelector = ({ wordwheel }: State) => wordwheel.showAnswers;

export const definitionsSelector = (word: string) => ({ wordwheel }: State) => wordwheel.fetchedInfo[word];

export const playingSelector = ({ wordwheel }: State) => wordwheel.playing;

export const altKeySelector = ({ wordwheel }: State) => wordwheel.altActive;

export const firstVisitSelector = ({ wordwheel }: State) => wordwheel.firstVisit;