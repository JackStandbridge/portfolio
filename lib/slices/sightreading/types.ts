export interface NoteCoordinates {
	x: number,
	y: number,
};

export type NoteProps = NoteCoordinates & {
	barNumber?: number,
	stemDown?: boolean,
	ledgerLines?: JSX.Element[],
};

export const notes = {
	'G3': 95,
	'A3': 90,
	'B3': 85,
	'C4': 80,
	'D4': 75,
	'E4': 70,
	'F4': 65,
	'G4': 60,
	'A4': 55,
	'B4': 50,
	'C5': 45,
	'D5': 40,
	'E5': 35,
	'F5': 30,
	'G5': 25,
	'A5': 20,
	'B5': 15,
	'C6': 10,
	'D6': 5,
} as const;

export const durations = {
	1: 'semibreve',
	2: 'minim',
	4: 'crotchet',
	8: 'quaver',
	16: 'semiquaver',
} as const;

export type NoteName = keyof typeof notes;

export type Duration = keyof typeof durations;

export type NoteDefinition = [NoteName, Duration];
