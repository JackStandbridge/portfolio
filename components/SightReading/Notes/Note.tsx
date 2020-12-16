import { FC } from 'react';
import { NoteName, NoteCoordinates } from '../types';

interface Props {
	note: NoteName,
	dotted: boolean,
	xFraction: number,
	children: (props: NoteCoordinates) => JSX.Element
};

const Note: FC<Props> = ({ note, xFraction, children }) => {

	const y = {
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
	}[note] || 0;

	const props = {
		x: xFraction * 270 + 25,
		y,
	};

	return children(props);
};

export default Note;
