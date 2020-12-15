import { FC } from 'react';

export interface NoteInterface {
	x: number,
	y: number,
};

interface Props {
	note: string,
	dotted: boolean,
	position: number,
	children: (props: NoteInterface) => JSX.Element
};


const Note: FC<Props> = ({ note, position, children }) => {
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
		x: position * 65 + 50,
		y,
	};

	return children(props);
};

export default Note;
