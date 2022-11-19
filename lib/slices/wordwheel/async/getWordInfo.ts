import { setWordInfo } from '../reducer';
import { Thunk } from '../../../store';

const getWordInfo = (word: string): Thunk => {
	return async (dispatch, getState) => {
		const { fetchedInfo } = getState().wordwheel;

		if (fetchedInfo[word] !== undefined) {
			return;
		}

		try {
			const base = process.env.NEXT_PUBLIC_DICTIONARY_API_BASE;

			const response = await fetch(`${base}${word}`);

			if (response.status >= 400) {
				throw new Error();
			}

			const result = await response.json();

			dispatch(setWordInfo({ word, result }));
		} catch (e) {
			console.error(e);
			dispatch(setWordInfo({ word, result: null }));
		}
	};
};

export default getWordInfo;
