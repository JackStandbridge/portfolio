import nineLetterWords from '../nineLetterWords.json';

const newWord = state => {
	const index = Math.floor(Math.random() * nineLetterWords.length);
	const word = nineLetterWords[index]
		.split('')
		.sort(() => Math.random() < 0.5 ? -1 : 1)
		.join('');

	state.letters = {
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

export default newWord;