import {requestNewGame} from './';
import { storeGame } from '../reducer';

const getInitialGame = () => dispatch => {
	const worker = new Worker('./workers/newWord.js', { type: 'module' })

	worker.onmessage = event => {
		dispatch(storeGame(event.data));
		dispatch(requestNewGame());
	}

	worker.postMessage(null);
};

export default getInitialGame;