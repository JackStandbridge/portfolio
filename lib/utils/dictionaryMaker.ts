const dictionaryMaker = (dict: { [key: string]: number }, letter: string) => ({
	...dict,
	[letter]: dict[letter] + 1 || 1
});

export default dictionaryMaker;