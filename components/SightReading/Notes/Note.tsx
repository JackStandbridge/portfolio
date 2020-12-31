import { FC } from 'react';
import { NoteName, NoteCoordinates, notes } from '../../../lib/slices/sightreading/types';

interface Props {
	note: NoteName,
	dotted: boolean,
	xFraction: number,
	children: (props: NoteCoordinates) => JSX.Element,
	barWidth: number,
};

const Note: FC<Props> = ({ note, xFraction, children, barWidth }) => {

	const y = notes[note];
	const usableSpace = barWidth * 0.9;
	const padding = barWidth / 12;

	const props = {
		x: xFraction * usableSpace + padding,
		y,
		stemDown: y < 30,
	};

	return children(props);
};

export default Note;
