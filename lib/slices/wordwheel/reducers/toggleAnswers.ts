import { State } from '../initial';
import setShowAnswers from './setShowAnswers';

const toggleAnswers = (state: State): void => {
	setShowAnswers(state, { payload: !state.showAnswers, type: 'setShowAnswers' });
};

export default toggleAnswers;