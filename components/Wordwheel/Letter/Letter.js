import Loading from '../Loading/Loading';

import styles from './Letter.module.scss';

const Letter = ({
	id,
	backingStyles,
	buttonStyles,
	letter,
	handleToggle,
	handleDeselect,
	focused,
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