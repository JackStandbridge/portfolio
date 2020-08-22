import Letter from '../Letter';
import styles from './Line.module.scss';

const Line = ({ letterIds, isWheelLayout }) => {

	const dimensions = 5;
	const spacing = 0.5;

	return (
		<div className={ styles.line }>

			{ letterIds.map(id => (
				<Letter
					key={ id }
					id={ id }
					dimensions={ dimensions }
					isWheelLayout={ isWheelLayout }
					spacing={ spacing }
				/>
			)) }

		</div>
	);
};

export default Line;