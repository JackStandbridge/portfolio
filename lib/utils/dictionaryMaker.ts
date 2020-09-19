interface Frequency {
	[key: string]: number
};

const dictionaryMaker = (dict: Frequency, letter: string): Frequency => ({
	...dict,
	[letter]: dict[letter] + 1 || 1
});

export default dictionaryMaker;