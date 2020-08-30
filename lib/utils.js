export const capitalize = str => str
	.split(/[-\s]/)
	.map(word => word[0].toUpperCase() + word.slice(1,))
	.join(' ');

const dictionaryMaker = (dict, letter) => ({
	...dict,
	[letter]: dict[letter] + 1 || 1
});

export const validateGuess = (word, letters) => {
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

export const getAnswers = (letters, allWords) => {
	return allWords.filter(word => validateGuess(
		word,
		letters.ids.map(id => letters.entities[id].letter)
	));
};

export const newWord = nineLetterWords => {
	const index = Math.floor(Math.random() * nineLetterWords.length);
	const word = nineLetterWords[index]
		.split('')
		.sort(() => Math.random() < 0.5 ? -1 : 1)
		.join('');

	return {
		entities: word
			.split('')
			.map((letter, i) => (
				{
					id: i,
					letter,
					selected: false,
				}
			))
			.reduce((letters, letter) => (
				{
					...letters,
					[letter.id]: letter
				}
			), {}),

		ids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
		baseOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8],
		raisedOrder: [],
	};
};

export const clamp = (min, max, num) => {
	if (num > max) {
		return max;
	} else if (num < min) {
		return min;
	} else {
		return num;
	}
}