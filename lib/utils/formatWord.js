const formatWord = word => {
	return {
		entities: word
			.split('')

			.map((letter, id) => ({
				id,
				letter,
				selected: false,
			}))

			.reduce((letters, letter) => ({
				...letters,
				[letter.id]: letter
			}), {}),

		ids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
		baseOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8],
		raisedOrder: [],
	};
};

export default formatWord;