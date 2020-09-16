import { configureStore } from '@reduxjs/toolkit';
import { wordwheel, colourflood } from './slices';

const store = configureStore({
	reducer: {
		wordwheel,
		colourflood,
	},
});

export default store;