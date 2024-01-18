import { Thunk } from '../../../store';
import { requestNewGame } from './';
import { storeGame } from '../reducer';

const getInitialGame = (): Thunk => (dispatch, getState) => {
	const state = getState();

	if (state.wordwheel.answers.length) {
		return;
	}

	const worker = new Worker(new URL('./workers/newWord.ts', import.meta.url), {
		type: 'module',
	});

	worker.onmessage = (event) => {
		dispatch(storeGame(event.data));
		dispatch(requestNewGame());
	};

	worker.postMessage(null);
};

export default getInitialGame;
