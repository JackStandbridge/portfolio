import { FC, MouseEventHandler } from 'react';

import Minim from '../../Notes/Minim';

import controlStyles from '../Controls.module.scss';
import styles from './ToggleNoteNames.module.scss';

interface Props {
	handleToggle: MouseEventHandler,
	active: boolean,
}

const ToggleNoteNames: FC<Props> = ({ handleToggle, active }) => {
	return (
		<section className={ controlStyles.controlsSection }>
			<p>Show Names</p>

			<div className={ controlStyles.controlAlignment }>
				<button onClick={ handleToggle } className={ active ? styles.button : styles.inactiveButton }>
					<svg viewBox='0 0 30 50'>
						<Minim
							x={ 15 }
							y={ 20 }
							barNumber={ -5 }
						/>
						<line
							x1={ 0 }
							y1={ 10 }
							x2={ 30 }
							y2={ 10 }
							stroke='#000'
							strokeWidth='1'
							strokeLinecap='round'
						/>
						<line
							x1={ 5 }
							y1={ 20 }
							x2={ 25 }
							y2={ 20 }
							stroke='#000'
							strokeWidth='1'
							strokeLinecap='round'
						/>
						<text
							textAnchor='middle'
							fontWeight='bold'
							fill='#333'
							x={ 15 }
							y={ 45 }
						>C</text>
					</svg>
				</button>
			</div>
		</section>
	);
};

export default ToggleNoteNames;