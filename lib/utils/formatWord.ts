import { Letters, Entities } from '../slices/wordwheel/initial';

const formatWord = (word: string): Letters => {
	return {
		entities: word
			.split('')

			.reduce((letters, letter, id) => {
				letters[id] = {
					id,
					letter,
					selected: false,
				};

				return letters;
			}, {} as Entities),

		ids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
		baseOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8],
		raisedOrder: [],
	};
};

export default formatWord;
