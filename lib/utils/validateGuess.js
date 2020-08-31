import { dictionaryMaker } from './';

const validateGuess = (word, letters) => {
	if (word.length < 4) {
		return false;
	}

	const letterDict = letters.reduce(dictionaryMaker, {});
	const wordDict = [...word].reduce(dictionaryMaker, {});

	if (!wordDict[letters[4]]) {
		return false;
	}

	for (let letter in wordDict) {
		if (!letterDict[letter] || letterDict[letter] < wordDict[letter]) {
			return false;
		}
	}

	return true;
};

export default validateGuess;