import { State } from '../initial';
import setShowAnswers from './setShowAnswers';

const toggleAnswers = (state: State): void => {
	setShowAnswers(state, { payload: !state.showAnswers });
};

export default toggleAnswers;