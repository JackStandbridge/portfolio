const setWordInfo = (state, { payload }) => {
	state.fetchedInfo[payload.word] = payload.result;
};

export default setWordInfo;