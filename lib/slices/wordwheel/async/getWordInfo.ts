import { setWordInfo } from '../reducer';
import { AppDispatch, AppGetState } from '../../../store';

interface thunk {
	(dispatch: AppDispatch, getState: AppGetState): void
}

const getWordInfo = (word: string): thunk => {

	return async (dispatch, getState) => {

		const { fetchedInfo } = getState().wordwheel;

		if (fetchedInfo[word] !== undefined) {
			return;
		}

		try {

			const base = '/api/define';

			const response = await fetch(`${ base }?q=${ word }`);

			if (response.status >= 400) {
				throw new Error();
			}

			const result = await response.json();

			dispatch(setWordInfo(result));

		} catch (e) {
			console.error(e);
			dispatch(setWordInfo({ word, result: null }));
		}
	}

};

export default getWordInfo;