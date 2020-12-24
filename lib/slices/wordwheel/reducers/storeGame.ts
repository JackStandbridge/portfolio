import { State, Letters } from '../initial';
import { PayloadAction } from '@reduxjs/toolkit';

interface Action {
	answers: string[],
	letters: Letters,
};

const storeGame = (state: State, { payload }: PayloadAction<Action>): void => {
	state.nextGame.answers = payload.answers;
	state.nextGame.letters = payload.letters;
};

export default storeGame;