import { State } from '../initial';

interface Action {
	payload: boolean
}

const altActive = (state: State, { payload }: Action): void => {
	state.altActive = payload;
};

export default altActive;