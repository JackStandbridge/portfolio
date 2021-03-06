import { FC } from 'react';
import Stave from './Stave';
import Note from './Notes/Note';

import SemiBreve from './Notes/SemiBreve';
import Minim from './Notes/Minim';
import Crotchet from './Notes/Crotchet';
import Quaver from './Notes/Quaver';
import SemiQuaver from './Notes/SemiQuaver';

import { NoteDefinition, NoteProps } from '../../lib/slices/sightreading/types';
import styles from './SightReading.module.scss';

const components = {
	1: SemiBreve,
	2: Minim,
	4: Crotchet,
	8: Quaver,
	16: SemiQuaver,
} as { [key: number]: FC<NoteProps> };

interface Props {
	voices: NoteDefinition[][],
	barNumber: number,
	barWidth: number,
};

const Bar: FC<Props> = ({ voices, barNumber, barWidth }) => {
	return (
		<svg className={ styles.bar } viewBox={ `0 0 ${ barWidth } 150` }>
			<Stave />

			{ voices.map(voice => {

				const sumOfNotes = voice.reduce((sumOfNotes, [, value]) => {
					const fraction = 1 / value;
					return sumOfNotes + fraction;
				}, 0);

				if (sumOfNotes > 1) {
					console.error('Received:', voices);
					throw new Error('Bar may not exceed value of 1 semibreve');
				}

				let noteXCoordinate = 0;

				return voice.map(([name, value], i) => {

					const Component = components[value];

					const note = (
						<Note
							barWidth={ 300 }
							key={ i }
							xFraction={ noteXCoordinate }
							dotted={ false }
							note={ name }
						>
							{ (props: NoteProps) => (
								<Component { ...props } barNumber={ barNumber } />
							) }
						</Note>
					);

					noteXCoordinate += 1 / value;

					return note;
				});
			}) }
		</svg>
	);
};

export default Bar;