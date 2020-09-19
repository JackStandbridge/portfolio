import { State } from '../initial';

interface Action {
	payload: number,
}

const selectLetter = (state: State, { payload }: Action): void => {
	state.letters.entities[payload].selected = true;
	state.letters.raisedOrder.push(payload);
}

export default selectLetter;