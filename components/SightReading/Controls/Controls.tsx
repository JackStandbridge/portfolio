import { FC } from 'react';
import styles from './Controls.module.scss';

import { Duration, NoteProps } from '../../../lib/slices/sightreading/types';

interface Props {
	notes: { value: Duration, note: FC<NoteProps>, width: number }[],
	handleClick: (value: Duration) => void,
	durations: Duration[],
}

const scale = 1;

const Controls: FC<Props> = ({ notes, handleClick, durations }) => {
	return (
		<section className={ styles.controls }>
			{ notes.map(({ note: Note, width, value }, i) => (
				<button
					className={ durations.includes(value) ? styles.active : styles.inactive }
					key={ i }
					onClick={ () => handleClick(value) }
				>
					<svg
						className={ styles.svg }
						style={ { height: scale * 64 } }
						viewBox={ `0 0 ${ scale * width } ${ scale * 55 }` }
					>
						<Note
							x={ 15 }
							y={ 45 }
							barNumber={ -i }
						/>
					</svg>
				</button>
			)) }
		</section>
	)
};

export default Controls;