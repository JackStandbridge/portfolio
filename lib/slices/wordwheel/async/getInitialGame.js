import {requestNewGame} from './';
import { storeGame } from '../reducer';

const getInitialGame = () => (dispatch, getState) => {
	const state = getState();

	if (state.wordwheel.answers.length) {
		return;
	}

	const worker = new Worker('./workers/newWord.js', { type: 'module' })

	worker.onmessage = event => {
		dispatch(storeGame(event.data));
		dispatch(requestNewGame());
	}

	worker.postMessage(null);
};

export default getInitialGame;