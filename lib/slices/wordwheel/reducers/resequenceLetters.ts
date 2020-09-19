import { State } from '../initial';

interface Action {
	payload: number[]
}

const resequenceLetters = (state: State, { payload }: Action): void => {
	state.letters.baseOrder = payload;
};

export default resequenceLetters;