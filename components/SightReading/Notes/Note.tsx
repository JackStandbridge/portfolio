import { FC } from 'react';
import { NoteName, NoteCoordinates, notes } from '../../../lib/slices/sightreading/types';

interface Props {
	note: NoteName,
	dotted: boolean,
	xFraction: number,
	children: (props: NoteCoordinates) => JSX.Element
};

const Note: FC<Props> = ({ note, xFraction, children }) => {

	const y = notes[note];

	const props = {
		x: xFraction * 270 + 25,
		y,
	};

	return children(props);
};

export default Note;
