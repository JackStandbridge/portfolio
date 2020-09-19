import { State } from '../initial';

interface Action {
	payload: string
}

const deleteGuess = (state: State, { payload }: Action): void => {
	const index = state.guesses.indexOf(payload);

	if (index !== -1) {
		state.guesses.splice(index, 1);
	}
};

export default deleteGuess;