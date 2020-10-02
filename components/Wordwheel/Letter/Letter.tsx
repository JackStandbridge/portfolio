import { FC, MouseEvent } from 'react';
import Loading from '../Loading/Loading';

import styles from './Letter.module.scss';

interface Props {
	id: number,
	letter: string | null,
	focused: boolean,
	backingStyles: {
		left: string,
		top: string,
		height: string,
		width: string,
	},
	buttonStyles: {
		left: string,
		top: string,
		height: string,
		width: string,
	},

	handleToggle: (id: number) => void,
	handleDeselect: (id: number) => void,
	handleDragStart: (e: React.DragEvent<HTMLButtonElement>) => void,
}

const Letter: FC<Props> = ({
	id,
	letter,
	focused,
	backingStyles,
	buttonStyles,

	handleToggle,
	handleDeselect,
	handleDragStart,
}) => {
	return (
		<>
			{ !letter &&
				<span
					className={ styles.button }
					style={ backingStyles }
				>
					<Loading />
				</span>
			}

			{ letter &&
				<>
					<button
						tabIndex={ -1 }
						style={ backingStyles }
						className={ `${ styles.backing } ${ focused ? styles.focused : '' }` }
						onClick={ () => handleDeselect(id) }
					>
						{ letter }
					</button>

					<button
						onMouseDown={ handleDragStart }
						tabIndex={ -1 }
						style={ buttonStyles }
						onClick={ () => handleToggle(id) }
						className={ id === 4 ? styles.middle : styles.button }
					>
						{ letter }
					</button>
				</>
			}
		</>
	);
}

export default Letter;