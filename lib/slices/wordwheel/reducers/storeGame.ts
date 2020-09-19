import { State, Letters } from '../initial';

interface Action {
	payload: {
		answers: string[],
		letters: Letters,
	}
}

const storeGame = (state: State, { payload }: Action): void => {
	state.nextGame.answers = payload.answers;
	state.nextGame.letters = payload.letters;
};

export default storeGame;