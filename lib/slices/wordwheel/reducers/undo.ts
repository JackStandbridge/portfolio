import { State } from '../initial';

const undo = (state: State): void => {
	state.guesses.pop();
};

export default undo;