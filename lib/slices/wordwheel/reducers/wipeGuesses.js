import initial from '../initial';

const wipeGuesses = state => {
	state.guesses = initial.guesses;
};

export default wipeGuesses;