import { FC } from 'react';
import Stave from './Stave';
import Note from './Notes/Note';

import { NoteDefinition } from '../../lib/slices/sightreading/types';
import styles from './SightReading.module.scss';

interface Props {
	voices: NoteDefinition[][],
	barNumber: number,
	barWidth: number,
};

const Bar: FC<Props> = ({ voices, barNumber, barWidth }) => {
	return (
		<svg className={ styles.bar } viewBox={ `0 0 ${ barWidth } 110` }>
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

					const note = (
						<Note
							barWidth={ barWidth }
							key={ i }
							xFraction={ noteXCoordinate }
							dotted={ false }
							note={ name }
							value={ value }
							barNumber={ barNumber }
						/>
					);

					noteXCoordinate += 1 / value;

					return note;
				});
			}) }
		</svg>
	);
};

export default Bar;