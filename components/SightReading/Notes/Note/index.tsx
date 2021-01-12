import { FC } from 'react';
import { useSelector } from 'react-redux';

import Note from './Note';

import { showNoteNameSelector } from '../../../../lib/slices/sightreading/selectors';
import { calculateLedgerLines } from '../../../../lib/utils';
import { NoteName, Duration, NoteVariant } from '../../../../lib/slices/sightreading/types';
import notes from '../../../../lib/slices/sightreading/notes';

interface Props {
	note: NoteName,
	dotted: boolean,
	xFraction: number,
	barWidth: number,
	barNumber: number,
	value: Duration,
	enableNoteNames?: boolean,
};

const ConnectedNote: FC<Props> = ({
	note,
	xFraction,
	barWidth,
	value,
	enableNoteNames,
	barNumber,
}) => {
	const noteNameSetting = useSelector(showNoteNameSelector);
	const showNoteNames = enableNoteNames ?? noteNameSetting;

	const y = notes[note];
	const usableSpace = barWidth * 0.9;
	const padding = barWidth / 12;

	const stemDown = y < notes.B4;
	const x = xFraction * usableSpace + padding;

	const ledgerLinePosition = calculateLedgerLines(y);

	const coords = { x, y };

	const textX = x + (
		!stemDown || value === 1 ? 0 : 5
	);
	const textY = y + (stemDown ? -10 : 20);

	const textProps = {
		x: textX,
		y: textY,
	};

	const variant = note.includes('#')
		? NoteVariant.sharp
		: note.includes('b')
			? NoteVariant.flat
			: NoteVariant.natural;

	return (
		<Note
			showNoteNames={ showNoteNames }
			note={ note }
			ledgerLines={ ledgerLinePosition }
			coords={ coords }
			stemDown={ stemDown }
			barNumber={ barNumber }
			textProps={ textProps }
			value={ value }
			variant={ variant }
		/>
	);
};

export default ConnectedNote;