import styles from './Target.module.scss';

const Target = ({ guessed, targets, total }) => {
	return (
		<header className={ styles.header }>
			<span>Guessed: { guessed }</span>

			<span className={ styles.targets }>
				{ targets.map(({ name, value, attained }) => (
					<span
						className={ attained ? styles.attained : styles.target }
						key={ name }
					>
						{ name }: { value }
					</span>
				)) }
			</span>

			<span className={ styles.total }>Total: { total }</span>
		</header>
	);
};

export default Target;