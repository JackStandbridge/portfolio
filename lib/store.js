import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		wordwheel: require('./slices').wordwheel,
	},
});

export default store;