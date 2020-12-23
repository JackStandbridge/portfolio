import { configureStore } from '@reduxjs/toolkit';
import { wordwheel, colourflood, sightreading } from './slices';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

const store = configureStore({
	reducer: {
		wordwheel,
		colourflood,
		sightreading,
	},
});

export type State = ReturnType<typeof store.getState>

export type Thunk<ReturnType = void> = ThunkAction<
	ReturnType,
	State,
	unknown,
	Action<string>
>

export default store;