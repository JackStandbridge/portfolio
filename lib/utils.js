export const capitalize = str => str
	.split(/[-\s]/)
	.map(word => word[0].toUpperCase() + word.slice(1,))
	.join(' ');

const dictionaryMaker = (dict, letter) => ({
	...dict,
	[letter]: dict[letter] + 1 || 1
});

export const isValidGuess = (word, middleLetter, otherLetters) => {
	const letterDict = [...otherLetters, middleLetter].reduce(dictionaryMaker, {});
	const wordDict = [...word].reduce(dictionaryMaker, {});

	if (!wordDict[middleLetter]) {
		return false;
	}

	for (let letter in wordDict) {
		if (!letterDict[letter] || letterDict[letter] < wordDict[letter]) {
			return false;
		}
	}

	return true;
};