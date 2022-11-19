import { State } from '../initial';
import { PayloadAction } from '@reduxjs/toolkit';

const setFirstVisit = (state: State, action: PayloadAction<boolean>) => {
	state.firstVisit = action.payload;
};

export default setFirstVisit;
