export interface NoteCoordinates {
	x: number,
	y: number,
};

export type NoteName = 'C4' | 'D4' | 'E4' | 'F4' | 'G4' | 'A4' | 'B4' | 'C5' | 'D5' | 'E5' | 'F5' | 'G5';

export type Duration = 1 | 2 | 4 | 8 | 16;

export type NoteDefinition = [NoteName, Duration];
