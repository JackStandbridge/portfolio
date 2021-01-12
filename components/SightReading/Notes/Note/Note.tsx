import { FC } from 'react';

import Annotation from '../../Decorations/Annotation';
import Sharp from '../../Decorations/Sharp';
import Flat from '../../Decorations/Flat';
import Dot from '../../Decorations/Dot';
import LedgerLines from '../../Decorations/LedgerLines';

import SemiBreve from '../SemiBreve';
import Minim from '../Minim';
import Crotchet from '../Crotchet';
import Quaver from '../Quaver';
import SemiQuaver from '../SemiQuaver';

import { NoteName, NoteProps, Duration, NoteVariant } from '../../../../lib/slices/sightreading/types';

const components = {
	1: SemiBreve,
	2: Minim,
	4: Crotchet,
	8: Quaver,
	16: SemiQuaver,
} as { [key: number]: FC<NoteProps> };

interface Props {
	showNoteNames: boolean,
	note: NoteName,
	value: Duration,
	textProps: {
		x: number,
		y: number,
	},
	coords: {
		x: number,
		y: number,
	}
	stemDown: boolean,
	barNumber: number,
	ledgerLines: number[],
	variant: NoteVariant,
};

const Note: FC<Props> = ({
	showNoteNames,
	note,
	textProps,
	coords,
	value,
	ledgerLines,
	stemDown,
	barNumber,
	variant,
}) => {

	const Component = components[value];

	return (
		<>
			<g transform={ stemDown && value > 1 ? 'translate(-5)' : '' }>

				<Component
					{ ...coords }
					barNumber={ barNumber }
					stemDown={ stemDown }
				/>

				<Annotation
					show={ showNoteNames }
					coords={ textProps }
				>{ note.slice(0, note.length - 1) }</Annotation>

				{ variant === NoteVariant.sharp &&
					<Sharp coords={ coords } />
				}
				{ variant === NoteVariant.flat &&
					<Flat coords={ coords } />
				}

			</g>


			<LedgerLines
				lines={ ledgerLines }
				x={ coords.x }
				y={ coords.y }
			/>
		</>
	);
};

export default Note;
