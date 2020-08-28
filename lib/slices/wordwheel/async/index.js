import { newGame, setLoading } from '../reducer';

export const requestNewGame = () => dispatch => {
	dispatch(setLoading(true));

	const worker = new Worker('./workers/newWord.js', { type: 'module' })

	worker.onmessage = event => {
		dispatch(newGame(event.data));
		dispatch(setLoading(false));
	}

	worker.postMessage(null);
};