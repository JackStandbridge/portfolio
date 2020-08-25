import Letter from '../Letter';
import styles from './line.module.scss';

const Line = ({ letterIds, isWheelLayout, scale, spacing, dimensions }) => {
	return (
		<div className={ styles.wrapper }>
			<div className={ styles.line }>

				{ letterIds.map(id => (
					<Letter
						scale={ scale }
						spacing={ spacing }
						dimensions={ dimensions }
						isWheelLayout={ isWheelLayout }
						key={ id }
						id={ id }
					/>
				)) }

			</div>
		</div>
	);
};

export default Line;