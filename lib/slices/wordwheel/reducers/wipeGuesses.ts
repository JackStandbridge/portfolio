import initial, { State } from '../initial';

const wipeGuesses = (state: State): void => {
	state.guesses = initial.guesses;
};

export default wipeGuesses;