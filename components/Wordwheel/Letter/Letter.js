import styles from './letter.module.scss';

const Letter = ({
	id,
	backingStyles,
	buttonStyles,
	letter,
	handleToggle,
	handleDeselect,
}) => (
	<>
		<button
			style={ backingStyles }
			className={ styles.backing }
			onClick={ () => handleDeselect(id) }
			tabIndex={ -1 }
		>
			{ letter }
		</button>

		<button
			style={ buttonStyles }
			onClick={ () => handleToggle(id) }
			className={ id === 4 ? styles.middle : styles.button }
		>
			{ letter }
		</button>
	</>
);


export default Letter;