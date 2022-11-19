import { storeGame, newGame } from '../reducer';
import { Thunk } from '../../../store';

let worker: Worker | null;

const requestNewGame = (): Thunk => (dispatch) => {
	// only do work if there isn't already a worker doing something
	if (!worker) {
		worker = new Worker('./workers/newWord.ts', { type: 'module' });
		dispatch(newGame());

		worker.onmessage = (event) => {
			dispatch(storeGame(event.data));
			worker = null;
		};

		worker.postMessage(null);
	}
};

export default requestNewGame;
