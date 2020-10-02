import { State, DefinitionListing } from '../initial';

interface Action {
	payload: {
		word: string,
		result: DefinitionListing[]|null,
	}
}

const setWordInfo = (state: State, { payload }: Action): void => {
	state.fetchedInfo[payload.word] = payload.result;
};

export default setWordInfo;