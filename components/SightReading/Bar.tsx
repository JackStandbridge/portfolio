import { FC } from 'react';
import Stave from './Stave';
import Note from './Notes/Note';

import SemiBreve from './Notes/SemiBreve';
import Minim from './Notes/Minim';
import Crotchet from './Notes/Crotchet';
import Quaver from './Notes/Quaver';
import SemiQuaver from './Notes/SemiQuaver';

import { NoteInterface } from './Notes/Note';

const components = {
	1: SemiBreve,
	2: Minim,
	4: Crotchet,
	8: Quaver,
	16: SemiQuaver,
};

type Duration = 1 | 2 | 4 | 8 | 16

type NoteDefinition = [string, Duration];

interface Props {
	voices: NoteDefinition[][],
}

const Bar: FC<Props> = ({ voices }) => {
	voices.forEach(voice => {
		const total = voice.reduce((total, [, value]) => {
			const fraction = 1 / value;
			return total + fraction;
		}, 0);

		if (total > 1) {
			throw new Error('Bar may not exceed value of 1 semibreve');
		}
	});

	return (
		<svg viewBox='0 0 300 150'>
			<g transform='translate(0, 45)'>
				<Stave />
				{ voices.map(voice => voice.map(([name, value], i) => {
					const Component = components[value];

					return (
						<Note
							key={ i }
							position={ i }
							dotted={ false }
							note={ name }
						>
							{ (props: NoteInterface) => (
								<Component { ...props } />
							) }
						</Note>
					);
				})) }
			</g>
		</svg>
	);
};

export default Bar;