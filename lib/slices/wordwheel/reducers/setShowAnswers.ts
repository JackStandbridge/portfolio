import { State } from '../initial';

interface Action {
	payload: boolean
}

const setShowAnswers = (state: State, { payload }: Action): void => {
	state.showAnswers = payload;
};

export default setShowAnswers;