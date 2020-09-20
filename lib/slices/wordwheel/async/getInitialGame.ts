import { AppDispatch, AppGetState } from '../../../store';
import { requestNewGame } from './';
import { storeGame } from '../reducer';

interface thunk {
	(dispatch: AppDispatch, getState: AppGetState): void
}

const getInitialGame = (): thunk => (dispatch, getState) => {
	const state = getState();

	if (state.wordwheel.answers.length) {
		return;
	}

	const worker = new Worker('./workers/newWord.ts', { type: 'module' })

	worker.onmessage = event => {
		dispatch(storeGame(event.data));
		dispatch(requestNewGame());
	}

	worker.postMessage(null);
};

export default getInitialGame;