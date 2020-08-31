const dictionaryMaker = (dict, letter) => ({
	...dict,
	[letter]: dict[letter] + 1 || 1
});

export default dictionaryMaker;