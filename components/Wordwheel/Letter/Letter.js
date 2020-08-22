import styles from './Letter.module.scss';

const Letter = ({
	id,
	backingStyles,
	buttonStyles,
	letter,
	handleClick
}) => (
	<>
		<button
			style={ backingStyles }
			className={ styles.backing }
		>
			{ letter }
		</button>

		<button
			style={ buttonStyles }
			onClick={ () => handleClick(id) }
			className={ styles.button }
		>
			{ letter }
		</button>
	</>
);


export default Letter;