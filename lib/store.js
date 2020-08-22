import { configureStore } from '@reduxjs/toolkit';
import wordwheel from './slices/wordwheel/reducer';

const store = configureStore({
	reducer: {
		wordwheel,
	},
});

export default store;