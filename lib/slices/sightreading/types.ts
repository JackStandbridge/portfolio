export interface NoteCoordinates {
	x: number,
	y: number,
};

export type NoteProps = NoteCoordinates & {
	barNumber: number,
};

export const notes = {
	'C4': 60,
	'D4': 55,
	'E4': 50,
	'F4': 45,
	'G4': 40,
	'A4': 35,
	'B4': 30,
	'C5': 25,
	'D5': 20,
	'E5': 15,
	'F5': 10,
	'G5': 5,
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
