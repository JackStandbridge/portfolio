import { FC } from 'react';
import { NoteName, NoteProps, notes } from '../../../lib/slices/sightreading/types';
import { calculateLedgerLines } from '../../../lib/utils';

interface Props {
	note: NoteName,
	dotted: boolean,
	xFraction: number,
	children: (props: NoteProps) => JSX.Element,
	barWidth: number,
};

const Note: FC<Props> = ({ note, xFraction, children, barWidth }) => {

	const y = notes[note];
	const usableSpace = barWidth * 0.9;
	const padding = barWidth / 12;

	const stemDown = y < notes.B4;
	const x = xFraction * usableSpace + padding;

	const ledgerLinePosition = calculateLedgerLines(y);

	const ledgerLines = ledgerLinePosition.map(position => (
		<line
			x1={ x - 10 }
			y1={ y + position }
			x2={ x + 10 }
			y2={ y + position }
			stroke='#000'
			strokeWidth='1'
			strokeLinecap='round'
		/>
	));

	const props = { x, y, stemDown, ledgerLines };

	return (
		<>
			{ children(props) }
		</>
	);
};

export default Note;
