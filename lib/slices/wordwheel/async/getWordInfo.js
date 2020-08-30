import dummyData from './dummyData.json';
import { setWordInfo } from '../reducer';

const getWordInfo = word => async (dispatch, getState) => {

	const { fetchedInfo } = getState().wordwheel;

	if (fetchedInfo[word] !== undefined) {
		return;
	}

	const testing = true;
	if (testing) {
		const result = [
			{
				...dummyData[0],
				word,
			},
			...dummyData.slice(1,),
		];
		dispatch(setWordInfo({ word, result }));
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

export default getWordInfo;