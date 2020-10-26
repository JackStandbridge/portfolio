export type Letter = {
	id: number,
	letter: string,
	selected: boolean
};

export type Entities = {
	[key: string]: Letter,
}

export type Letters = {
	entities: Entities,
	ids: number[],
	raisedOrder: number[],
	baseOrder: number[],
}

interface Game {
	answers: string[],
	letters: Letters,
};

export interface DefinitionListing {
	word: string
	meaning: {
		[key: string]: {
			definition: string,
		}[],
	},
	phonetics: {
		text: string,
	}[],
}

export interface State extends Game {
	guesses: string[],
	nextGame: Game,
	fetchedInfo: { [key: string]: DefinitionListing[]|null },
	playing: boolean,
	showAnswers: boolean,
};

const initial: State = {
	guesses: [],
	answers: [],
	letters: {
		entities: {
			'0': { id: 0, letter: '', selected: false },
			'1': { id: 1, letter: '', selected: false },
			'2': { id: 2, letter: '', selected: false },
			'3': { id: 3, letter: '', selected: false },
			'4': { id: 4, letter: '', selected: false },
			'5': { id: 5, letter: '', selected: false },
			'6': { id: 6, letter: '', selected: false },
			'7': { id: 7, letter: '', selected: false },
			'8': { id: 8, letter: '', selected: false },
		},
		ids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
		raisedOrder: [],
		baseOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8],
	},
	nextGame: {
		answers: [],
		letters: {
			entities: {
				'0': { id: 0, letter: '', selected: false },
				'1': { id: 1, letter: '', selected: false },
				'2': { id: 2, letter: '', selected: false },
				'3': { id: 3, letter: '', selected: false },
				'4': { id: 4, letter: '', selected: false },
				'5': { id: 5, letter: '', selected: false },
				'6': { id: 6, letter: '', selected: false },
				'7': { id: 7, letter: '', selected: false },
				'8': { id: 8, letter: '', selected: false },
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