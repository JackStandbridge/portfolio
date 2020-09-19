import { State } from '../initial';
import moveLetter from './moveLetter';

interface Action {
	payload: number
}

const moveLetterToEnd = (state: State, { payload }: Action): void => {
	moveLetter(state, {
		payload: {
			id: payload,
			toPosition: 8,
		}
	});
};

export default moveLetterToEnd;