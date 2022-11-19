import { PayloadAction } from '@reduxjs/toolkit';

import { State } from '../initial';

const rehydrateFromCache = (_: State, action: PayloadAction<State>) => {
	return action.payload;
};

export default rehydrateFromCache;
