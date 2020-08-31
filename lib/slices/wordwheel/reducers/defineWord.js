import { formatWord, getAnswers } from '../../../utils';
import allWords from '../allWords.json';

const defineWord = (state, { payload }) => {
	state.letters = formatWord(payload);
	state.answers = getAnswers(state.letters, allWords);
	state.playing = true;
};

export default defineWord;