import notes from './notes';

export interface NoteCoordinates {
	x: number;
	y: number;
}

export type NoteProps = NoteCoordinates & {
	barNumber?: number;
	stemDown?: boolean;
	ledgerLines?: JSX.Element[];
};

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

export enum NoteVariant {
	sharp = 'sharp',
	flat = 'flat',
	natural = 'natural',
}
