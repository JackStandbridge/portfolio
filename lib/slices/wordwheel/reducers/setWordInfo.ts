import { State, DefinitionListing } from '../initial';
import { PayloadAction } from '@reduxjs/toolkit';

interface Action {
	word: string;
	result: DefinitionListing[] | null;
}

const setWordInfo = (
	state: State,
	{ payload }: PayloadAction<Action>
): void => {
	state.fetchedInfo[payload.word] = payload.result;
};

export default setWordInfo;
