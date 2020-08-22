import styles from './Letter.module.scss';

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
		>
			{ letter }
		</button>

		<button
			style={ buttonStyles }
			onClick={ () => handleToggle(id) }
			className={ styles.button }
		>
			{ letter }
		</button>
	</>
);


export default Letter;