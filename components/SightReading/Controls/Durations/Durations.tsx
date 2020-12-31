import { FC } from 'react';
import styles from './Durations.module.scss';
import controlStyles from '../Controls.module.scss';

import { Duration, NoteProps } from '../../../../lib/slices/sightreading/types';

interface Props {
	notes: { value: Duration, note: FC<NoteProps>, width: number }[],
	handleClick: (value: Duration) => void,
	durations: Duration[],
};

const buttonSize = 45;

const Durations: FC<Props> = ({ notes, handleClick, durations }) => {
	return (
		<div className={ controlStyles.controlsSection }>
			<p>Choose durations</p>

			<div className={ controlStyles.controlAlignment }>
				<section className={ styles.durations }>
					{ notes.map(({ note: Note, width, value }, i) => (
						<button
							className={ durations.includes(value) ? styles.active : styles.inactive }
							key={ i }
							onClick={ () => handleClick(value) }
						>
							<svg
								className={ styles.svg }
								style={ { height: buttonSize } }
								viewBox={ `0 0 ${ width } ${ 55 }` }
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
			</div>
		</div>
	)
};

export default Durations;