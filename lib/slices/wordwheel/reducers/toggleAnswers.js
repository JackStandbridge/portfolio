import setShowAnswers from './setShowAnswers';

const toggleAnswers = state => {
	setShowAnswers(state, { payload: !state.showAnswers });
};

export default toggleAnswers;