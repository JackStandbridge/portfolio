import {
	newGame,
	setLoading,
	setWordInfo,
} from '../reducer';
import dummyData from './dummyData.json';

export const requestNewGame = () => dispatch => {
	dispatch(setLoading(true));

	const worker = new Worker('./workers/newWord.js', { type: 'module' })

	worker.onmessage = event => {
		dispatch(newGame(event.data));
		dispatch(setLoading(false));
	}

	worker.postMessage(null);
};

export const getWordInfo = word => async (dispatch, getState) => {

	const { fetchedInfo } = getState().wordwheel;

	if (fetchedInfo[word] !== undefined) {
		return;
	}

	const dev = true;
	if (dev) {
		dispatch(setWordInfo({ word, result: dummyData }));
		return;
	}

	try {
		const base = 'https://api.dictionaryapi.dev/api/v1/entries/en/';

		const response = await fetch(`${ base }${ word }`);

		if (response.status >= 400) {
			throw new Error();
		}

		const result = await response.json();

		if (Array.isArray(result)) {
			dispatch(setWordInfo({ word, result }));
		}

	} catch (e) {
		dispatch(setWordInfo({ word, result: null }));
	}
};