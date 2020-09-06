const initial = {
	guesses: [],
	answers: [],
	letters: {
		entities: {
			0: {},
			1: {},
			2: {},
			3: {},
			4: {},
			5: {},
			6: {},
			7: {},
			8: {},
		},
		ids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
		raisedOrder: [],
		baseOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8],
	},
	nextGame: {
		answers: [],
		letters: {
			entities: {
				0: {},
				1: {},
				2: {},
				3: {},
				4: {},
				5: {},
				6: {},
				7: {},
				8: {},
			},
			ids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
			raisedOrder: [],
			baseOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8],
		},
	},
	fetchedInfo: {},
	playing: false,
	showAnswers: false,
};

export default initial;