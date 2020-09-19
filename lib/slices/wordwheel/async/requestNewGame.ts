import { storeGame, newGame } from '../reducer';
import { AppDispatch } from '../../../store';

let worker: Worker;

const requestNewGame = (): (dispatch: AppDispatch) => void => dispatch => {
	// only do work if there isn't already a worker doing something
	if (!worker) {
		worker = new Worker('./workers/newWord.js', { type: 'module' });
		dispatch(newGame());

		worker.onmessage = event => {
			dispatch(storeGame(event.data));
			worker = null;
		}

		worker.postMessage(null);
	}
};

export default requestNewGame;