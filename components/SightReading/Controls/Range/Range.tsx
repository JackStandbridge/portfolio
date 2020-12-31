import { FC } from 'react';

import Stave from '../../Stave';
import Note from '../../Notes/Note';
import SemiBreve from '../../Notes/SemiBreve';

import styles from './Range.module.scss';
import controlStyles from '../Controls.module.scss';
import { NoteName, NoteCoordinates } from '../../../../lib/slices/sightreading/types';

interface Props {
	top: NoteName,
	bottom: NoteName,
	handleIncrementTop: () => void,
	handleDecrementTop: () => void,
	handleIncrementBottom: () => void,
	handleDecrementBottom: () => void,
}

const Range: FC<Props> = ({
	top,
	bottom,
	handleIncrementTop,
	handleDecrementTop,
	handleIncrementBottom,
	handleDecrementBottom,
}) => {
	return (
		<section className={ controlStyles.controlsSection }>
			<p>Range</p>

			<div className={ controlStyles.controlAlignment }>
				<div className={ styles.row }>
					<div className={ styles.controlGroup }>
						<button className={ styles.buttonUp } onClick={ handleIncrementBottom }>&#9662;</button>
						<button className={ styles.buttonDown } onClick={ handleDecrementBottom }>&#9662;</button>
					</div>

					<svg
						className={ styles.svg }
						viewBox='0 0 55 100'
					>
						<g transform='translate(0, 20)'>
							<Stave />
							<Note
								barWidth={ 50 }
								xFraction={ 0.25 }
								dotted={ false }
								note={ bottom }
							>
								{ (props: NoteCoordinates) => (
									<SemiBreve { ...props } barNumber={ -2 } />
								) }
							</Note>

							<Note
								barWidth={ 50 }
								xFraction={ 0.75 }
								dotted={ false }
								note={ top }
							>
								{ (props: NoteCoordinates) => (
									<SemiBreve { ...props } barNumber={ -2 } />
								) }
							</Note>
						</g>
					</svg>

					<div className={ styles.controlGroup }>
						<button className={ styles.buttonUp } onClick={ handleIncrementTop }>&#9662;</button>
						<button className={ styles.buttonDown } onClick={ handleDecrementTop }>&#9662;</button>
					</div>
				</div>
			</div>
		</section >
	);
};

export default Range;